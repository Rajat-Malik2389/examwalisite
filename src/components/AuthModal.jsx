import { useCallback, useEffect, useState } from 'react';
import '../styles/components/auth-modal.css';

function getDisplayName(email) {
  const localPart = email.split('@')[0] || 'student';
  const cleaned = localPart.replace(/[._-]+/g, ' ').trim();

  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleClose = useCallback(() => {
    setEmail('');
    setPassword('');
    setError('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    if (!normalizedEmail.includes('@')) {
      setError('Please use a valid email address.');
      return;
    }

    if (password.trim().length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }

    onLogin({
      email: normalizedEmail,
      name: getDisplayName(normalizedEmail) || 'Student',
      loggedInAt: new Date().toISOString(),
    });

    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="auth-modal-backdrop" onClick={handleClose} role="presentation">
      <div
        className="auth-modal-card"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button type="button" className="auth-modal-close" onClick={handleClose} aria-label="Close login dialog">
          x
        </button>

        <div className="auth-modal-copy">
          <p className="section-kicker">Student login</p>
          <h2 id="auth-modal-title">Sign in to keep your study flow saved.</h2>
          <p>
            This is a lightweight front-end login flow for the UI, so you can test the navbar action and signed-in
            state cleanly.
          </p>
        </div>

        <form className="auth-modal-form" onSubmit={handleSubmit}>
          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
          />

          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />

          {error ? <p className="auth-modal-error">{error}</p> : null}

          <button type="submit" className="auth-modal-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
