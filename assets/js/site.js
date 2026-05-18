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
        height: 160px;
        width: auto;
        max-width: 300px;
        object-fit: contain;
        flex-shrink: 0;
        filter: drop-shadow(0 6px 16px rgba(0,0,0,.45));
      }

      .cw-brand-text {
        display: flex;
        flex-direction: column;
        line-height: 1;
      }

      .cw-brand-title {
        font-family: 'Montserrat', sans-serif;
        font-size: clamp(1.35rem, 2.2vw, 2.15rem);
        font-weight: 800;
        letter-spacing: .02em;
        color: #fff;
        text-shadow: 0 2px 10px rgba(0,0,0,.35);
      }

      .cw-brand-sub {
        font-family: 'Montserrat', sans-serif;
        font-size: .78rem;
        font-weight: 700;
        letter-spacing: .24em;
        text-transform: uppercase;
        color: rgba(255,255,255,.78);
        margin-top: .28rem;
      }

      .navbar-toggler {
        margin-left: auto;
        border: 1px solid rgba(255,255,255,.14);
        background: rgba(255,255,255,.06);
        padding: .7rem .95rem;
        border-radius: 1rem;
      }

      .navbar-toggler:focus {
        box-shadow: none;
      }

      @media (max-width: 576px) {
        .navbar {
          padding-top: .7rem;
          padding-bottom: .7rem;
        }

        .navbar > .container-fluid {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cw-brand {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: center;
          gap: .2rem !important;
          flex: 1;
          min-width: 0;
        }

        .cw-brand-logo {
          height: 95px;
          max-width: 180px;
        }

        .cw-brand-text {
          padding-left: .15rem;
        }

        .cw-brand-title {
          font-size: 1.2rem;
          line-height: 1;
          white-space: nowrap;
        }

        .cw-brand-sub {
          font-size: .56rem;
          letter-spacing: .15em;
          margin-top: .18rem;
          white-space: nowrap;
        }

        .navbar-toggler {
          margin-left: auto;
          flex-shrink: 0;
          align-self: center;
        }
      }
    </style>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle">
      <div class="container-fluid px-lg-4">
        <a class="navbar-brand d-flex align-items-center gap-4 cw-brand" href="index.html" aria-label="Cunningham Windows home">
          <img class="cw-brand-logo" src="images/current_logo.png" alt="Cunningham Windows logo">

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
          </ul>
        </div>
      </div>
    </nav>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteNav();
});