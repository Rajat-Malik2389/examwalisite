import { useState } from 'react';
import { EXAM_TRACKS } from '@constants/exams';
import '../styles/components/site-footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

const SUPPORT_LINKS = [
  { label: 'support@examwalisite.com', href: 'mailto:support@examwalisite.com' },
  { label: '+91 85958 40841', href: 'tel:+918595840841' },
  { label: 'Mon-Sun, 8 AM to 10 PM', href: '#support-hours' },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Disclaimer', href: '#disclaimer' },
];

const PRINCIPLES = [
  {
    title: 'Clarity first',
    description: 'Resources are organized so students can stop digging and start studying.',
  },
  {
    title: 'Free by default',
    description: 'Core notes, papers, and mock support stay accessible without extra friction.',
  },
  {
    title: 'Built for momentum',
    description: 'The experience is tuned for calm routines, not noisy dashboards.',
  },
];

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="site-footer-shell">
      <div className="shell-container footer-shell">
        <section className="footer-callout">
          <div className="footer-callout-copy">
            <p className="section-kicker footer-kicker">Study with a steadier rhythm</p>
            <h2>One place for notes, mocks, papers, and prep guidance that actually feels usable.</h2>
            <p>
              ExamWaliSite is designed for focused students who want a cleaner routine, faster access, and a layout
              that helps instead of distracting.
            </p>
            <div className="footer-callout-actions">
              <a href="/resources" className="cta-button cta-button-light">
                Browse resources
              </a>
              <a href="/about" className="cta-button footer-outline-link">
                Learn about the platform
              </a>
            </div>
          </div>

          <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <label className="footer-newsletter-label" htmlFor="footer-email">
              Weekly study pulse
            </label>
            <p className="footer-newsletter-copy">
              Short exam updates, useful prep reminders, and no spammy noise.
            </p>
            <div className="footer-newsletter-row">
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit">Join free</button>
            </div>
            <p className={`footer-newsletter-note ${submitted ? 'footer-newsletter-note-success' : ''}`}>
              {submitted ? 'You are in. Fresh updates will land soon.' : 'One useful note a week. Unsubscribe anytime.'}
            </p>
          </form>
        </section>

        <section className="footer-grid-panel">
          <div className="footer-column">
            <p className="footer-column-label">Navigate</p>
            <div className="footer-link-list">
              {QUICK_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-column-label">Tracks</p>
            <div className="footer-track-list">
              {EXAM_TRACKS.map((track) => (
                <span key={track.id} className="footer-track-pill">
                  {track.name}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-column-label">Why it works</p>
            <div className="footer-principles-list">
              {PRINCIPLES.map((principle) => (
                <article key={principle.title}>
                  <strong>{principle.title}</strong>
                  <span>{principle.description}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-column-label">Support</p>
            <div className="footer-link-list">
              {SUPPORT_LINKS.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="footer-bottom-row">
          <p>ExamWaliSite</p>
          <div className="footer-legal-links">
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <p>Designed for calmer prep in 2026.</p>
        </div>
      </div>
    </footer>
  );
}
