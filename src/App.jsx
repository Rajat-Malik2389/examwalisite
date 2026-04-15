import { useEffect, useState } from 'react';
import './App.css';
import AuthModal from '@components/AuthModal';
import SiteHeader from '@components/SiteHeader';
import SiteFooter from '@components/SiteFooter';
import HomePage from '@pages/HomePage';
import LibraryPage from '@pages/LibraryPage';
import AboutPage from '@pages/AboutPage';

const PAGE_CONFIG = {
  home: { id: 'home', label: 'Home', path: '/' },
  resources: { id: 'resources', label: 'Resources', path: '/resources' },
  about: { id: 'about', label: 'About', path: '/about' },
};

const NAV_ITEMS = Object.values(PAGE_CONFIG);
const AUTH_STORAGE_KEY = 'examwalisite.auth.user';

function getPageFromPath(pathname) {
  if (pathname === PAGE_CONFIG.resources.path) {
    return 'resources';
  }

  if (pathname === PAGE_CONFIG.about.path || pathname === '/about-us') {
    return 'about';
  }

  return 'home';
}

function getStoredUser() {
  try {
    const rawValue = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return rawValue ? JSON.parse(rawValue) : null;
  } catch {
    return null;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromPath(window.location.pathname));
  const [authUser, setAuthUser] = useState(() => getStoredUser());
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    try {
      if (authUser) {
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authUser));
      } else {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    } catch {
      // Ignore storage issues in restricted browsers.
    }
  }, [authUser]);

  const navigate = (page) => {
    const nextPage = PAGE_CONFIG[page] ? page : 'home';
    const nextPath = PAGE_CONFIG[nextPage].path;

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    setCurrentPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (event) => {
    const anchor = event.target.closest('a[href]');

    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute('href');

    if (!href || !href.startsWith('/')) {
      return;
    }

    event.preventDefault();
    navigate(getPageFromPath(href));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'resources':
        return <LibraryPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  const handleLogin = (user) => {
    setAuthUser(user);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setAuthUser(null);
  };

  return (
    <div className="site-shell" onClick={handleNavigation}>
      <div className="app-ambient app-ambient-left" />
      <div className="app-ambient app-ambient-right" />
      <SiteHeader
        currentPage={currentPage}
        navItems={NAV_ITEMS}
        user={authUser}
        onLoginClick={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
      />
      <main className="site-main">{renderPage()}</main>
      <SiteFooter />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={handleLogin} />
    </div>
  );
}
