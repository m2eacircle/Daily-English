/* ============================================================
   Daily English — Internationalization (i18n)
   Supported languages: 'en' (English), 'ko' (Korean)
   ============================================================ */

var I18N = {

  en: {
    /* ── Topbar ── */
    'nav.home':              'Home',
    'nav.back':              'Back',
    'nav.back.friends':      'Back to Friends',
    'nav.back.season':       'Back to Season {n}',

    /* ── Breadcrumb ── */
    'bc.home':               'Home',

    /* ── Bookmark bar ── */
    'bm.bar.title':          'Your Bookmarks — Jump back to where you left off',
    'bm.empty':              'No bookmarks yet. Click 🔖 on any Season, Episode, or Expression to save your progress.',
    'bm.bookmark':           '🔖 Bookmark',
    'bm.bookmarked':         '🔖 Bookmarked',
    'bm.episode':            '🔖 Bookmark Episode',
    'bm.episode.saved':      '🔖 Bookmarked',
    'bm.season':             '🔖 Bookmark Season',
    'bm.season.saved':       '🔖 Bookmarked',
    'bm.toast.added':        '🔖 Bookmarked!',
    'bm.toast.removed':      '🔖 Bookmark removed',

    /* ── Home page ── */
    'home.hero.title':       '🎬 <span class="accent">ONE</span> Expression <span class="day">per DAY</span>',
    'home.hero.sub':         'Learn natural, everyday English expressions through iconic TV shows and video clips — one expression at a time.',
    'home.shows.label':      '📺 Shows',
    'home.friends.meta':     '10 Seasons · 236 Episodes · Real everyday expressions',
    'home.office.meta':      'Study content in preparation — stay tuned!',
    'home.mf.meta':          'Study content in preparation — stay tuned!',
    'home.coming':           '🚧 Coming Soon',

    /* ── Friends index ── */
    'friends.meta':          '10 Seasons · 236 Episodes total · 1994–2004 · Learn everyday English expressions from the iconic sitcom',
    'friends.seasons.label': '🎬 Select a Season',

    /* ── Season page ── */
    'season.episodes.label': '🎬 Episodes — Season {n} ({count} Episodes)',
    'season.meta':           '{year} · {count} Episodes · Click an episode to explore expressions',

    /* ── Episode page ── */
    'episode.exprs.label':   '💬 15 English Expressions — Season {s} Episode {e}',
    'expr.watch':            '▶ Watch on YouTube',
    'expr.coming':           '▶ YouTube Link Coming Soon',
    'expr.placeholder':      'Expression {n}',
    'expr.placeholder.sub':  'Add this expression to EP_DATA.expressions in the page source.',
    'expr.num':              'Expression {n} · S{s}E{e}',

    /* ── Footer ── */
    'footer.copy':           '© 2025 m2ea Labs. All rights reserved.',
    'footer.terms':          'Terms of Use',

    /* ── Terms modal ── */
    'terms.modal.title':     'Terms of Use',
    'terms.modal.sub':       'Daily English — ONE Expression per DAY | by m2ea Labs',
    'terms.agreed':          'You have agreed to these Terms of Use.',
    'terms.agreed.sub':      'Your agreement is saved on this device. Thank you for using Daily English responsibly.',
    'terms.heading':         '📌 Terms of Use',
    'terms.1':               'This app is for <strong>study purposes only</strong>. All video clips\u2019 rights belong to each respective company. If any company requests content removal, all contents can be removed without prior notice.',
    'terms.2':               'You <strong>cannot use this content for any other purposes</strong>. Use is strictly limited to <strong>personal study only</strong>.',
    'terms.3':               'All explanations represent a <strong>m2ea Labs opinion</strong>. If you have a different opinion, <em>you are right</em> — use your own judgment.',
    'terms.about.heading':   'ℹ️ About This App',
    'terms.about.1':         'Daily English connects short YouTube video clips to real English expressions used in popular TV shows.',
    'terms.about.2':         'Operated by <strong>m2ea Labs</strong> as a study group project. YouTube clips may include ads served by YouTube.',
    'terms.close':           'Close ×',
  },

  ko: {
    /* ── Topbar ── */
    'nav.home':              '홈',
    'nav.back':              '뒤로',
    'nav.back.friends':      'Friends로 돌아가기',
    'nav.back.season':       '{n}시즌으로 돌아가기',

    /* ── Breadcrumb ── */
    'bc.home':               '홈',

    /* ── Bookmark bar ── */
    'bm.bar.title':          '내 북마크 — 이전에 보던 곳으로 바로 이동',
    'bm.empty':              '아직 북마크가 없습니다. 시즌, 에피소드, 표현의 🔖 버튼을 눌러 학습 진도를 저장하세요.',
    'bm.bookmark':           '🔖 북마크',
    'bm.bookmarked':         '🔖 저장됨',
    'bm.episode':            '🔖 에피소드 북마크',
    'bm.episode.saved':      '🔖 저장됨',
    'bm.season':             '🔖 시즌 북마크',
    'bm.season.saved':       '🔖 저장됨',
    'bm.toast.added':        '🔖 북마크 저장!',
    'bm.toast.removed':      '🔖 북마크 삭제',

    /* ── Home page ── */
    'home.hero.title':       '🎬 하루 <span class="accent">한 표현</span>씩 <span class="day">영어 정복</span>',
    'home.hero.sub':         '인기 미드의 실제 장면으로 매일 영어 표현 하나씩 — 자연스럽게 익히는 영어 학습앱',
    'home.shows.label':      '📺 드라마 목록',
    'home.friends.meta':     '시즌 10 · 에피소드 236편 · 일상 영어 표현 학습',
    'home.office.meta':      '콘텐츠 준비 중 — 곧 만나요!',
    'home.mf.meta':          '콘텐츠 준비 중 — 곧 만나요!',
    'home.coming':           '🚧 준비 중',

    /* ── Friends index ── */
    'friends.meta':          '시즌 10 · 에피소드 236편 · 1994–2004 · 인기 시트콤으로 배우는 일상 영어 표현',
    'friends.seasons.label': '🎬 시즌 선택',

    /* ── Season page ── */
    'season.episodes.label': '🎬 에피소드 목록 — {n}시즌 (총 {count}편)',
    'season.meta':           '{year} · {count}편 · 에피소드를 클릭해 표현을 학습하세요',

    /* ── Episode page ── */
    'episode.exprs.label':   '💬 영어 표현 15개 — 시즌 {s} 에피소드 {e}',
    'expr.watch':            '▶ 유튜브에서 보기',
    'expr.coming':           '▶ 유튜브 링크 준비 중',
    'expr.placeholder':      '표현 {n}',
    'expr.placeholder.sub':  '이 표현을 페이지 소스의 EP_DATA.expressions에 추가하세요.',
    'expr.num':              '표현 {n} · S{s}E{e}',

    /* ── Footer ── */
    'footer.copy':           '© 2025 m2ea Labs. All rights reserved.',
    'footer.terms':          '이용약관',

    /* ── Terms modal ── */
    'terms.modal.title':     '이용약관',
    'terms.modal.sub':       'Daily English — 매일 한 표현 | by m2ea Labs',
    'terms.agreed':          '이용약관에 동의하셨습니다.',
    'terms.agreed.sub':      '동의 내용이 이 기기에 저장되었습니다. Daily English를 책임감 있게 이용해 주셔서 감사합니다.',
    'terms.heading':         '📌 이용약관',
    'terms.1':               '이 앱은 <strong>학습 목적으로만</strong> 사용 가능합니다. 모든 영상 클립의 저작권은 각 해당 회사에 있으며, 저작권자의 요청 시 예고 없이 삭제될 수 있습니다.',
    'terms.2':               '이 콘텐츠는 <strong>다른 목적으로 사용할 수 없습니다</strong>. <strong>개인 학습 목적</strong>으로만 사용 가능하며, 상업적 이용·재배포는 금지됩니다.',
    'terms.3':               '모든 설명은 <strong>m2ea Labs의 개인적인 의견</strong>입니다. 다른 생각이 있으시다면 <em>여러분이 맞을 수 있습니다</em> — 본인의 판단을 따르세요.',
    'terms.about.heading':   'ℹ️ 앱 소개',
    'terms.about.1':         'Daily English는 인기 미드에서 실제로 사용되는 영어 표현을 짧은 유튜브 영상 클립과 연결하여 제공합니다.',
    'terms.about.2':         '<strong>m2ea Labs</strong>에서 학습 그룹 프로젝트로 운영됩니다. 유튜브 영상에는 유튜브가 제공하는 광고가 포함될 수 있습니다.',
    'terms.close':           '닫기 ×',
  }

};

/* ── Helper: get translated string with optional substitutions ── */
/* Usage: t('season.meta', { year: '1994', count: 24 }) */
function t(key, vars) {
  var lang = getLang();
  var str  = (I18N[lang] && I18N[lang][key]) || (I18N['en'][key]) || key;
  if (vars) {
    Object.keys(vars).forEach(function(k) {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}
