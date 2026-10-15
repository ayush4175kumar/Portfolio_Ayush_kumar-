import { Link } from 'react-router-dom'
import ayushPhoto from '../assets/ayush-photo.jpg'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <div>
      <PageHero
        title="About Ayush Kumar"
        subtitle="Electrical Engineering graduate, AutoCAD Design Engineer, and technical communicator committed to rigorous design standards."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'About' }
        ]}
      />

      <div className="section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Column: Profile Card */}
            <div>
              <div className="about-photo-card">
                <div className="about-photo-frame">
                  <img 
                    src={ayushPhoto} 
                    alt="Ayush Kumar - Design Engineer" 
                    className="about-photo-img"
                    onError={(e) => {
                      e.currentTarget.src = '/ayush-photo.jpg'
                    }}
                  />
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                    Ayush Kumar
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-blue)', fontWeight: '600' }}>
                    Design Engineer
                  </div>
                </div>

                <div className="about-quick-specs">
                  <div className="about-spec-row">
                    <span className="about-spec-label">Degree:</span>
                    <span>B.Tech Electrical Eng.</span>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">Core Focus:</span>
                    <span>Solar PV & AutoCAD</span>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">Base Location:</span>
                    <span>Sasaram, Bihar, India</span>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">Work Mode:</span>
                    <span>On-Site / Hybrid / Remote</span>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">Phone:</span>
                    <a href="tel:+919508725445" style={{ color: 'var(--color-navy)', fontWeight: '500' }}>+91 95087 25445</a>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">GitHub:</span>
                    <a href="https://github.com/ayush4175kumar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-blue)' }}>ayush4175kumar ↗</a>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">X / Twitter:</span>
                    <a href="https://x.com/AyushKu38914909" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-blue)' }}>AyushKu38914909 ↗</a>
                  </div>
                  <div className="about-spec-row">
                    <span className="about-spec-label">Status:</span>
                    <span style={{ color: 'var(--color-success)', fontWeight: '600' }}>Available for Hire</span>
                  </div>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a 
                    href="mailto:ayushkumar9128750@gmail.com" 
                    className="btn btn--primary" 
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}
                  >
                    Email Ayush ✉️
                  </a>
                  <a 
                    href="tel:+919508725445" 
                    className="btn btn--secondary" 
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}
                  >
                    Call / WhatsApp 📞
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Biography */}
            <div>
              <div className="section-label">Engineering Profile</div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                Engineering Mindset Grounded in Precision & Clear Communication
              </h2>

              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1.25rem' }}>
                I am a <strong>Bachelor of Technology (B.Tech) in Electrical Engineering graduate</strong> with a specialized focus on computer-aided drafting (CAD), commercial solar photovoltaic (PV) system modeling, and single-line diagram (SLD) preparation. My engineering training emphasizes methodical circuit analysis, adherence to installation safety standards, and practical design solutions.
              </p>

              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                During my engineering coursework and independent project research, I developed an in-depth understanding of how theoretical power systems translate into field-ready construction drawings. From calculating permissible voltage drops across long DC cable runs to optimizing string lengths within inverter MPPT windows, I focus on accuracy, safety, and operational longevity.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginTop: '2rem', marginBottom: '1rem' }}>
                Core Areas of Focus
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    1. AutoCAD 2D Draftsmanship
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Clean layer management, dynamic symbols, precise dimensioning, and standardized title block layouts adhering to AIA/ISO conventions.
                  </p>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    2. Solar PV System Design
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Rooftop layout geometry, module pitch calculation for zero inter-row shading, DC/AC sizing (1.196 ratio), and comprehensive BOMs.
                  </p>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    3. Electrical Distribution & Protection
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Three-phase 415V distribution schematics, MCCB/MCB breaker coordination, cable ampacity derating, and equipment earthing.
                  </p>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                    4. Technical Content & Digital Media
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Writing high-value SEO articles, audience-focused copywriting, and scripting short-form video content with clear timestamps.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/projects/commercial-rooftop-solar-pv" className="btn btn--primary">
                  View 119.6 kWp Solar Design →
                </Link>
                <Link to="/resume" className="btn btn--secondary">
                  View Full Resume
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Contact Ayush
                </Link>
              </div>
            </div>
          </div>

          {/* Section: Professional Principles */}
          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
            <div className="section-label">Engineering Standards</div>
            <h2 className="section-title">Design Philosophy & Work Ethic</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>📐</div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  No Unverified Assumptions
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Every coordinate, module spacing buffer, and cable length calculation is grounded in verified physical constraints and real datasheet specifications.
                </p>
              </div>

              <div className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>📜</div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Code Compliance First
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Design workflows respect Indian Standard (IS 732, IS 3043) and international IEC 62548 guidelines for safe electrical installations and solar array durability.
                </p>
              </div>

              <div className="card">
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>🔍</div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Clear Communication
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  A design drawing is only as good as its readability. I treat annotations, line weights, notes, and technical writing as essential engineering tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
