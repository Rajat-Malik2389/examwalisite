import React, { useState } from 'react';
import '../styles/pages/home.css';
import { EXAM_TRACKS } from '@constants/exams';
import { STUDY_MATERIALS } from '@constants/studyMaterials';

export default function Home() {
  const [selectedExam, setSelectedExam] = useState('all');

  const filteredMaterials =
    selectedExam === 'all'
      ? STUDY_MATERIALS.slice(0, 6) // Show only first 6 items
      : STUDY_MATERIALS.filter((m) => m.category === selectedExam).slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find The Best Study Material For Every Exam</h1>
          <p>Access study materials, notes, books, and preparation resources for CBSE, NEET, JEE, CUET and more.</p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg">Explore Resources</button>
          </div>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>All The Study Resources You Need In One Place</h2>
            <p>Choose your exam and explore curated study materials designed to help you prepare with confidence.</p>
          </div>

          <div className="filter-tabs">
            <button
              className={`tab ${selectedExam === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedExam('all')}
            >
              All
            </button>
            {EXAM_TRACKS.map((exam) => (
              <button
                key={exam.id}
                className={`tab ${selectedExam === exam.id ? 'active' : ''}`}
                onClick={() => setSelectedExam(exam.id)}
              >
                {exam.name}
              </button>
            ))}
          </div>

          <div className="materials-grid">
            {filteredMaterials.map((material) => (
              <div key={material.id} className="material-card">
                <div className="material-icon">{material.icon}</div>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <button className="btn btn-outline">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <div className="container">
          <div className="section-header">
            <h2>Learn • Prepare • Practice</h2>
            <p>Everything you need for effective exam preparation</p>
          </div>
          <div className="quick-links">
            <div className="quick-card">
              <div className="icon">📝</div>
              <h3>Study Notes</h3>
              <p>Clear and easy-to-understand notes for different subjects and exams</p>
            </div>
            <div className="quick-card">
              <div className="icon">🧪</div>
              <h3>Mock Tests</h3>
              <p>Practice full-length mock tests and quizzes to test your knowledge</p>
            </div>
            <div className="quick-card">
              <div className="icon">📄</div>
              <h3>Question Papers</h3>
              <p>Solve previous year question papers and sample papers</p>
            </div>
            <div className="quick-card">
              <div className="icon">📖</div>
              <h3>Study Guides</h3>
              <p>Helpful guides and preparation strategies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
