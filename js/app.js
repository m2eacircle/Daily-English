/* ============================================================
   Daily English — Core JavaScript
   Handles: language, bookmarks, toast, terms, shared utils
   ============================================================ */

/* ── Storage Keys ──────────────────────────────────────────── */
var STORAGE_KEYS = {
  agreed:    'de_agreed',
  bookmarks: 'de_bookmarks',
  lang:      'de_lang',
};

/* ── Language System ───────────────────────────────────────── */

function detectDeviceLang() {
  var nav = (navigator.language || navigator.userLanguage || '');
  return nav.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

function getLang() {
  try {
    return localStorage.getItem(STORAGE_KEYS.lang) || detectDeviceLang();
  } catch (e) {
    return detectDeviceLang();
  }
}

function saveLang(lang) {
  try { localStorage.setItem(STORAGE_KEYS.lang, lang); } catch (e) {}
}

function setLang(lang) {
  saveLang(lang);
  document.documentElement.lang = lang;
  var btnEn = document.getElementById('topbar-lang-en');
  var btnKo = document.getElementById('topbar-lang-ko');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnKo) btnKo.classList.toggle('active', lang === 'ko');
  document.body.classList.toggle('ko-active', lang === 'ko');
  applyLang();

  /* If page has a Korean terms modal, re-render it too */
  if (typeof renderTermsModal === 'function') renderTermsModal();
  /* If page has dynamic content builder (episode/season), rebuild it */
  if (typeof buildExpressions === 'function') buildExpressions();
  if (typeof buildEpisodeGrid === 'function') buildEpisodeGrid();
  if (typeof buildSeasonGrid  === 'function') buildSeasonGrid();
  /* Re-sync bookmark button labels after any rebuild */
  if (typeof syncBookmarkButtons === 'function') syncBookmarkButtons();
  if (typeof renderBookmarkBar === 'function' && document.getElementById('bookmarkBar')) renderBookmarkBar();
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key  = el.getAttribute('data-i18n');
    var vars = el.getAttribute('data-i18n-vars');
    var parsed = vars ? JSON.parse(vars) : undefined;
    el.innerHTML = t(key, parsed);
  });
}

function buildLangToggle() {
  var lang = getLang();
  return '<div class="topbar-lang">'
    + '<button id="topbar-lang-en" class="topbar-lang-btn' + (lang === 'en' ? ' active' : '') + '"'
    + ' onclick="setLang(\'en\')" title="English">EN</button>'
    + '<button id="topbar-lang-ko" class="topbar-lang-btn' + (lang === 'ko' ? ' active' : '') + '"'
    + ' onclick="setLang(\'ko\')" title="\ud55c\uad6d\uc5b4">KO</button>'
    + '</div>';
}

/* ── App Root Detection ────────────────────────────────────── */
function getAppRoot() {
  var href = window.location.href;
  var path = window.location.pathname;
  var markers = ['/friends/episodes/', '/friends/seasons/', '/friends/'];
  for (var i = 0; i < markers.length; i++) {
    var idx = path.indexOf(markers[i]);
    if (idx !== -1) {
      return href.substring(0, href.indexOf(markers[i])) + '/';
    }
  }
  return href.substring(0, href.lastIndexOf('/') + 1);
}

function goToBookmark(relUrl) {
  var root  = getAppRoot();
  var clean = relUrl.replace(/^\/+/, '');
  window.location.href = root + clean;
}

/* ── Bookmark Utilities ────────────────────────────────────── */
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || '[]');
  } catch (e) { return []; }
}

function saveBookmarks(bms) {
  try { localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bms)); }
  catch (e) { console.warn('localStorage unavailable'); }
}

function isBookmarked(id) {
  return getBookmarks().some(function(b) { return b.id === id; });
}

function toggleBookmark(type, id, label, url) {
  var bms = getBookmarks();
  var idx = bms.findIndex(function(b) { return b.id === id; });
  if (idx > -1) {
    bms.splice(idx, 1);
    showToast(t('bm.toast.removed'));
  } else {
    bms.unshift({ type: type, id: id, label: label, url: url, ts: Date.now() });
    showToast(t('bm.toast.added'));
  }
  saveBookmarks(bms);

  document.querySelectorAll('[data-bm-id="' + id + '"]').forEach(function(el) {
    var saved = isBookmarked(id);
    el.classList.toggle('saved', saved);
    if (el.classList.contains('btn-bm')) {
      el.innerHTML = saved ? t('bm.bookmarked') : t('bm.bookmark');
    }
    if (el.classList.contains('bm-corner')) {
      el.title = saved ? t('bm.bookmarked') : t('bm.bookmark');
    }
  });

  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

function removeBookmark(id, event) {
  if (event) event.stopPropagation();
  saveBookmarks(getBookmarks().filter(function(b) { return b.id !== id; }));
  showToast(t('bm.toast.removed'));
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
}

function renderBookmarkBar() {
  var container = document.getElementById('bookmarkChips');
  if (!container) return;
  var bms = getBookmarks();
  var barHead = document.querySelector('.bookmark-bar-head span:last-child');
  if (barHead) barHead.innerHTML = t('bm.bar.title');
  if (bms.length === 0) {
    container.innerHTML = '<span class="bm-empty">' + t('bm.empty') + '</span>';
    return;
  }
  var typeIcon = { show: '📺', season: '🎬', episode: '📋', expression: '💬' };
  container.innerHTML = bms.map(function(b) {
    var icon = typeIcon[b.type] || '🔖';
    return '<div class="bm-chip" onclick="goToBookmark(\'' + b.url.replace(/'/g, "\\'") + '\')">'
      + icon + ' ' + escHtml(b.label)
      + '<span class="bm-x" onclick="removeBookmark(\'' + b.id.replace(/'/g, "\\'") + '\', event)" title="Remove">\u2715</span>'
      + '</div>';
  }).join('');
}

function syncBookmarkButtons() {
  document.querySelectorAll('[data-bm-id]').forEach(function(el) {
    var id    = el.dataset.bmId;
    var saved = isBookmarked(id);
    el.classList.toggle('saved', saved);
    if (el.classList.contains('bm-corner')) {
      el.title = saved ? t('bm.bookmarked') : t('bm.bookmark');
    }
    if (el.classList.contains('btn-bm')) {
      el.innerHTML = saved ? t('bm.bookmarked') : t('bm.bookmark');
    }
  });
}

/* ── Toast ─────────────────────────────────────────────────── */
var _toastTimer = null;
function showToast(msg) {
  var toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

/* ── Terms ─────────────────────────────────────────────────── */
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

/* ── Terms Modal (inner pages) ─────────────────────────────── */
function renderTermsModal() {
  var modal = document.getElementById('termsModal');
  if (!modal) return;
  modal.innerHTML = '<div style="max-width:580px;margin:40px auto;padding:0 16px 60px;">'
    + '<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:26px 24px;position:relative;">'
    + '<button onclick="closeTermsModal()" style="position:absolute;top:14px;right:16px;background:none;border:none;font-size:1.4rem;color:var(--muted);cursor:pointer;">&times;</button>'
    + '<div style="text-align:center;margin-bottom:16px;">'
    + '<div style="font-size:2.2rem;margin-bottom:8px;">&#128214;</div>'
    + '<div style="font-size:1.2rem;font-weight:900;color:var(--accent);">' + t('terms.modal.title') + '</div>'
    + '<div style="font-size:0.78rem;color:var(--muted);margin-top:4px;">' + t('terms.modal.sub') + '</div>'
    + '</div>'
    + '<div id="agreedBadge" style="display:none;background:rgba(34,197,94,0.12);border:1.5px solid #22c55e;border-radius:10px;padding:11px 16px;margin-bottom:16px;align-items:center;gap:10px;">'
    + '<span style="font-size:1.3rem;">&#9989;</span>'
    + '<div><div style="font-size:0.85rem;font-weight:900;color:#22c55e;">' + t('terms.agreed') + '</div>'
    + '<div style="font-size:0.76rem;color:var(--muted);margin-top:2px;">' + t('terms.agreed.sub') + '</div></div>'
    + '</div>'
    + '<div style="background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:16px 18px;margin-bottom:14px;">'
    + '<div style="font-size:0.82rem;font-weight:900;color:var(--accent2);margin-bottom:10px;">' + t('terms.heading') + '</div>'
    + '<ul style="list-style:none;padding:0;margin:0;">'
    + '<li style="font-size:0.85rem;color:var(--text);line-height:1.75;padding:8px 0 8px 16px;border-bottom:1px solid var(--border);position:relative;"><span style="position:absolute;left:0;color:var(--accent);">&#9658;</span>' + t('terms.1') + '</li>'
    + '<li style="font-size:0.85rem;color:var(--text);line-height:1.75;padding:8px 0 8px 16px;border-bottom:1px solid var(--border);position:relative;"><span style="position:absolute;left:0;color:var(--accent);">&#9658;</span>' + t('terms.2') + '</li>'
    + '<li style="font-size:0.85rem;color:var(--text);line-height:1.75;padding:8px 0 0 16px;position:relative;"><span style="position:absolute;left:0;color:var(--accent);">&#9658;</span>' + t('terms.3') + '</li>'
    + '</ul></div>'
    + '<div style="background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:16px 18px;margin-bottom:18px;">'
    + '<div style="font-size:0.82rem;font-weight:900;color:var(--accent2);margin-bottom:10px;">' + t('terms.about.heading') + '</div>'
    + '<p style="font-size:0.85rem;color:var(--text);line-height:1.75;margin:0 0 8px;">' + t('terms.about.1') + '</p>'
    + '<p style="font-size:0.85rem;color:var(--text);line-height:1.75;margin:0;">' + t('terms.about.2') + '</p>'
    + '</div>'
    + '<button onclick="closeTermsModal()" style="width:100%;background:linear-gradient(135deg,var(--accent),#0ea5e9);color:var(--bg);border:none;border-radius:10px;padding:13px;font-size:0.95rem;font-weight:900;cursor:pointer;font-family:inherit;">'
    + t('terms.close') + '</button>'
    + '</div></div>';

  /* Restore backdrop click listener */
  modal.addEventListener('click', function(e) { if (e.target === this) closeTermsModal(); });
}

function showTermsModal() {
  var modal = document.getElementById('termsModal');
  if (!modal) return;
  renderTermsModal();
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  var badge = document.getElementById('agreedBadge');
  if (badge) badge.style.display = (localStorage.getItem('de_agreed') === '1') ? 'flex' : 'none';
}

function closeTermsModal() {
  var modal = document.getElementById('termsModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
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
  /* Inject lang toggle into every topbar-right */
  var topbarRight = document.querySelector('.topbar-right');
  if (topbarRight) {
    var toggle = document.createElement('div');
    toggle.innerHTML = buildLangToggle();
    topbarRight.insertBefore(toggle.children[0], topbarRight.firstChild);
  }

  /* Apply current language */
  var lang = getLang();
  document.documentElement.lang = lang;
  document.body.classList.toggle('ko-active', lang === 'ko');
  applyLang();

  /* Sync bookmarks */
  syncBookmarkButtons();
  if (document.getElementById('bookmarkBar')) renderBookmarkBar();
});
