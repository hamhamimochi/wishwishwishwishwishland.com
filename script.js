function toggleDrawer(open) {
  document.getElementById('sideDrawer').classList.toggle('open', open);
  document.getElementById('drawerOverlay').classList.toggle('open', open);
}

function toggleLangMenu() {
  document.getElementById('langDropdown').classList.toggle('show');
}

function setLanguage(lang) {
  if (lang === 'ko') {
    document.body.classList.add('mode-ko');
    document.documentElement.lang = 'ko';
  } else {
    document.body.classList.remove('mode-ko');
    document.documentElement.lang = 'zh-Hant';
  }
  document.getElementById('langDropdown').classList.remove('show');
}

function highlightRef(id) {
  document.querySelectorAll('.references-list li').forEach(el => el.classList.remove('highlight'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('highlight');
    setTimeout(() => target.classList.remove('highlight'), 2200);
  }
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-switcher')) {
    document.getElementById('langDropdown').classList.remove('show');
  }
});