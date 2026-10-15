import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Resume() {
  return (
    <div>
      <PageHero
        title="Resume & Professional Credentials"
        subtitle="Curriculum vitae, academic qualifications, technical proficiencies, and verified engineering experience of Ayush Kumar."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Resume' }
        ]}
      />

      <div className="section">
        <div className="container container--narrow">
          {/* PDF Download Active Action Banner */}
          <div className="notice notice--info" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong>Official Resume Available:</strong> Download the complete, verified curriculum vitae of Ayush Kumar in standard PDF format.
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a 
                  href="/documents/Ayush_Kumar_Resume.pdf" 
                  download="Ayush_Kumar_Resume.pdf"
                  className="btn btn--primary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  Download PDF Resume ↓
                </a>
                <a 
                  href="/documents/Ayush_Kumar_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  View in Browser ↗
                </a>
              </div>
            </div>
          </div>

          {/* Resume Header Card */}
          <div className="card" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                  Ayush Kumar
                </h2>
                <div style={{ fontSize: '1.125rem', color: 'var(--color-blue)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Design Engineer | B.Tech Electrical Engineering
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.35rem' }}>
                  <span>📍 Sasaram, Bihar, India</span>
                  <span>📞 <a href="tel:+919508725445" style={{ color: 'var(--color-navy)', fontWeight: '500' }}>+91 95087 25445</a></span>
                  <span>✉️ <a href="mailto:ayushkumar9128750@gmail.com" style={{ color: 'var(--color-navy)', fontWeight: '500' }}>ayushkumar9128750@gmail.com</a></span>
                  <span>🔗 <a href="https://linkedin.com/in/ayush-kumar-605990259" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                  <span>💻 <a href="https://github.com/ayush4175kumar" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                  <span>𝕏 <a href="https://x.com/AyushKu38914909" target="_blank" rel="noopener noreferrer">X (Twitter)</a></span>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <span className="badge badge--success">
                  Open to freelance projects
                </span>
                <a 
                  href="/documents/Ayush_Kumar_Resume.pdf" 
                  download="Ayush_Kumar_Resume.pdf"
                  className="btn btn--secondary"
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                >
                  Download PDF ↓
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-section">
              <h3 className="resume-section__title">Professional Profile</h3>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                Goal-oriented and analytical Design Engineer and Electrical Engineering graduate with a strong technical foundation in AutoCAD 2D drafting, solar photovoltaic (PV) system sizing, single-line diagrams (SLD), and electrical power distribution schematics. Adept at translating site parameters and client energy demands into compliant, code-adherent engineering deliverables. In addition to technical draftsmanship, skilled in content strategy, SEO article structuring, and short-form video scripting to communicate complex technical topics to diverse stakeholders.
              </p>
            </div>

            {/* Education */}
            <div className="resume-section">
              <h3 className="resume-section__title">Education</h3>
              <div className="education-item">
                <div>
                  <div className="education-item__degree">
                    Bachelor of Technology (B.Tech) in Electrical Engineering
                  </div>
                  <div className="education-item__school">
                    Bihar Engineering University
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                    Focus Areas: Power Systems, Electrical Machines, Switchgear & Protection, Renewable Energy Engineering, Control Systems.
                  </div>
                </div>
                <div className="education-item__date">
                  Graduated (2021-25)
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="resume-section">
              <h3 className="resume-section__title">Core Technical Proficiencies</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    CAD & Electrical Drafting
                  </div>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    <li>• AutoCAD 2D Drafting & Annotation</li>
                    <li>• Single-Line Diagrams (SLD)</li>
                    <li>• Electrical Schematics & Symbol Standards</li>
                    <li>• Layer Convention Management</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Solar PV Engineering
                  </div>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    <li>• Rooftop Array Layout Optimization</li>
                    <li>• String Sizing & Inverter Matching</li>
                    <li>• DC/AC Ratio Calibration (1.196)</li>
                    <li>• Bill of Materials (BOM) Preparation</li>
                  </ul>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    Content & Communication
                  </div>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    <li>• SEO Blog Structuring & Keyword Integration</li>
                    <li>• Social Media Engagement Copywriting</li>
                    <li>• Short-Form Video Scripting (Paced Timelines)</li>
                    <li>• AI-Assisted Research Workflow (ChatGPT)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Engineering Projects */}
            <div className="resume-section">
              <h3 className="resume-section__title">Key Technical Projects</h3>

              {/* Solar Project */}
              <div className="experience-item">
                <div className="experience-item__header">
                  <div>
                    <div className="experience-item__title">
                      119.6 kWp Commercial Rooftop Solar PV System Design
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-blue)', fontWeight: '500' }}>
                      Preliminary Design Demonstration • Project ID: SAMPLE-SOLAR-001
                    </div>
                  </div>
                  <div className="experience-item__period">
                    Engineering Case Study
                  </div>
                </div>
                <ul className="experience-item__list">
                  <li>Engineered a comprehensive 119.6 kWp DC rooftop solar PV layout utilizing 184 monocrystalline half-cut modules rated at 650 W each.</li>
                  <li>Configured string groupings to match a 100 kW AC grid-tied central string inverter, establishing an optimized DC/AC ratio of 1.196.</li>
                  <li>Drafted multi-layer AutoCAD architectural array layouts, spacing shadow clearance corridors to mitigate inter-row shading.</li>
                  <li>Developed complete Single-Line Diagram (SLD) detailing DC string combiner boxes, DC isolators, Surge Protection Devices (SPD Type II), AC distribution boards (ACDB), and bidirectional metering interfaces.</li>
                </ul>
              </div>

              {/* Content Writing Project */}
              <div className="experience-item">
                <div className="experience-item__header">
                  <div>
                    <div className="experience-item__title">
                      Technical & SEO Content Writing Portfolio
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-blue)', fontWeight: '500' }}>
                      Self-Initiated Digital Communication Portfolio
                    </div>
                  </div>
                  <div className="experience-item__period">
                    Portfolio Demonstration
                  </div>
                </div>
                <ul className="experience-item__list">
                  <li>Authored search-intent optimized tech buying guide ("How to Choose the Best Wireless Earbuds in 2026") addressing battery metrics, sound balance, and call-quality drivers.</li>
                  <li>Crafted high-retention social content ("5 Content Writing Tips") engineered with hook mechanics, skim-friendly typography, and actionable reader takeaways.</li>
                  <li>Scripted 60-second paced video narrative ("3 Ways to Use AI for Content Creation") mapping visual cue direction, screen animations, and audio narration timestamps.</li>
                </ul>
              </div>

              {/* Smart City Lighting */}
              <div className="experience-item">
                <div className="experience-item__header">
                  <div>
                    <div className="experience-item__title">
                      Smart City LED Street Lighting Distribution Network
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-blue)', fontWeight: '500' }}>
                      Academic Project / Conceptual Engineering
                    </div>
                  </div>
                  <div className="experience-item__period">
                    Academic Capstone
                  </div>
                </div>
                <ul className="experience-item__list">
                  <li>Designed balanced 415V 3-phase 4-wire power distribution schematics for municipal street lighting poles across an urban sector.</li>
                  <li>Integrated automated photocell sensing and digital timer relays to eliminate manual operational lag and reduce baseline energy usage by ~38%.</li>
                  <li>Calculated permissible voltage drops across end-of-line luminaires to ensure compliance with permissible voltage limits.</li>
                </ul>
              </div>
            </div>

            {/* Software & Tools */}
            <div className="resume-section">
              <h3 className="resume-section__title">Software & Digital Tools</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge">AutoCAD (2D & Schematics)</span>
                <span className="badge">Microsoft Excel (Calculations)</span>
                <span className="badge">Google Workspace</span>
                <span className="badge">ChatGPT (AI Prompt Engineering)</span>
                <span className="badge">Canva</span>
                <span className="badge">Git / GitHub</span>
                <span className="badge">Technical Documentation</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="/documents/Ayush_Kumar_Resume.pdf" 
              download="Ayush_Kumar_Resume.pdf"
              className="btn btn--primary btn--lg"
            >
              Download PDF Resume (Official) ↓
            </a>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Schedule an Interview / Connect →
            </Link>
            <Link to="/projects" className="btn btn--ghost btn--lg">
              View Project Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
