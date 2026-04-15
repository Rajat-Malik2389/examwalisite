import { EXAM_TRACKS } from '@constants/exams';
import '../styles/pages/about-page.css';

const VALUES = [
  {
    number: '01',
    title: 'Clarity over chaos',
    description: 'Students should see what matters first instead of scanning a wall of mismatched cards and buttons.',
  },
  {
    number: '02',
    title: 'Preparation with intent',
    description: 'The platform should help students move from notes to practice to review in a clear sequence.',
  },
  {
    number: '03',
    title: 'Access without friction',
    description: 'Useful material should feel reachable even for students who are tired, rushed, or revising on mobile.',
  },
];

const PRINCIPLES = [
  'Warm editorial typography for a more confident, less generic feel.',
  'Stronger spacing and card hierarchy so content scans faster.',
  'Track-focused surfaces that make the app feel relevant immediately.',
];

const STATS = [
  { value: '50K+', label: 'students supported' },
  { value: '500+', label: 'study materials planned' },
  { value: '24/7', label: 'self-serve access' },
];

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="shell-container about-hero">
        <div className="about-hero-copy">
          <p className="section-kicker">About the platform</p>
          <h1 className="section-title">Exam prep should feel focused, warm, and much easier to trust.</h1>
          <p className="section-copy">
            ExamWaliSite is built to collect the right notes, papers, and guides into one clear experience for students
            preparing for boards and entrance exams.
          </p>
        </div>

        <aside className="panel about-hero-panel">
          <p className="section-kicker">What students should feel</p>
          <div className="about-hero-list">
            <article>
              <strong>Calmer</strong>
              <span>The interface should lower friction before the study session even begins.</span>
            </article>
            <article>
              <strong>Guided</strong>
              <span>Every section should hint at what to do next, not just what exists on the page.</span>
            </article>
            <article>
              <strong>Ready</strong>
              <span>The visual system should support confidence instead of making the site feel temporary.</span>
            </article>
          </div>
        </aside>
      </section>

      <section className="shell-container about-values">
        <div className="section-head">
          <div>
            <p className="section-kicker">Design principles</p>
            <h2 className="section-title">The refresh is not just prettier. It is more useful.</h2>
          </div>
          <p className="section-copy">
            These value cards summarize the thinking behind the new direction and why the interface now feels more
            deliberate.
          </p>
        </div>

        <div className="about-values-grid">
          {VALUES.map((value) => (
            <article key={value.number} className="panel about-value-card">
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell-container panel about-coverage">
        <div className="about-coverage-copy">
          <p className="section-kicker">Coverage</p>
          <h2>Built to flex across boards and entrance journeys.</h2>
          <p>
            The updated layout gives each track enough identity to feel intentional while still keeping the product
            visually consistent.
          </p>
          <ul className="about-principle-list">
            {PRINCIPLES.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>

        <div className="about-track-grid">
          {EXAM_TRACKS.map((track) => (
            <article key={track.id} className="about-track-card">
              <strong>{track.name}</strong>
              <span>
                {track.id === 'cbse'
                  ? 'Board-friendly notes, question banks, and paper prep.'
                  : `Focused resources and revision support for ${track.name} students.`}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="shell-container about-story-grid">
        <div className="panel about-stats-panel">
          <p className="section-kicker">Signals of trust</p>
          <div className="about-stats-grid">
            {STATS.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="panel about-contact-panel">
          <p className="section-kicker">Reach out</p>
          <h3>Questions, feedback, or ideas for the next pass are welcome.</h3>
          <div className="about-contact-grid">
            <article>
              <strong>Email</strong>
              <span>support@examwalisite.com</span>
            </article>
            <article>
              <strong>Phone</strong>
              <span>+91 85958 40841</span>
            </article>
            <article>
              <strong>Support</strong>
              <span>Always available for student-facing issues</span>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
