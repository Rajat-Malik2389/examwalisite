import SiteHeader from './SiteHeader';

export default function Header(props) {
  return <SiteHeader {...props} />;
}
/*

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/resources" className="nav-link">
              Resources
            </a>
            <a href="/boards" className="nav-link">
              Boards
            </a>
            <a href="/blog" className="nav-link">
              Blog
            </a>
            <a href="/about" className="nav-link">
              About Us
            </a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary btn-sm">Sign In</button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
*/
