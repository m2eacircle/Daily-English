/* ============================================================
   Daily English — Service Worker  (v2 — fixed paths)
   - All paths are relative to sw.js location (app root)
   - start_url matches manifest.json: ./index.html
   - Offline fallback resolves from cache correctly
   ============================================================ */

var CACHE_VERSION = 'daily-english-v3';

/* Core app-shell files to pre-cache on install */
var PRECACHE_URLS = [
  'index.html',
  'css/style.css',
  'js/i18n.js',
  'js/app.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'images/friends.jpg',
  'images/the_office.png',
  'images/modern_family.png',
  'friends/index.html',
  'friends/friends-data.js',
  'friends/seasons/season1.html',
  'friends/seasons/season2.html',
  'friends/seasons/season3.html',
  'friends/seasons/season4.html',
  'friends/seasons/season5.html',
  'friends/seasons/season6.html',
  'friends/seasons/season7.html',
  'friends/seasons/season8.html',
  'friends/seasons/season9.html',
  'friends/seasons/season10.html',
  'friends/episodes/s1e1.html',
  'friends/episodes/s1e2.html',
  'friends/episodes/s1e3.html',
  'friends/episodes/s1e4.html',
  'friends/episodes/s1e5.html',
  'friends/episodes/s1e6.html',
  'friends/episodes/s1e7.html',
  'friends/episodes/s1e8.html',
  'friends/episodes/s1e9.html',
  'friends/episodes/s1e10.html',
  'friends/episodes/s1e11.html',
  'friends/episodes/s1e12.html',
  'friends/episodes/s1e13.html',
  'friends/episodes/s1e14.html',
  'friends/episodes/s1e15.html',
  'friends/episodes/s1e16.html',
  'friends/episodes/s1e17.html',
  'friends/episodes/s1e18.html',
  'friends/episodes/s1e19.html',
  'friends/episodes/s1e20.html',
  'friends/episodes/s1e21.html',
  'friends/episodes/s1e22.html',
  'friends/episodes/s1e23.html',
  'friends/episodes/s1e24.html',
];

/* ── Helpers ───────────────────────────────────────────────── */

/* Resolve a bare path against the SW's own base URL so cache
   keys are always full absolute URLs — prevents key mismatches */
function toAbsolute(path) {
  return new URL(path, self.location.href).href;
}

var FALLBACK_URL = toAbsolute('index.html');

/* ── Install ───────────────────────────────────────────────── */
self.addEventListener('install', function(event) {
  console.log('[SW v2] Installing…');
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      var promises = PRECACHE_URLS.map(function(path) {
        var absUrl = toAbsolute(path);
        return fetch(new Request(absUrl, { cache: 'reload' }))
          .then(function(response) {
            if (response.ok) {
              return cache.put(absUrl, response);
            }
          })
          .catch(function(err) {
            console.warn('[SW] Skipped (not found):', path, err.message);
          });
      });
      return Promise.all(promises);
    }).then(function() {
      console.log('[SW v2] Pre-cache complete. Skipping waiting.');
      return self.skipWaiting();
    })
  );
});

/* ── Activate: delete old cache versions ──────────────────── */
self.addEventListener('activate', function(event) {
  console.log('[SW v2] Activating…');
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_VERSION; })
            .map(function(key) {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
      );
    }).then(function() {
      console.log('[SW v2] Now controlling all clients.');
      return self.clients.claim();
    })
  );
});

/* ── Fetch: cache-first, fallback to network, then offline ── */
self.addEventListener('fetch', function(event) {
  var req = event.request;

  /* Only handle GET */
  if (req.method !== 'GET') return;

  var url = req.url;

  /* Pass through: YouTube, external video sources */
  if (url.includes('youtube.com') || url.includes('youtu.be') ||
      url.includes('ytimg.com') || url.includes('googlevideo.com')) {
    return;
  }

  /* Network-first for Google Fonts (they change rarely, but we want fresh) */
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(req).then(function(res) {
        var clone = res.clone();
        caches.open(CACHE_VERSION).then(function(c) { c.put(req, clone); });
        return res;
      }).catch(function() {
        return caches.match(req);
      })
    );
    return;
  }

  /* Cache-first for everything else (app HTML/CSS/JS/images) */
  event.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) {
        /* Refresh cache in background (stale-while-revalidate) */
        fetch(req).then(function(fresh) {
          if (fresh && fresh.ok) {
            caches.open(CACHE_VERSION).then(function(c) { c.put(req, fresh); });
          }
        }).catch(function() {});
        return cached;
      }

      /* Not in cache — try network */
      return fetch(req).then(function(response) {
        if (!response || !response.ok) return response;
        var clone = response.clone();
        caches.open(CACHE_VERSION).then(function(c) { c.put(req, clone); });
        return response;
      }).catch(function() {
        /* Fully offline fallback: serve index.html for navigation requests */
        var accept = req.headers.get('accept') || '';
        if (accept.includes('text/html')) {
          return caches.match(FALLBACK_URL).then(function(fb) {
            return fb || new Response(
              '<h2 style="font-family:sans-serif;padding:2rem">&#128683; Offline &mdash; please reconnect to load this page.</h2>',
              { headers: { 'Content-Type': 'text/html' } }
            );
          });
        }
      });
    })
  );
});

/* ── Messages from the page ────────────────────────────────── */
self.addEventListener('message', function(event) {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) { return caches.delete(k); }));
    }).then(function() {
      console.log('[SW] All caches cleared');
      if (event.source) event.source.postMessage({ type: 'CACHE_CLEARED' });
    });
  }
});
