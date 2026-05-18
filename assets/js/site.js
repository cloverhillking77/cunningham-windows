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
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap');

      .cw-brand {
        text-decoration: none;
      }

      .cw-brand-logo {
        height: 96px;
        width: auto;
        flex-shrink: 0;
      }

      .cw-brand-text {
        display: flex;
        flex-direction: column;
        line-height: 1;
      }

      .cw-brand-title {
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(1.2rem, 2vw, 1.85rem);
        font-weight: 800;
        letter-spacing: .02em;
        color: #fff;
      }

      .cw-brand-sub {
        font-family: 'Montserrat', sans-serif;
        font-size: .72rem;
        font-weight: 600;
        letter-spacing: .22em;
        text-transform: uppercase;
        color: rgba(255,255,255,.72);
        margin-top: .2rem;
      }

      @media (max-width: 576px) {
        .cw-brand-logo {
          height: 74px;
        }

        .cw-brand-title {
          font-size: 1.15rem;
        }

        .cw-brand-sub {
          font-size: .58rem;
          letter-spacing: .16em;
        }
      }
    </style>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-3 cw-brand" href="index.html" aria-label="Cunningham Windows home">
          <img class="cw-brand-logo" src="projects/cunninghamwindows_newlogo.jpeg" alt="Cunningham Windows logo">

          <div class="cw-brand-text">
            <span class="cw-brand-title">Cunningham Windows</span>
            <span class="cw-brand-sub">Windows • Glass • Doors</span>
          </div>
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
      <div class="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-4">
        <div class="d-flex align-items-center gap-3 text-center text-lg-start">
          <img src="images/cunninghamwindows_newlogo.jpeg" alt="Cunningham Windows logo" style="height:42px;width:auto;opacity:.9;flex:0 0 auto;">
          <div>
            <div class="fw-semibold text-white">Cunningham Windows</div>
            <div class="small">Window Repair • Glass Replacement • Doors</div>
            <div class="small">7514 Gibbs Rd, Corryton, TN 37721</div>
          </div>
        </div>

        <div class="text-center">
          <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 gap-sm-4 mb-2">
            <a href="${googleReviewUrl}" target="_blank" rel="noopener" class="text-white-50 text-decoration-none d-flex align-items-center gap-2 footer-link">
              <i class="bi bi-google fs-5"></i>
              <span class="small">Google Reviews</span>
            </a>

            <a href="${facebookUrl}" target="_blank" rel="noopener" class="text-white-50 text-decoration-none d-flex align-items-center gap-2 footer-link">
              <i class="bi bi-facebook fs-5"></i>
              <span class="small">Facebook</span>
            </a>

            <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="text-white-50 text-decoration-none d-flex align-items-center gap-2 footer-link">
              <i class="bi bi-geo-alt-fill fs-5"></i>
              <span class="small">Maps</span>
            </a>
          </div>

          <a class="text-white-50 d-block small footer-link" href="tel:+18655220800">(865) 522-0800</a>
          <div class="small mt-1">© <span id="year"></span></div>
        </div>
      </div>
    </footer>

    <style>
      .footer-link {
        transition: all .18s ease;
      }

      .footer-link:hover {
        color: #fff !important;
        transform: translateY(-1px);
      }
    </style>
  `;

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function renderStickyCTA() {
  if (document.getElementById('sticky-mobile-cta')) return;

  const sticky = document.createElement('div');
  sticky.id = 'sticky-mobile-cta';

  sticky.innerHTML = `
    <style>
      #sticky-mobile-cta {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1050;
        display: none;
      }

      #sticky-mobile-cta .cta-wrap {
        display: flex;
        background: rgba(15,23,42,.96);
        backdrop-filter: blur(10px);
        box-shadow: 0 -10px 20px rgba(0,0,0,.18);
      }

      #sticky-mobile-cta a {
        flex: 1;
        text-align: center;
        padding: 1rem .5rem;
        text-decoration: none;
        font-weight: 700;
      }

      #sticky-mobile-cta .call-btn {
        background: #198754;
        color: #fff;
      }

      #sticky-mobile-cta .quote-btn {
        background: #ff8200;
        color: #111;
      }

      @media (max-width: 991px) {
        #sticky-mobile-cta {
          display: block;
        }

        body {
          padding-bottom: 78px;
        }
      }
    </style>

    <div class="cta-wrap">
      <a class="call-btn" href="tel:+18655220800">
        <i class="bi bi-telephone-fill me-1"></i> Call Now
      </a>

      <a class="quote-btn" href="index.html#contact">
        <i class="bi bi-chat-dots-fill me-1"></i> Get Quote
      </a>
    </div>
  `;

  document.body.appendChild(sticky);
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteNav();
  renderSiteFooter();
  renderStickyCTA();
});
