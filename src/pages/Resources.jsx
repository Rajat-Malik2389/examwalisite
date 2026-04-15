import React, { useState } from 'react';
import '../styles/pages/resources.css';
import { STUDY_MATERIALS } from '@constants/studyMaterials';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredMaterials = STUDY_MATERIALS.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || material.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="resources-page">
      <div className="container">
        <div className="resources-header">
          <h1>Study Resources</h1>
          <p>Comprehensive collection of study materials for all exams and classes</p>
        </div>

        <div className="resources-controls">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Resources
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'notes' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('notes')}
            >
              Notes
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'mocks' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('mocks')}
            >
              Mock Tests
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'papers' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('papers')}
            >
              Papers
            </button>
            <button
              className={`filter-btn ${selectedFilter === 'guides' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('guides')}
            >
              Guides
            </button>
          </div>
        </div>

        <div className="resources-list">
          {filteredMaterials.length > 0 ? (
            <div className="materials-grid">
              {filteredMaterials.map((material) => (
                <div key={material.id} className="resource-card">
                  <div className="resource-header">
                    <span className="resource-icon">{material.icon}</span>
                    <span className="resource-badge">{material.exam}</span>
                  </div>
                  <h3>{material.title}</h3>
                  <p>{material.description}</p>
                  <div className="resource-footer">
                    <span className="resource-type">{material.type}</span>
                    <button className="btn btn-primary btn-sm">Download</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No resources found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
