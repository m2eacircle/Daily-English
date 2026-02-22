/* ============================================================
   Daily English — Core JavaScript
   Handles: bookmarks, toast, terms agreement, shared utils
   ============================================================ */

/* ── Storage Keys ──────────────────────────────────────────── */
const STORAGE_KEYS = {
  agreed:    'de_agreed',
  bookmarks: 'de_bookmarks',
};

/* ── App Root Detection ────────────────────────────────────── */
/* Find the root URL of the app (the folder containing index.html)
   by walking up from the current page URL until we reach a path
   that contains the app root marker.
   Works from any depth: root, friends/, friends/seasons/, friends/episodes/ */
function getAppRoot() {
  var href = window.location.href;
  var path = window.location.pathname;
  // Find the daily-english root by looking for known sub-paths and stripping them
  var markers = [
    '/friends/episodes/',
    '/friends/seasons/',
    '/friends/'
  ];
  for (var i = 0; i < markers.length; i++) {
    var idx = path.indexOf(markers[i]);
    if (idx !== -1) {
      return href.substring(0, href.indexOf(markers[i])) + '/';
    }
  }
  // Already at root or one level down
  return href.substring(0, href.lastIndexOf('/') + 1);
}

/* Navigate to a bookmark URL stored relative to the app root */
function goToBookmark(relUrl) {
  var root = getAppRoot();
  // Strip leading slash if present
  var clean = relUrl.replace(/^\/+/, '');
  window.location.href = root + clean;
}

/* ── Bookmark Utilities ────────────────────────────────────── */

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || '[]');
  } catch (e) {
    return [];
  }
}

function saveBookmarks(bms) {
  try {
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bms));
  } catch (e) {
    console.warn('localStorage unavailable');
  }
}

function isBookmarked(id) {
  return getBookmarks().some(function(b) { return b.id === id; });
}

function toggleBookmark(type, id, label, url) {
  var bms = getBookmarks();
  var idx = bms.findIndex(function(b) { return b.id === id; });
  if (idx > -1) {
    bms.splice(idx, 1);
    showToast('🔖 Bookmark removed');
  } else {
    bms.unshift({ type: type, id: id, label: label, url: url, ts: Date.now() });
    showToast('🔖 Bookmarked!');
  }
  saveBookmarks(bms);

  // Update all bookmark buttons that share this id
  document.querySelectorAll('[data-bm-id="' + id + '"]').forEach(function(el) {
    var saved = isBookmarked(id);
    el.classList.toggle('saved', saved);
    if (el.classList.contains('btn-bm')) {
      el.textContent = saved ? '🔖 Bookmarked' : '🔖 Bookmark';
    }
    if (el.classList.contains('bm-corner')) {
      el.title = saved ? 'Remove Bookmark' : 'Bookmark';
    }
  });

  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

function removeBookmark(id, event) {
  if (event) event.stopPropagation();
  var bms = getBookmarks().filter(function(b) { return b.id !== id; });
  saveBookmarks(bms);
  showToast('Bookmark removed');
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

function renderBookmarkBar() {
  var container = document.getElementById('bookmarkChips');
  if (!container) return;
  var bms = getBookmarks();
  if (bms.length === 0) {
    container.innerHTML = '<span class="bm-empty">No bookmarks yet. Click 🔖 on any Season, Episode, or Expression to save your progress.</span>';
    return;
  }
  var typeIcon = { show: '📺', season: '🎬', episode: '📋', expression: '💬' };
  container.innerHTML = bms.map(function(b) {
    var icon = typeIcon[b.type] || '🔖';
    // Use goToBookmark() so navigation always resolves from app root
    return '<div class="bm-chip" onclick="goToBookmark(\'' + b.url.replace(/'/g, "\\'") + '\')">'
      + icon + ' ' + escHtml(b.label)
      + '<span class="bm-x" onclick="removeBookmark(\'' + b.id.replace(/'/g, "\\'") + '\', event)" title="Remove">\u2715</span>'
      + '</div>';
  }).join('');
}

function syncBookmarkButtons() {
  document.querySelectorAll('[data-bm-id]').forEach(function(el) {
    var id = el.dataset.bmId;
    var saved = isBookmarked(id);
    el.classList.toggle('saved', saved);
    if (el.classList.contains('bm-corner')) {
      el.title = saved ? 'Remove Bookmark' : 'Bookmark';
    }
    if (el.classList.contains('btn-bm')) {
      el.textContent = saved ? '🔖 Bookmarked' : '🔖 Bookmark';
    }
  });
}

/* ── Toast ─────────────────────────────────────────────────── */

var _toastTimer = null;
function showToast(msg) {
  var t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2200);
}

/* ── Terms Agreement ───────────────────────────────────────── */

function hasAgreed() {
  try { return localStorage.getItem(STORAGE_KEYS.agreed) === '1'; } catch (e) { return false; }
}

function setAgreed() {
  try { localStorage.setItem(STORAGE_KEYS.agreed, '1'); } catch (e) {}
}

function checkTermsGuard() {
  if (!hasAgreed()) {
    var intended = encodeURIComponent(window.location.href);
    window.location.href = getAppRoot() + 'index.html?redirect=' + intended;
  }
}

/* ── String Helpers ────────────────────────────────────────── */

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Init ──────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {
  syncBookmarkButtons();
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
});
