const sitePages = [
  { href: 'index.html', label: 'Home' },
  { href: 'window-repair-knoxville.html', label: 'Window Repair' },
  { href: 'glass-replacement-knoxville.html', label: 'Glass Replacement' },
  { href: 'projects.html', label: 'Projects' },
  { href: 'index.html#contact', label: 'Contact' }
];

const googleReviewUrl = 'https://www.google.com/searchviewer/10?svid=CAwSGxIZCgNwdnESEkNnc3ZaeTh4ZEdadE4yTnJaZxgK';
const facebookUrl = 'https://www.facebook.com/windowzrus/';
const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Cunningham+Windows+7514+Gibbs+Rd+Corryton+TN+37721';

function currentPageName() {
  const path = window.location.pathname || '/';
  return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

function isActive(page) {
  const current = currentPageName();
  const hrefPage = page.href.split('#')[0];
  return current === hrefPage || (current === '' && hrefPage === 'index.html');
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
          <img src="images/cw-logo-revised.svg" alt="Cunningham Windows logo" style="height:72px;width:auto;">
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
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div class="d-flex align-items-center gap-3 text-center text-md-start">
          <img src="images/cw-logo-revised.svg" alt="Cunningham Windows logo" style="height:34px;width:auto;opacity:.9;flex:0 0 auto;">
          <div>
            <div class="fw-semibold text-white">Cunningham Windows</div>
            <div class="small">Window Repair • Glass Replacement • Doors</div>
            <div class="small">7514 Gibbs Rd, Corryton, TN 37721</div>
          </div>
        </div>

        <div class="text-md-end text-center">
          <a class="text-white-50 d-block" href="tel:+18655220800">(865) 522-0800</a>
          <a class="text-white-50 small d-block" href="${googleMapsUrl}" target="_blank" rel="noopener">Find us on Google Maps</a>
          <div class="d-flex justify-content-center justify-content-md-end gap-3 small mt-1">
            <a class="text-white-50" href="${googleReviewUrl}" target="_blank" rel="noopener">Google Reviews</a>
            <a class="text-white-50" href="${facebookUrl}" target="_blank" rel="noopener">Facebook</a>
          </div>
          <div class="small mt-1">© <span id="year"></span></div>
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
