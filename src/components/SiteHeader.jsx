import { useState } from 'react';
import '../styles/components/site-header.css';

export default function SiteHeader({ currentPage, navItems, user, onLoginClick, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header-bar">
      <div className="shell-container">
        <div className="site-header-inner">
          <a href="/" className="brand-lockup" aria-label="ExamWaliSite home">
            <span className="brand-token">EW</span>
            <span className="brand-text">
              <strong>ExamWaliSite</strong>
              <small>Exam prep, minus the clutter</small>
            </span>
          </a>

          <nav className={`site-nav ${mobileMenuOpen ? 'site-nav-open' : ''}`} aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`site-nav-link ${currentPage === item.id ? 'site-nav-link-active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header-cta">
            <a href="/resources" className="header-pill-link" onClick={() => setMobileMenuOpen(false)}>
              Open library
            </a>
            {user ? (
              <div className="header-user-group">
                <span className="header-user-chip">Hi, {user.name}</span>
                <button type="button" className="header-login-button header-logout-button" onClick={onLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="header-login-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLoginClick();
                }}
              >
                Login
              </button>
            )}
            <button
              type="button"
              className="site-nav-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
