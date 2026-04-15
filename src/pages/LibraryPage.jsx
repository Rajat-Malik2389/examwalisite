import { useState } from 'react';
import { EXAM_TRACKS } from '@constants/exams';
import { STUDY_MATERIALS } from '@constants/studyMaterials';
import '../styles/pages/resources-page.css';

const TYPE_LABELS = {
  notes: 'Study notes',
  mocks: 'Mock tests',
  papers: 'Question papers',
  guides: 'Study guides',
  books: 'Books',
  questions: 'Question bank',
};

const TRACK_FILTERS = [{ id: 'all', name: 'All tracks' }, ...EXAM_TRACKS];
const TYPE_FILTERS = ['all', ...new Set(STUDY_MATERIALS.map((material) => material.type))];

function matchesTrack(material, selectedTrack) {
  if (selectedTrack === 'all') {
    return true;
  }

  if (selectedTrack === 'cbse') {
    return material.category === 'cbse' || material.category === 'boards';
  }

  return material.category === selectedTrack;
}

function formatClassLabel(value) {
  return value.replace('class', 'Class ');
}

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredMaterials = STUDY_MATERIALS.filter((material) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery.length === 0 ||
      material.title.toLowerCase().includes(normalizedQuery) ||
      material.description.toLowerCase().includes(normalizedQuery) ||
      material.exam.toLowerCase().includes(normalizedQuery);

    const matchesType = selectedType === 'all' || material.type === selectedType;

    return matchesSearch && matchesType && matchesTrack(material, selectedTrack);
  });

  const trackCount = new Set(STUDY_MATERIALS.map((material) => material.exam)).size;
  const formatCount = new Set(STUDY_MATERIALS.map((material) => material.type)).size;

  return (
    <div className="page-shell library-page">
      <section className="shell-container library-hero">
        <div>
          <p className="section-kicker">Resource library</p>
          <h1 className="section-title">Everything your prep stack needs, minus the digging.</h1>
          <p className="section-copy">
            Search by exam, switch by format, and keep the visual noise low so students can find the next useful thing
            in seconds.
          </p>
        </div>

        <div className="library-hero-stats">
          <article className="panel library-stat-card">
            <strong>{STUDY_MATERIALS.length}+</strong>
            <span>resource entries</span>
          </article>
          <article className="panel library-stat-card">
            <strong>{trackCount}</strong>
            <span>exam pathways</span>
          </article>
          <article className="panel library-stat-card">
            <strong>{formatCount}</strong>
            <span>study formats</span>
          </article>
        </div>
      </section>

      <section className="shell-container panel library-toolbar">
        <div className="library-search-block">
          <label htmlFor="resource-search">Search the library</label>
          <input
            id="resource-search"
            type="search"
            placeholder="Try NEET mock, CBSE notes, or CUET guide"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <div className="library-filter-group">
          <p>Track</p>
          <div className="library-filter-row">
            {TRACK_FILTERS.map((track) => (
              <button
                key={track.id}
                type="button"
                className={`library-filter-pill ${selectedTrack === track.id ? 'library-filter-pill-active' : ''}`}
                onClick={() => setSelectedTrack(track.id)}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        <div className="library-filter-group">
          <p>Format</p>
          <div className="library-filter-row">
            {TYPE_FILTERS.map((type) => (
              <button
                key={type}
                type="button"
                className={`library-filter-pill ${selectedType === type ? 'library-filter-pill-active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {type === 'all' ? 'All formats' : TYPE_LABELS[type]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-container library-results-head">
        <div>
          <p className="section-kicker">Showing {filteredMaterials.length} results</p>
          <h2 className="section-title">A cleaner, faster resource browser for students.</h2>
        </div>
        <p className="section-copy">
          The upgraded layout groups metadata into readable chips, keeps actions visible, and makes the search area far
          easier to scan on both desktop and mobile.
        </p>
      </section>

      <section className="shell-container library-layout">
        <aside className="panel library-aside">
          <p className="section-kicker">Why this view works</p>
          <h3>Students should not need to decode the interface before they study.</h3>
          <ul className="library-aside-list">
            <li>Search and filters stay together in one calm control panel.</li>
            <li>Cards surface exam, type, and class information without clutter.</li>
            <li>The visual system now feels consistent with the landing and about pages.</li>
          </ul>
        </aside>

        <div className="library-grid">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material) => (
              <article key={material.id} className="panel library-card">
                <div className="library-card-top">
                  <span className="tag tag-accent">{material.exam}</span>
                  <span className="tag">{TYPE_LABELS[material.type] || material.type}</span>
                </div>
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <div className="library-card-meta">
                  <span>{material.class.map(formatClassLabel).join(' / ')}</span>
                  <span>{material.category === 'boards' ? 'Boards support' : `${material.exam} aligned`}</span>
                </div>
                <button type="button" className="library-card-action">
                  Preview pack
                </button>
              </article>
            ))
          ) : (
            <div className="panel library-empty-state">
              <h3>No resources matched that combination.</h3>
              <p>Try clearing the search or switching to another track or format filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
