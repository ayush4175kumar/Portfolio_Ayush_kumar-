import { Link } from 'react-router-dom'
import ayushPhoto from '../assets/ayush-photo.jpg'
import ProjectCard from '../components/ProjectCard'
import { projectSummaries } from '../data/contentData'

export default function Home() {
  const featuredProjects = projectSummaries

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero__grid">
            {/* Left Content */}
            <div>
              <div className="editorial-pill">
                <span className="editorial-pill__pulse" aria-hidden="true"></span>
                <span className="editorial-pill__title">Available for Design & Engineering</span>
                <span className="editorial-pill__sep">/</span>
                <span className="editorial-pill__sub">B.Tech Electrical • AutoCAD</span>
              </div>
              <h1 className="home-hero__heading">
                Engineering Precision in <span className="text-highlight">Solar PV Design</span> &amp; <span className="text-highlight">AutoCAD</span> Draftsmanship.
              </h1>
              <p className="home-hero__intro">
                Hi, I'm <strong>Ayush Kumar</strong>. I specialize in AutoCAD 2D drafting, solar rooftop photovoltaic layout design, single-line diagrams (SLD), and electrical power distribution schematics—complemented by strategic technical content writing.
              </p>

              <div className="home-hero__actions">
                <Link to="/projects/commercial-rooftop-solar-pv" className="btn btn--editorial-primary">
                  Explore 119.6 kWp Solar Design ↗
                </Link>
                <Link to="/projects" className="btn btn--editorial-secondary">
                  All Projects
                </Link>
                <Link to="/resume" className="btn btn--editorial-ghost">
                  Resume (PDF) ↓
                </Link>
              </div>
            </div>

            {/* Right Content: Professional Headshot Frame */}
            <div className="hero-photo-wrapper">
              <div className="hero-photo-frame">
                <img 
                  src={ayushPhoto} 
                  alt="Ayush Kumar - Design Engineer" 
                  className="hero-photo-img"
                  onError={(e) => {
                    // Fallback if asset loading has issues
                    e.currentTarget.src = '/ayush-photo.jpg'
                  }}
                />
                <div className="hero-photo-badge">
                  <span className="hero-photo-badge__dot"></span>
                  <span className="hero-photo-badge__text">
                    Open to Hire • Design Engineer & CAD Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot Stats Bar */}
      <section className="snapshot">
        <div className="container">
          <div className="snapshot__grid">
            <div className="snapshot__item">
              <div className="snapshot__icon">☀️</div>
              <div className="snapshot__title">Solar PV Sizing</div>
              <div className="snapshot__desc">119.6 kWp DC / 100 kW AC Rooftop System Architecture</div>
            </div>

            <div className="snapshot__item">
              <div className="snapshot__icon">📐</div>
              <div className="snapshot__title">AutoCAD 2D Drafting</div>
              <div className="snapshot__desc">Standardized SLDs, Multi-Layer Plans, & Layout Detailing</div>
            </div>

            <div className="snapshot__item">
              <div className="snapshot__icon">⚡</div>
              <div className="snapshot__title">Electrical Systems</div>
              <div className="snapshot__desc">415V Three-Phase Distribution, Cable Sizing & Protection</div>
            </div>

            <div className="snapshot__item">
              <div className="snapshot__icon">✍️</div>
              <div className="snapshot__title">Content Creation</div>
              <div className="snapshot__desc">SEO Tech Guides, Social Copywriting & Scriptwriting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">Featured Work</div>
              <h2 className="section-title">Engineering & Design Portfolio</h2>
              <p className="section-subtitle">
                Demonstrated technical capabilities across solar photovoltaic modeling, CAD documentation, and digital communication.
              </p>
            </div>
            <Link to="/projects" className="btn btn--secondary">
              View All Projects & Filter →
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Competency Highlight */}
      <section className="section section--alt">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'center'
          }}>
            <div>
              <div className="section-label">Technical Background</div>
              <h2 className="section-title">Bridging Design Engineering & Technical Storytelling</h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                With a Bachelor of Technology in Electrical Engineering, I combine rigorous theoretical understanding of power generation, switchgear protection, and load calculations with practical computer-aided drafting (CAD) execution.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Beyond pure engineering drawings, I believe modern engineers must communicate clearly. My experience crafting search-intent content, high-retention video scripts, and social copywriting ensures complex technical concepts translate into business value.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--primary">
                  More About Ayush →
                </Link>
                <Link to="/skills" className="btn btn--secondary">
                  Explore Full Skills Matrix
                </Link>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--color-white)', padding: '1.5rem', overflow: 'hidden' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid var(--color-border)', position: 'relative' }}>
                <img 
                  src="/images/autocad-engineering-cad.jpg" 
                  alt="AutoCAD 2D Electrical Schematics & Single-Line Diagrams" 
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
                <span style={{
                  position: 'absolute',
                  bottom: '0.5rem',
                  right: '0.5rem',
                  background: 'rgba(16, 36, 58, 0.85)',
                  color: '#fff',
                  fontSize: '0.65rem',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '3px'
                }}>
                  CAD Drafting Studio
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                Engineering Deliverables Index
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-navy)', fontWeight: '500' }}>AutoCAD Rooftop Array Layouts</span>
                  <span className="badge badge--success">DWG-PV-101</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-navy)', fontWeight: '500' }}>DC & AC Single-Line Diagrams (SLD)</span>
                  <span className="badge badge--success">DWG-SLD-201/202</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-navy)', fontWeight: '500' }}>Bill of Materials (BOM) Synthesis</span>
                  <span className="badge">184 Modules / 100 kW Inv</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--color-navy)', fontWeight: '500' }}>SEO Tech Articles & Video Scripts</span>
                  <span className="badge">3 Formats</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.25rem' }}>
                  <span style={{ color: 'var(--color-navy)', fontWeight: '500' }}>CAD Layer Conventions</span>
                  <span className="badge badge--outline">AIA / ISO Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section" style={{ background: 'var(--color-navy)', color: 'var(--color-white)', textAlign: 'center' }}>
        <div className="container container--narrow">
          <h2 style={{ fontSize: '2.25rem', color: 'var(--color-white)', marginBottom: '1rem' }}>
            Looking for a Dedicated Design Engineer?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
            Open to full-time Design Engineer roles, freelance AutoCAD drafting contracts, and technical content collaborations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg" style={{ background: 'var(--color-blue)', borderColor: 'var(--color-blue)' }}>
              Get in Touch →
            </Link>
            <a 
              href="https://linkedin.com/in/ayush-kumar-605990259" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--secondary btn--lg"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
