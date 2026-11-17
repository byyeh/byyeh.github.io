// Hero latch toggle: swap between the latched and released CAD views.
(function () {
  var notes = {
    latched: 'Holding 354 N with no power.',
    released: 'A solenoid releases the hook, then it relocks itself.'
  };
  var buttons = document.querySelectorAll('.seg button');
  var note = document.getElementById('latch-note');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var state = b.dataset.state;
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      document.getElementById('latch-img-latched').hidden = state !== 'latched';
      document.getElementById('latch-img-released').hidden = state !== 'released';
      note.textContent = notes[state];
    });
  });

  // Play the modal analysis clip only while it is on screen, and never for
  // visitors who ask for reduced motion (they can still press play).
  var video = document.querySelector('video');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (video && !calm && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.isIntersecting ? video.play().catch(function () {}) : video.pause(); });
    }, { threshold: 0.5 }).observe(video);
  }
})();

// Tabs. The address (#projects, #ankle-robot, ...) decides which view shows,
// so every tab and every project has its own link.
(function () {
  var views = ['home', 'projects', 'experience', 'skills', 'contact'];
  var projects = [].map.call(document.querySelectorAll('.project'), function (p) { return p.id; });
  var lastProject = projects[0];
  function show() {
    var name = location.hash.slice(1) || 'home';
    var project = projects.indexOf(name) > -1 ? name : null;
    var view = project ? 'projects' : (views.indexOf(name) > -1 ? name : 'home');
    if (project) lastProject = project;
    views.forEach(function (v) { document.getElementById(v).classList.toggle('active', v === view); });
    document.querySelectorAll('.site-header nav a[href^="#"]').forEach(function (a) {
      a.getAttribute('href') === '#' + view ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
    });
    document.querySelectorAll('.subnav a').forEach(function (a) {
      a.getAttribute('href') === '#' + lastProject ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
    });
    if (project) document.getElementById(project).scrollIntoView(); else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', show);
  show();
})();
