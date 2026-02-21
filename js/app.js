/* ============================================================
   Daily English — Core JavaScript
   Handles: bookmarks, toast, terms agreement, shared utils
   ============================================================ */

/* ── Storage Keys ──────────────────────────────────────────── */
const STORAGE_KEYS = {
  agreed:    'de_agreed',
  bookmarks: 'de_bookmarks',
};

/* ── Bookmark Utilities ────────────────────────────────────── */

/**
 * Get all bookmarks from localStorage.
 * @returns {Array} bookmarks array
 */
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || '[]');
  } catch (e) {
    return [];
  }
}

/**
 * Save bookmarks array to localStorage.
 */
function saveBookmarks(bms) {
  try {
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bms));
  } catch (e) {
    console.warn('localStorage unavailable');
  }
}

/**
 * Check if an item is already bookmarked by id.
 */
function isBookmarked(id) {
  return getBookmarks().some(b => b.id === id);
}

/**
 * Toggle bookmark state for an item.
 * @param {string} type   - 'show' | 'season' | 'episode' | 'expression'
 * @param {string} id     - unique identifier
 * @param {string} label  - human-readable label
 * @param {string} url    - relative path to jump to when clicked
 */
function toggleBookmark(type, id, label, url) {
  let bms = getBookmarks();
  const idx = bms.findIndex(b => b.id === id);
  if (idx > -1) {
    bms.splice(idx, 1);
    showToast('🔖 Bookmark removed');
  } else {
    bms.unshift({ type, id, label, url, ts: Date.now() });
    showToast('🔖 Bookmarked!');
  }
  saveBookmarks(bms);

  // Update all bookmark buttons that share this id
  document.querySelectorAll(`[data-bm-id="${id}"]`).forEach(el => {
    el.classList.toggle('saved', isBookmarked(id));
    if (el.tagName === 'BUTTON') {
      const isSaved = isBookmarked(id);
      el.textContent = isSaved ? '🔖 Saved' : '🔖 Save';
      if (el.classList.contains('btn-bm')) {
        el.textContent = isSaved ? '🔖 Bookmarked' : '🔖 Bookmark';
      }
    }
  });

  // Re-render bookmark bar if it exists on the page
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

/**
 * Remove a bookmark by id and refresh UI.
 */
function removeBookmark(id, event) {
  if (event) event.stopPropagation();
  let bms = getBookmarks().filter(b => b.id !== id);
  saveBookmarks(bms);
  showToast('Bookmark removed');
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

/**
 * Render the bookmark bar chips on the home page.
 */
function renderBookmarkBar() {
  const container = document.getElementById('bookmarkChips');
  if (!container) return;
  const bms = getBookmarks();
  if (bms.length === 0) {
    container.innerHTML = '<span class="bm-empty">No bookmarks yet. Click 🔖 on any Season, Episode, or Expression to save your progress.</span>';
    return;
  }
  container.innerHTML = bms.map(b => {
    const typeIcon = { show: '📺', season: '🎬', episode: '📋', expression: '💬' }[b.type] || '🔖';
    return `
      <div class="bm-chip" onclick="window.location.href='${b.url}'">
        ${typeIcon} ${escHtml(b.label)}
        <span class="bm-x" onclick="removeBookmark('${b.id}', event)" title="Remove">✕</span>
      </div>
    `;
  }).join('');
}

/**
 * Sync all bookmark button visual states on the current page.
 */
function syncBookmarkButtons() {
  document.querySelectorAll('[data-bm-id]').forEach(el => {
    const id = el.dataset.bmId;
    const saved = isBookmarked(id);
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

let _toastTimer = null;
function showToast(msg) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
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
    // Redirect to terms, preserve intended destination
    const intended = encodeURIComponent(window.location.href);
    window.location.href = `../../index.html?redirect=${intended}`;
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

/* ── Init on DOMContentLoaded ──────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Sync bookmark buttons
  syncBookmarkButtons();
  // Render bookmark bar (home page)
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
});
