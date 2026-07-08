(function () {
  var article = document.querySelector('article.prose');
  if (!article) return;
  var heads = article.querySelectorAll('h2, h3');
  if (heads.length < 3) return;
  function slug(t){ return t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''); }
  var used = {};
  var nav = document.createElement('nav');
  nav.className = 'toc';
  nav.setAttribute('aria-label','Table of contents');
  var html = '<div class="toc-label">Contents</div>';
  var items = [];
  heads.forEach(function (h) {
    var id = h.id || slug(h.textContent);
    if (used[id]) { id = id + '-' + (used[id]++); } else { used[id] = 1; }
    h.id = id;
    html += '<a href="#' + id + '"' + (h.tagName === 'H3' ? ' class="sub"' : '') + '>' + h.textContent + '</a>';
    items.push(h);
  });
  nav.innerHTML = html;
  document.body.appendChild(nav);
  var links = {};
  nav.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
  function setActive(id){ nav.querySelectorAll('a').forEach(function(a){ a.classList.remove('active'); }); if (links[id]) links[id].classList.add('active'); }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });
  items.forEach(function (h) { obs.observe(h); });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) { window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' }); }
    });
  });
})();
