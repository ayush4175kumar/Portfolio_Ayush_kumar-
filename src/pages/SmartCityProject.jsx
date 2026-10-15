import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SmartCityProject() {
  return (
    <div>
      <PageHero
        title="Smart City LED Street Lighting Network"
        subtitle="Power distribution network design, automated dual-mode photocell timer control, and electrical load balancing for municipal energy efficiency."
        badge="Academic Capstone Project / Conceptual"
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Smart City Lighting' }
        ]}
      />

      <div className="section">
        <div className="container">
          {/* Engineering Governance Notice */}
          <div className="notice notice--info" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong>Design Scope & Governance:</strong> Project ID: <code>ACAD-LIGHT-002</code>. Developed as an electrical engineering capstone project modeling three-phase urban municipal power distribution and automated energy conservation.
              </div>
              <Link to="/contact" className="btn btn--secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                Request Schematics & Calculations ↗
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="detail-hero-banner">
            <img 
              src="/images/smart-city-led-lighting.jpg" 
              alt="Smart City LED Street Lighting Network - Municipal Roadway" 
            />
            <span className="detail-hero-caption">
              Conceptual visualization — municipal LED network
            </span>
          </div>

          {/* Quick Technical Specs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                System Voltage
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-blue)', margin: '0.25rem 0' }}>
                415 V
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                3-Phase, 4-Wire, 50 Hz
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Energy Reduction
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-success)', margin: '0.25rem 0' }}>
                ~38%
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Vs. Conventional 250W HPS
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Automated Control
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.4rem 0' }}>
                Dual-Mode
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Photocell + Astro Timer
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Pole Spacing
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                30 m
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Staggered Layout / 9m Height
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Max Voltage Drop
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                &lt; 2.5%
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                At End-of-Line Luminaire
              </div>
            </div>
          </div>

          {/* Project Narrative Overview */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Engineering Overview</div>
            <h2 className="section-title">Municipal Lighting Infrastructure & Electrical Architecture</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}>
              <div>
                <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Traditional municipal lighting grids suffer from substantial operational inefficiencies due to high-consumption High-Pressure Sodium (HPS) fixtures, uncalibrated manual switching lags, and unequal phase loading leading to neutral overheating.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  This capstone engineering project delivers a comprehensive design for an urban arterial corridor featuring <strong>energy-efficient 120W LED luminaires</strong> fed by a balanced 415V 3-phase 4-wire underground cable network. The system incorporates an automated <strong>Street Light Feeder Pillar (SLFP)</strong> panel utilizing ambient dusk-to-dawn photocell sensing paired with an astronomical digital timer for midnight step-dimming.
                </p>
              </div>

              <div className="card" style={{ background: 'var(--color-bg)', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  Design Standard Compliance
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  <li>• <strong>IS 1944:</strong> Code of practice for lighting public thoroughfares (Category M2)</li>
                  <li>• <strong>IS 732:</strong> Electrical wiring installations in buildings & infrastructure</li>
                  <li>• <strong>IS 3043:</strong> Code of practice for earthing of electrical systems</li>
                  <li>• <strong>Average Lux Target:</strong> 25 Lux with uniformity ratio &gt; 0.4</li>
                  <li>• <strong>IP Rating:</strong> IP66 optical fixture enclosure protection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4-Phase Methodology */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Methodology</div>
            <h2 className="section-title">Four-Phase Engineering Execution</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.875rem'
                  }}>1</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', margin: 0 }}>
                    Photometric & Illumination Sizing (Lux Modeling)
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  Calculated required luminous flux for a 14-meter wide dual-carriage roadway. Using 120W LED optical fixtures delivering 15,600 lumens at a 130 lm/W efficacy, an optimal mounting height of 9 meters with a 30-meter staggered pole pitch was determined to satisfy BIS M2 roadway uniformity norms without creating glare blindspots.
                </p>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.875rem'
                  }}>2</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', margin: 0 }}>
                    Three-Phase Balanced Power Distribution & Cable Sizing
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  Luminaires are wired sequentially across phases: Pole 1 to R-Phase, Pole 2 to Y-Phase, Pole 3 to B-Phase, ensuring neutral current stays below 5% under normal operation. Selected 4-Core × 25 mm² Aluminium XLPE Armoured cable laid in underground trenches at a depth of 750mm, maintaining voltage drops well under the permissible 2.5% threshold.
                </p>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.875rem'
                  }}>3</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', margin: 0 }}>
                    Automated Dual-Mode Control & Energy Optimization
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  Designed an intelligent control philosophy inside the Feeder Pillar: an exterior photocell triggers contactor closure when natural daylight dips below 40 lux. Between 11:30 PM and 5:00 AM, an astronomical digital timer commands luminaire drivers to dim down to 50% rated output, capturing approximately 38% annual energy savings without sacrificing security visibility.
                </p>
              </div>

              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--color-blue)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.875rem'
                  }}>4</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', margin: 0 }}>
                    Switchgear Coordination, Fault Protection & Grounding
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  The central Feeder Pillar incorporates a 63A 4-Pole 25kA MCCB incoming breaker with 30mA residual current monitoring (ELCB). Each streetlight pole junction box houses an individual 6A SP Type-C MCB, ensuring that any localized luminaire short circuit or vehicular collision isolates only that single pole without interrupting the broader sector feeder.
                </p>
              </div>
            </div>
          </div>

          {/* Bill of Materials Table */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Equipment Schedule</div>
            <h2 className="section-title">Bill of Materials (BOM) — 1 km Roadway Corridor</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Procurement schedule detailing electrical, structural, and control hardware for a sample 1,000-meter municipal sector.
            </p>

            <div className="table-wrapper">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Item #</th>
                    <th>Component Description</th>
                    <th>Technical Specification</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Standard / Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td><strong>LED Streetlight Luminaire</strong></td>
                    <td>120W, 15,600 lm, 5700K CCT, IP66, 10kV SPD</td>
                    <td>68</td>
                    <td>Nos</td>
                    <td>IS 10322 / BIS Approved</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td><strong>Octagonal Steel Poles</strong></td>
                    <td>9m Height, Hot-Dip Galvanized, Single Arm (1.5m outreach)</td>
                    <td>68</td>
                    <td>Nos</td>
                    <td>IS 2713 / Wind Rating 150 km/h</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td><strong>Street Light Feeder Pillar (SLFP)</strong></td>
                    <td>Outdoor IP55 Weatherproof Panel with 63A 4P MCCB & Timer</td>
                    <td>01</td>
                    <td>No</td>
                    <td>IS 8623 / Central Distribution</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td><strong>Underground LT Armoured Cable</strong></td>
                    <td>4C × 25 mm² Aluminium Conductor, XLPE Insulated, 1.1kV</td>
                    <td>1,150</td>
                    <td>Mtr</td>
                    <td>IS 7098 Part 1</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td><strong>Pole Junction Boxes with MCB</strong></td>
                    <td>Molded Polycarbonate IP65 with 6A SP MCB & Terminals</td>
                    <td>68</td>
                    <td>Sets</td>
                    <td>Localized Fault Isolation</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td><strong>Grounding Electrode & GI Wire</strong></td>
                    <td>50mm dia GI Pipe Earth Pit + 8 SWG Continuous GI wire</td>
                    <td>04</td>
                    <td>Sets</td>
                    <td>IS 3043 (Max Earth &lt; 2 Ohms)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CAD Deliverables */}
          <div className="card" style={{ padding: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div className="section-label">Engineering Deliverables</div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                  AutoCAD Electrical Drawings & Schematics
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  Drafted in compliance with municipal electrical standards and trenching clearance codes.
                </p>
              </div>
              <Link to="/drawings" className="btn btn--secondary" style={{ fontSize: '0.85rem' }}>
                View All Drawing Standards →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-LT-401</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>Municipal 1 km Roadway Trench & Pole Coordinate Layout</span>
                </div>
                <span className="badge badge--success">DWG on File</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-SLD-402</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>Feeder Pillar Single-Line Diagram, Photocell & Contactor Logic</span>
                </div>
                <span className="badge badge--success">DWG on File</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid var(--color-border)',
            paddingTop: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Explore Flagship Solar Project:</div>
              <Link to="/projects/commercial-rooftop-solar-pv" style={{ fontWeight: '600', color: 'var(--color-navy)', fontSize: '1.1rem' }}>
                ← 119.6 kWp Commercial Rooftop Solar PV System
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Inquire on Electrical Design →
              </Link>
              <Link to="/projects" className="btn btn--secondary">
                Back to All Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
