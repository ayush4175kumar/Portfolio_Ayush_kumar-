import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Computer-Aided Design (CAD) & Drafting',
      description: 'Production of high-precision 2D drawings, electrical schematics, and construction documentation in AutoCAD.',
      skills: [
        { name: 'AutoCAD 2D Drafting', level: 'Advanced', note: 'Coordinate drafting, layout planning, and construction detailing' },
        { name: 'Single-Line Diagrams (SLD)', level: 'Advanced', note: 'Standard power generation & evacuation schematics' },
        { name: 'Layer Hierarchy Management', level: 'Proficient', note: 'AIA/ISO layer conventions, color mapping, and lineweight plotting' },
        { name: 'Dimensioning & Tolerance Callouts', level: 'Proficient', note: 'Accurate scale dimensioning across model and paper spaces' },
        { name: 'Block Libraries & Dynamic Blocks', level: 'Proficient', note: 'Standardized electrical symbols (inverters, breakers, panels)' },
        { name: 'Title Block & Paper Space Setup', level: 'Proficient', note: 'A1/A3 sheet formatting, drawing index, and rev block control' }
      ]
    },
    {
      title: 'Solar PV System Design & Engineering',
      description: 'End-to-end preliminary design workflows for commercial, industrial, and residential rooftop solar arrays.',
      skills: [
        { name: 'Rooftop Array Layout Optimization', level: 'Specialized', note: 'Maximizing module density while preserving walkway clearances' },
        { name: 'String Sizing & Configuration', level: 'Specialized', note: 'Matching Voc/Vmp temperature coefficients against inverter MPPT windows' },
        { name: 'DC/AC Ratio Calibration (1.196)', level: 'Specialized', note: 'Balancing inverter clipping losses against peak generation' },
        { name: 'Shadow Analysis & Inter-Row Pitch', level: 'Proficient', note: 'Solar elevation angle calculations for zero inter-row shading' },
        { name: 'Bill of Materials (BOM) Synthesis', level: 'Proficient', note: 'Comprehensive quantification of modules, structure, and cabling' },
        { name: 'Array Electrical Protection (DC/AC)', level: 'Proficient', note: 'Specifying DC isolators, SPD Type II, and AC disconnects' }
      ]
    },
    {
      title: 'Electrical Power Distribution & Engineering',
      description: 'Fundamental power systems engineering grounded in B.Tech Electrical curriculum.',
      skills: [
        { name: 'Three-Phase 415V Distribution', level: 'Proficient', note: 'Balanced phase loading, busbar sizing, and panel distribution' },
        { name: 'Cable Sizing & Ampacity Derating', level: 'Proficient', note: 'Thermal derating, conduit fill, and permissible voltage drops' },
        { name: 'Protection & Switchgear Sizing', level: 'Proficient', note: 'MCCB, MCB, and fuse current rating calculations' },
        { name: 'Earthing & Lightning Protection', level: 'Intermediate', note: 'Equipment grounding busbars, earth pits, and surge path routing' },
        { name: 'Energy Conservation & LED Systems', level: 'Proficient', note: 'Lighting load calculations, automated timer integration' }
      ]
    },
    {
      title: 'Codes, Standards & Engineering Quality',
      description: 'Familiarity with national and international codes guiding electrical installations.',
      skills: [
        { name: 'IS 732 / IS 3043 (Earthing & Wiring)', level: 'Familiar', note: 'Indian Standard codes of practice for electrical wiring & earthing' },
        { name: 'IEC 62548 (PV Array Design)', level: 'Familiar', note: 'Design requirements for photovoltaic (PV) arrays' },
        { name: 'Central Electricity Authority (CEA)', level: 'Familiar', note: 'Indian grid safety, clearance, and installation norms' },
        { name: 'Engineering Calculations in Excel', level: 'Proficient', note: 'Parametric sheets for string voltage, drop, and generation modeling' }
      ]
    },
    {
      title: 'Content Creation & Technical Communication',
      description: 'Translating complex engineering and technology topics into accessible, engaging digital content.',
      skills: [
        { name: 'SEO Content Writing & Structuring', level: 'Applied', note: 'Search-intent alignment, H-tag hierarchy, and commercial analysis' },
        { name: 'Short-Form Video Scripting', level: 'Applied', note: 'Paced timelines, visual cue direction, and retention hook mechanics' },
        { name: 'Social Media Copywriting', level: 'Applied', note: 'Educational listicles, LinkedIn thought leadership, reader-first framing' },
        { name: 'AI-Augmented Research Workflows', level: 'Applied', note: 'Prompt engineering via ChatGPT for outline synthesis and angle ideation' },
        { name: 'Visual Graphics & Documentation', level: 'Applied', note: 'Canva graphic design, Google Docs, collaborative editing' }
      ]
    }
  ]

  return (
    <div>
      <PageHero
        title="Technical Skills & Competency Matrix"
        subtitle="A detailed index of design engineering capabilities, software proficiencies, industry codes, and technical communication strengths."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Skills' }
        ]}
      />

      <div className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skills-category">
                <h2 className="skills-category__title">{cat.title}</h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {cat.description}
                </p>

                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-item__name">{skill.name}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                        <span className="badge badge--outline" style={{ fontSize: '0.7rem' }}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-item__detail">{skill.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Engineering Philosophy Banner */}
            <div className="card" style={{ background: 'var(--color-bg)', marginTop: '2rem', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                Engineering Drafting Philosophy
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Clean engineering drawings prevent costly on-site errors. In every project—whether an electrical SLD or a rooftop PV layout—I prioritize strict layer standardization, dimension accuracy, code compliance, and clear readable callouts.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/projects/commercial-rooftop-solar-pv" className="btn btn--primary" style={{ fontSize: '0.85rem' }}>
                  View Solar PV Case Study →
                </Link>
                <Link to="/drawings" className="btn btn--secondary" style={{ fontSize: '0.85rem' }}>
                  Inspect CAD Layer Conventions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
