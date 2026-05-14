const sitePages = [
  { href: 'index.html', label: 'Home', match: ['/', '/index.html'] },
  { href: 'window-repair-knoxville.html', label: 'Window Repair', match: ['/window-repair-knoxville.html'] },
  { href: 'glass-replacement-knoxville.html', label: 'Glass Replacement', match: ['/glass-replacement-knoxville.html'] },
  { href: 'projects.html', label: 'Projects', match: ['/projects.html'] },
  { href: 'index.html#contact', label: 'Contact', match: ['#contact'] }
];

function currentPageName() {
  const path = window.location.pathname || '/';
  const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return file;
}

function isActive(page) {
  const file = currentPageName();
  if (page.href === 'index.html' && (file === '' || file === 'index.html')) return true;
  return page.href.split('#')[0] === file;
}

function renderSiteNav() {
  const target = document.getElementById('site-nav');
  if (!target) return;

  const links = sitePages.map(page => `
    <li class="nav-item">
      <a class="nav-link ${isActive(page) ? 'active' : ''}" href="${page.href}">${page.label}</a>
    </li>
  `).join('');

  target.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html" aria-label="Cunningham Windows home">
          <img src="images/cw-logo-revised.svg" alt="Cunningham Windows logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="nav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            ${links}
            <li class="nav-item ms-lg-2">
              <a class="btn btn-primary btn-sm" href="tel:+18655220800">
                <i class="bi bi-telephone me-1"></i> (865) 522-0800
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function renderSiteFooter() {
  const target = document.getElementById('site-footer');
  if (!target) return;

  target.innerHTML = `
    <footer class="py-4 bg-dark text-white-50">
      <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <div>
          <div class="fw-semibold text-white">Cunningham Windows</div>
          <div>Window Repair • Glass Replacement • Doors</div>
          <div class="small mt-1">7514 Gibbs Rd, Corryton, TN 37721</div>
        </div>
        <div class="text-md-end">
          <a class="text-white-50" href="tel:+18655220800">(865) 522-0800</a>
          <div class="small">© <span id="year"></span></div>
        </div>
      </div>
    </footer>
  `;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteNav();
  renderSiteFooter();
});
