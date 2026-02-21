/* ============================================================
   Daily English — Service Worker
   Enables: offline use, local install (PWA), fast loading
   Strategy: Cache-first for app shell, network-first for data
   ============================================================ */

const CACHE_NAME    = 'daily-english-v1';
const CACHE_STATIC  = 'daily-english-static-v1';

/* Files to cache immediately on install (app shell) */
const PRECACHE_URLS = [
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './friends/index.html',
  './friends/friends-data.js',
  /* Season pages */
  './friends/seasons/season1.html',
  './friends/seasons/season2.html',
  './friends/seasons/season3.html',
  './friends/seasons/season4.html',
  './friends/seasons/season5.html',
  './friends/seasons/season6.html',
  './friends/seasons/season7.html',
  './friends/seasons/season8.html',
  './friends/seasons/season9.html',
  './friends/seasons/season10.html',
  /* Season 1 episodes (pre-cached as they contain real data) */
  './friends/episodes/s1e1.html',
  './friends/episodes/s1e2.html',
  './friends/episodes/s1e3.html',
  './friends/episodes/s1e4.html',
  './friends/episodes/s1e5.html',
  './friends/episodes/s1e6.html',
  './friends/episodes/s1e7.html',
  './friends/episodes/s1e8.html',
  './friends/episodes/s1e9.html',
  './friends/episodes/s1e10.html',
  './friends/episodes/s1e11.html',
  './friends/episodes/s1e12.html',
  './friends/episodes/s1e13.html',
  './friends/episodes/s1e14.html',
  './friends/episodes/s1e15.html',
  './friends/episodes/s1e16.html',
  './friends/episodes/s1e17.html',
  './friends/episodes/s1e18.html',
  './friends/episodes/s1e19.html',
  './friends/episodes/s1e20.html',
  './friends/episodes/s1e21.html',
  './friends/episodes/s1e22.html',
  './friends/episodes/s1e23.html',
  './friends/episodes/s1e24.html',
  /* Images */
  './images/friends.jpg',
];

/* ── Install: pre-cache app shell ──────────────────────────── */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(function(cache) {
      console.log('[SW] Pre-caching app shell');
      /* addAll fails if any URL 404s; use individual add with catch */
      return Promise.all(
        PRECACHE_URLS.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('[SW] Failed to cache:', url, err);
          });
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

/* ── Activate: clean up old caches ────────────────────────── */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_STATIC && key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

/* ── Fetch: cache-first for HTML/CSS/JS, pass-through for YouTube ── */
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  /* Never intercept YouTube, external APIs, or non-GET requests */
  if (event.request.method !== 'GET') return;
  if (url.includes('youtube.com') || url.includes('youtu.be')) return;
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    /* Cache Google Fonts */
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cached) {
          if (cached) return cached;
          return fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  /* Cache-first for all local app files */
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;

      /* Not in cache — fetch from network and cache it */
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_STATIC).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function() {
        /* Offline fallback for HTML pages */
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});

/* ── Message handler: force cache update ──────────────────── */
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) { return caches.delete(key); }));
    }).then(function() {
      console.log('[SW] All caches cleared');
    });
  }
});
