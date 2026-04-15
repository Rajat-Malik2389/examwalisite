import React from 'react';
import '../styles/pages/about.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About ExamWaliSite</h1>
          <p>Empowering students with comprehensive study resources and exam preparation materials</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We help students discover the best study resources and achieve their academic goals. Our platform provides
              access to high-quality, curated study materials for all major exams and boards.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <ul className="features-list">
              <li>📚 Comprehensive Study Notes</li>
              <li>🧪 Full-length Mock Tests</li>
              <li>📄 Previous Year Question Papers</li>
              <li>📖 NCERT Books and Study Guides</li>
              <li>🎓 Exam-specific Preparation Materials</li>
              <li>📝 Question Banks and Practice Sets</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Exams We Cover</h2>
            <div className="exams-covered">
              <div className="exam-item">
                <h3>NEET</h3>
                <p>National Eligibility cum Entrance Test for medical aspirants</p>
              </div>
              <div className="exam-item">
                <h3>JEE</h3>
                <p>Joint Entrance Examination for engineering students</p>
              </div>
              <div className="exam-item">
                <h3>CUET</h3>
                <p>Common University Entrance Test</p>
              </div>
              <div className="exam-item">
                <h3>CBSE Boards</h3>
                <p>Central Board of Secondary Education exams for Class 10 and 12</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="benefits">
              <div className="benefit">
                <h4>✓ Completely Free</h4>
                <p>All study materials are available at no cost to students</p>
              </div>
              <div className="benefit">
                <h4>✓ Regularly Updated</h4>
                <p>Content is updated to align with latest exam patterns</p>
              </div>
              <div className="benefit">
                <h4>✓ Curated Quality</h4>
                <p>All materials are carefully selected and verified</p>
              </div>
              <div className="benefit">
                <h4>✓ Easy Access</h4>
                <p>No registration required, instant download of materials</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Success Stories</h2>
            <div className="stats">
              <div className="stat-box">
                <h3>50,000+</h3>
                <p>Active Students</p>
              </div>
              <div className="stat-box">
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
              <div className="stat-box">
                <h3>500+</h3>
                <p>Study Materials</p>
              </div>
              <div className="stat-box">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Get in Touch</h2>
            <p>Have questions or need help? Contact us anytime.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <p>support@examwalisite.com</p>
              </div>
              <div className="contact-method">
                <h4>Phone</h4>
                <p>+91 85958 40841</p>
              </div>
              <div className="contact-method">
                <h4>Support Hours</h4>
                <p>24/7 Available</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
