// Mobile hamburger: toggles the stacked menu, replaces the side-scrolling
// timecode strip so there's nothing to swipe on small screens.
(function () {
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', e => {
    if (e.target.closest('a')) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Desktop scrollspy: highlights whichever section is currently in view in
// both the timecode strip and the mobile menu, so "where we are right now"
// stays visible without needing to hover.
(function () {
  const links = Array.from(document.querySelectorAll('a[href^="#"]'))
    .filter(a => a.matches('.scrub-mark, .mobile-menu a'));
  if (!links.length) return;

  const sections = links
    .map(a => ({ link: a, target: document.querySelector(a.getAttribute('href')) }))
    .filter(pair => pair.target);
  if (!sections.length) return;

  function update() {
    let current = sections[0];
    for (const pair of sections) {
      if (pair.target.getBoundingClientRect().top - 120 <= 0) current = pair;
    }
    for (const pair of sections) {
      const isActive = pair.target === current.target;
      document
        .querySelectorAll(`a[href="${CSS.escape(pair.link.getAttribute('href'))}"]`)
        .forEach(a => a.classList.toggle('active', isActive));
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
