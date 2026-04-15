import { useState } from 'react';
import { EXAM_TRACKS } from '@constants/exams';
import { STUDY_MATERIALS } from '@constants/studyMaterials';
import '../styles/pages/home-page.css';

const TRACK_STORIES = {
  neet: {
    name: 'NEET',
    eyebrow: 'Medical entrance track',
    accent: '#cf5a1e',
    glow: 'rgba(240, 106, 40, 0.18)',
    readiness: '78%',
    summary: 'NCERT-first prep with smarter revision loops, mock rhythm, and better mistake tracking.',
    focusCards: [
      {
        label: 'Daily rhythm',
        value: 'Bio notes + 45 MCQ',
        detail: 'Keep the prep steady with concept revision first and timed practice second.',
      },
      {
        label: 'Priority',
        value: 'Mistake log refresh',
        detail: 'Turn weak areas into revision triggers instead of repeating random chapters.',
      },
      {
        label: 'Best use',
        value: 'Mock + paper blend',
        detail: 'Useful when you want accuracy and timing to improve together.',
      },
      {
        label: 'Momentum cue',
        value: '2 chapter loops',
        detail: 'A manageable daily target beats one oversized plan you cannot sustain.',
      },
    ],
  },
  jee: {
    name: 'JEE',
    eyebrow: 'Engineering entrance track',
    accent: '#155eef',
    glow: 'rgba(21, 94, 239, 0.16)',
    readiness: '71%',
    summary: 'Formula sheets, speed drills, and paper-style practice built for sharper engineering prep.',
    focusCards: [
      {
        label: 'Daily rhythm',
        value: 'Formula review + timed set',
        detail: 'Warm up with formula recall, then move into pressure-tested questions.',
      },
      {
        label: 'Priority',
        value: 'Physics accuracy',
        detail: 'Track the traps that keep eating time so the next mock feels lighter.',
      },
      {
        label: 'Best use',
        value: 'Mock after revision',
        detail: 'Reinforce concepts first so the test becomes feedback, not confusion.',
      },
      {
        label: 'Momentum cue',
        value: 'Daily revision ladder',
        detail: 'Short repeat passes help formulas stick when pressure starts climbing.',
      },
    ],
  },
  cuet: {
    name: 'CUET',
    eyebrow: 'University entrance track',
    accent: '#15806b',
    glow: 'rgba(21, 128, 107, 0.18)',
    readiness: '74%',
    summary: 'Domain resources, question style familiarity, and structured revision for entrance confidence.',
    focusCards: [
      {
        label: 'Daily rhythm',
        value: 'Domain practice blocks',
        detail: 'Split revision into subject pods so the workload stays clean and realistic.',
      },
      {
        label: 'Priority',
        value: 'Pattern familiarity',
        detail: 'The goal is not just studying more, but studying in the same shape as the exam.',
      },
      {
        label: 'Best use',
        value: 'Guide + paper combo',
        detail: 'Pair explanations with practice to close gaps quickly.',
      },
      {
        label: 'Momentum cue',
        value: 'Short revision stacks',
        detail: 'Compact loops help avoid burnout during broad syllabus coverage.',
      },
    ],
  },
  cbse: {
    name: 'CBSE',
    eyebrow: 'Boards track',
    accent: '#d18a10',
    glow: 'rgba(209, 138, 16, 0.18)',
    readiness: '82%',
    summary: 'Board prep that balances chapter notes, question banks, and paper practice without overwhelm.',
    focusCards: [
      {
        label: 'Daily rhythm',
        value: 'Chapter notes + paper set',
        detail: 'Use one concept block and one exam-style block so revision stays practical.',
      },
      {
        label: 'Priority',
        value: 'Sample paper repetition',
        detail: 'Consistency with board-style questions boosts confidence fast.',
      },
      {
        label: 'Best use',
        value: 'Class 10 and 12 review',
        detail: 'Especially useful when you need fast recap before the next school exam.',
      },
      {
        label: 'Momentum cue',
        value: 'Weekend paper sprint',
        detail: 'A simple weekly paper check keeps the entire routine grounded.',
      },
    ],
  },
};

const PREP_STEPS = [
  {
    number: '01',
    title: 'Start with the right pack',
    description: 'Pick your track and open notes, guides, or papers that match the exam you are actually preparing for.',
  },
  {
    number: '02',
    title: 'Practice with intent',
    description: 'Move into timed questions and mock-style sets after revision so your effort turns into usable feedback.',
  },
  {
    number: '03',
    title: 'Review, do not guess',
    description: 'Use the next session to revisit mistakes, formulas, and chapters that need another clean pass.',
  },
];

function formatTypeLabel(type) {
  const labels = {
    notes: 'Study notes',
    mocks: 'Mock tests',
    papers: 'Question papers',
    guides: 'Study guides',
    books: 'Books',
    questions: 'Question bank',
  };

  return labels[type] || type;
}

function formatClassLabel(value) {
  return value.replace('class', 'Class ');
}

function matchesTrack(material, trackId) {
  if (trackId === 'cbse') {
    return material.category === 'cbse' || material.category === 'boards';
  }

  return material.category === trackId;
}

function getFeaturedMaterials(trackId) {
  const primary = STUDY_MATERIALS.filter((material) => matchesTrack(material, trackId));
  const fallback = STUDY_MATERIALS.filter((material) => !matchesTrack(material, trackId));

  return [...primary, ...fallback].filter(
    (material, index, allMaterials) => allMaterials.findIndex((item) => item.id === material.id) === index
  );
}

export default function HomePage() {
  const [selectedTrack, setSelectedTrack] = useState('neet');

  const activeTrack = TRACK_STORIES[selectedTrack];
  const featuredMaterials = getFeaturedMaterials(selectedTrack).slice(0, 6);
  const trackMaterials = STUDY_MATERIALS.filter((material) => matchesTrack(material, selectedTrack));
  const formatCount = new Set(trackMaterials.map((material) => material.type)).size;

  return (
    <div
      className="page-shell home-page"
      style={{ '--track-accent': activeTrack.accent, '--track-glow': activeTrack.glow }}
    >
      <section className="shell-container home-hero-section">
        <div className="home-hero-copy">
          <p className="section-kicker">{activeTrack.eyebrow}</p>
          <h1 className="home-hero-title">
            Study smarter for <span>{activeTrack.name}</span> without the noisy chaos.
          </h1>
          <p className="section-copy home-hero-text">
            ExamWaliSite turns scattered prep material into one calm, focused study surface for students who want
            momentum instead of clutter.
          </p>

          <div className="home-hero-actions">
            <a href="/resources" className="cta-button cta-button-primary">
              Browse the library
            </a>
            <a href="/about" className="cta-button cta-button-secondary">
              See the mission
            </a>
          </div>

          <div className="home-track-switcher" aria-label="Choose exam track">
            {EXAM_TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                className={`home-track-pill ${selectedTrack === track.id ? 'home-track-pill-active' : ''}`}
                onClick={() => setSelectedTrack(track.id)}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        <aside className="panel home-focus-panel">
          <div className="home-focus-head">
            <div>
              <p className="home-focus-label">This week&apos;s board</p>
              <h2>{activeTrack.name} sprint layout</h2>
              <p>{activeTrack.summary}</p>
            </div>
            <div className="home-focus-score">
              <span>{activeTrack.readiness}</span>
              <small>readiness</small>
            </div>
          </div>

          <div className="home-focus-grid">
            {activeTrack.focusCards.map((card) => (
              <article key={card.label} className="home-focus-card">
                <p>{card.label}</p>
                <strong>{card.value}</strong>
                <span>{card.detail}</span>
              </article>
            ))}
          </div>

          <div className="home-focus-footer">
            Prep flow: notes first, timed practice next, mistake review after that.
          </div>
        </aside>
      </section>

      <section className="shell-container home-signal-strip">
        <article className="panel home-signal-card">
          <strong>{trackMaterials.length}+</strong>
          <span>{activeTrack.name} picks</span>
          <p>Focused resources chosen for this track so students can move faster with less hunting.</p>
        </article>
        <article className="panel home-signal-card">
          <strong>{formatCount}</strong>
          <span>prep formats</span>
          <p>Notes, mocks, papers, and guides arranged together instead of living in different corners.</p>
        </article>
        <article className="panel home-signal-card">
          <strong>Zero</strong>
          <span>extra clutter</span>
          <p>A warmer layout, cleaner hierarchy, and calmer scanning for long study sessions.</p>
        </article>
      </section>

      <section className="shell-container home-resource-section">
        <div className="section-head">
          <div>
            <p className="section-kicker">Featured resources</p>
            <h2 className="section-title">Build a study stack that feels organized from the start.</h2>
          </div>
          <p className="section-copy">
            Switching tracks updates the featured mix, so the landing page immediately feels relevant to the student
            who opened it.
          </p>
        </div>

        <div className="home-resource-grid">
          {featuredMaterials.map((material) => (
            <article key={material.id} className="panel home-resource-card">
              <div className="home-resource-top">
                <span className="tag tag-accent">{material.exam}</span>
                <span className="tag">{formatTypeLabel(material.type)}</span>
              </div>
              <h3>{material.title}</h3>
              <p>{material.description}</p>
              <div className="home-resource-meta">
                <span>{material.class.map(formatClassLabel).join(' / ')}</span>
                <span>{material.category === 'boards' ? 'Boards support' : `${material.exam} track`}</span>
              </div>
              <a href="/resources" className="home-resource-link">
                Open in library
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell-container home-playbook-section">
        <div className="panel home-playbook-note">
          <p className="section-kicker">Simple study method</p>
          <h2>Good prep should feel steady, not messy.</h2>
          <p>
            The design now pushes students toward a calmer sequence: choose a track, open the right pack, practice
            with intent, and revisit weak spots before the next mock.
          </p>
          <div className="home-playbook-tags">
            <span className="tag">Quick scanning</span>
            <span className="tag">Clear hierarchy</span>
            <span className="tag">Mobile friendly</span>
          </div>
        </div>

        <div className="home-playbook-grid">
          {PREP_STEPS.map((step) => (
            <article key={step.number} className="panel home-playbook-card">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
