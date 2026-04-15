import React, { useState } from 'react';
import '../styles/components/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ExamWaliSite</h3>
            <p>We help students discover the best study resources.</p>
            <p className="tagline">Get the latest study materials, exam updates, and preparation tips delivered to your inbox.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">NO SPAM • UNSUBSCRIBE ANYTIME</p>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#study-notes">Study Notes</a>
              </li>
              <li>
                <a href="#mock-tests">Mock Tests</a>
              </li>
              <li>
                <a href="#question-papers">Question Papers</a>
              </li>
              <li>
                <a href="#study-guides">Study Guides</a>
              </li>
              <li>
                <a href="#ncert-books">NCERT Books</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">What We Do</a>
              </li>
              <li>
                <a href="#promote">Promote Platform</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Exams</h4>
            <ul>
              <li>
                <a href="#neet">NEET Preparation</a>
              </li>
              <li>
                <a href="#jee">JEE Preparation</a>
              </li>
              <li>
                <a href="#cuet">CUET Preparation</a>
              </li>
              <li>
                <a href="#class10">Class 10 Boards</a>
              </li>
              <li>
                <a href="#class12">Class 12 Boards</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#twitter" aria-label="Twitter">
              𝕏
            </a>
            <a href="#instagram" aria-label="Instagram">
              📷
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              in
            </a>
            <a href="#youtube" aria-label="YouTube">
              ▶️
            </a>
          </div>

          <div className="footer-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>

          <div className="copyright">
            <p>&copy; 2026 ExamWaliSite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
