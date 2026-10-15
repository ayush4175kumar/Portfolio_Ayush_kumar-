import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function SolarProject() {
  // Simple interactive string calculation state for demonstration
  const [modulesPerString, setModulesPerString] = useState(23)
  const moduleVoc = 49.8 // V at STC
  const moduleVmp = 41.5 // V at STC
  const stringVocSTC = (modulesPerString * moduleVoc).toFixed(1)
  const stringVmpSTC = (modulesPerString * moduleVmp).toFixed(1)

  return (
    <div>
      <PageHero
        title="119.6 kWp Commercial Rooftop Solar PV System"
        subtitle="Preliminary engineering design, AutoCAD layout detailing, electrical single-line diagram (SLD), and equipment sizing for a 100 kW AC grid-tied commercial rooftop installation."
        badge="Preliminary Design — Portfolio Demonstration"
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: '119.6 kWp Solar PV' }
        ]}
      />

      <div className="section">
        <div className="container">
          {/* Engineering Governance Notice */}
          <div className="notice notice--info" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong>Design Classification:</strong> Project ID: <code>SAMPLE-SOLAR-001</code>. This case study represents a rigorous preliminary engineering model developed to demonstrate commercial solar PV design, AutoCAD drafting, and electrical single-line diagram workflows.
              </div>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="detail-hero-banner">
            <img 
              src="/images/commercial-rooftop-solar-pv.jpg" 
              alt="119.6 kWp Commercial Rooftop Solar PV Installation" 
            />
            <span className="detail-hero-caption">
              Conceptual visualization — commercial rooftop array layout
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
                DC Array Capacity
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-blue)', margin: '0.25rem 0' }}>
                119.6 kWp
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                184 Modules × 650 W
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                AC Inverter Rating
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                100 kW
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Three-Phase 415V, 50 Hz
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                DC / AC Sizing Ratio
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-success)', margin: '0.25rem 0' }}>
                1.196
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Optimized Inverter Loading
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Module Technology
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.5rem 0 0.25rem' }}>
                Mono PERC
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Half-Cut High Efficiency
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Array Tilt Angle
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                15° True South
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                Optimized for Indian Latitudes
              </div>
            </div>
          </div>

          {/* Section: Project Overview & Objectives */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Executive Engineering Summary</div>
            <h2 className="section-title">Design Scope & Project Context</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}>
              <div>
                <p style={{ color: 'var(--color-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  This engineering model outlines the preliminary design for a <strong>119.6 kWp DC rooftop solar photovoltaic (PV) facility</strong> atop a commercial reinforced concrete cement (RCC) flat roof structure. The system is paired with a <strong>100 kW AC grid-tied central string inverter</strong> delivering power directly to the facility's 415V, 3-phase, 50 Hz Low Tension (LT) main distribution switchboard.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  The design balances maximum solar kilowatt-peak generation against strict physical roof constraints: 1.5-meter setback perimeters from the parapet wall for firefighter access, 800mm clear maintenance corridors between module rows, and dedicated exclusion buffers around existing rooftop HVAC chiller units and ventilation shafts.
                </p>
              </div>

              <div className="card" style={{ background: 'var(--color-bg)', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  Key Engineering Constraints
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  <li>• <strong>Roof Parapet Setback:</strong> 1500 mm continuous perimeter buffer</li>
                  <li>• <strong>Inter-Row Walkway:</strong> 800 mm for maintenance and cleaning</li>
                  <li>• <strong>Max System DC Voltage:</strong> 1000 VDC IEC classification</li>
                  <li>• <strong>Inverter MPPT Window:</strong> 200 VDC – 1000 VDC</li>
                  <li>• <strong>Mounting Method:</strong> Non-penetrating ballasted aluminum rafter</li>
                  <li>• <strong>Wind Resistance Design:</strong> Rated up to 150 km/h (IS 875 Part 3)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Step-by-Step Engineering Methodology */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Design Process</div>
            <h2 className="section-title">Five-Phase Engineering Methodology</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
              {/* Phase 1 */}
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
                    Roof Audit, Shading Geometry & Boundary Layout
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  A full spatial boundary survey established usable rooftop area while mapping static shadow obstacles (staircase headrooms, HVAC chillers, and parapets). Using solar elevation angles calculated for the winter solstice (sun elevation approx 28° at solar noon), row-to-row spacing was set to eliminate inter-row self-shading between 9:00 AM and 3:30 PM.
                </p>
              </div>

              {/* Phase 2 */}
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
                    PV Module Selection & Array Capacity Calibration
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  Selected Tier-1 650 Wp Monocrystalline Half-Cut modules due to high surface area efficiency (approx 21.3%) and superior low-irradiance temperature coefficients (-0.35%/°C). To achieve target capacity, 184 modules were allocated in clean geometric sub-arrays, yielding exactly 119,600 Wp (119.6 kWp DC).
                </p>
              </div>

              {/* Phase 3 */}
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
                    Electrical String Configuration & MPPT Window Matching
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  The 184 modules are grouped into <strong>8 parallel strings of 23 modules each in series</strong> (8 strings × 23 modules = 184 modules). At STC (Standard Test Conditions), string open-circuit voltage is 1,145.4 V max cold-temp corrected to remain securely under the 1500 VDC class limit, while nominal operating Vmp sits comfortably within the inverter's optimal 550V–800V MPPT efficiency curve.
                </p>
              </div>

              {/* Phase 4 */}
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
                    Balance of System (BOS) & Protection Architecture
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  DC string cables (4 mm² solar cross-linked XLPO, UV-resistant) route through galvanized perforated cable trays to DC Distribution Boxes (DCDB). Protection includes 15A gPV string fuses on positive and negative conductors, 1000V DC rotary isolators, and Type II Surge Protection Devices (SPDs). The AC side terminates into a 415V ACDB equipped with a 200A 4-Pole MCCB.
                </p>
              </div>

              {/* Phase 5 */}
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
                  }}>5</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy)', margin: 0 }}>
                    AutoCAD Drawing Production & Standardized Deliverables
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '3rem' }}>
                  Prepared comprehensive CAD sheets including DWG-PV-101 (Rooftop Array Layout), DWG-PV-102 (Shading Pitch Elevation), DWG-SLD-201 (DC Schematic), and DWG-SLD-202 (AC Evacuation SLD). Strict layer conventions and standardized electrical symbols were used throughout.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Interactive String Calculation Tool */}
          <div className="card" style={{ background: 'var(--color-bg)', padding: '2rem', marginBottom: '3.5rem' }}>
            <div className="section-label">Interactive Engineering Verification</div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              String Sizing & Voltage Verification Model
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Evaluate string voltage parameters against the 100 kW central inverter operating thresholds (MPPT range: 200 V – 1000 V; Max DC input: 1100 V).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>
                  Modules per Series String:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="18" 
                    max="24" 
                    value={modulesPerString} 
                    onChange={(e) => setModulesPerString(Number(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--color-blue)' }}
                  />
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--color-blue)',
                    background: 'var(--color-white)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    minWidth: '50px',
                    textAlign: 'center'
                  }}>
                    {modulesPerString}
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                  Default design uses <strong>23 modules/string</strong> (8 strings total = 184 modules).
                </div>
              </div>

              <div style={{ background: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Calculated String Vmp (at STC):</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                  {stringVmpSTC} VDC
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-success)', fontWeight: '500' }}>
                  ✓ Inside optimal MPPT window (550V – 850V)
                </div>
              </div>

              <div style={{ background: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Calculated String Voc (at STC):</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-navy)' }}>
                  {stringVocSTC} VDC
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-success)', fontWeight: '500' }}>
                  ✓ Safely below 1100 VDC inverter limit
                </div>
              </div>
            </div>
          </div>

          {/* Section: Comprehensive Bill of Materials (BOM) */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Procurement & Equipment Schedule</div>
            <h2 className="section-title">Bill of Materials (BOM) — 119.6 kWp System</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Standard equipment schedule quantifying primary electrical balance of system (EBOS) and structural components.
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
                    <th>Standards / Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td><strong>Solar PV Modules</strong></td>
                    <td>650 Wp Monocrystalline Half-Cut PERC (21.3% Eff)</td>
                    <td>184</td>
                    <td>Nos</td>
                    <td>IEC 61215 / IEC 61730</td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td><strong>Grid-Tied String Inverter</strong></td>
                    <td>100 kW AC, 3-Phase 415V, 50Hz, Multi-MPPT</td>
                    <td>01</td>
                    <td>No</td>
                    <td>IEC 62109, VDE-AR-N 4105</td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td><strong>Module Mounting Structure (MMS)</strong></td>
                    <td>Pre-galvanized / Anodized Aluminum Ballasted 15°</td>
                    <td>01</td>
                    <td>Lot</td>
                    <td>IS 875 Part 3 (Wind up to 150 km/h)</td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td><strong>DC Solar Cable (Strings)</strong></td>
                    <td>1C × 4 mm² Copper, Cross-Linked XLPO, 1.5 kV DC</td>
                    <td>1,450</td>
                    <td>Mtr</td>
                    <td>EN 50618 (UV & Ozone Resistant)</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td><strong>DC Distribution Box (DCDB)</strong></td>
                    <td>8-In / 8-Out with 15A gPV Fuses & Type II SPD</td>
                    <td>01</td>
                    <td>No</td>
                    <td>IP65 Enclosure, 1000V DC rated</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td><strong>AC Distribution Box (ACDB)</strong></td>
                    <td>415V LT Panel with 200A 4P MCCB (36kA) + Type II SPD</td>
                    <td>01</td>
                    <td>No</td>
                    <td>IS 8623 / IEC 61439</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td><strong>AC Evacuation Cable</strong></td>
                    <td>3.5C × 120 mm² Aluminium XLPE Armoured</td>
                    <td>65</td>
                    <td>Mtr</td>
                    <td>IS 7098 (Permissible drop &lt; 1.5%)</td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td><strong>Earthing & Lightning Kit</strong></td>
                    <td>Maintenance-free Chemical Earth Electrodes (3m)</td>
                    <td>04</td>
                    <td>Sets</td>
                    <td>IS 3043 (DC, AC, Inverter & LA)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Single-Line Diagram Architecture Walkthrough */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Schematic Detailing</div>
            <h2 className="section-title">Single-Line Diagram (SLD) Circuit Breakdown</h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <div className="card">
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--color-blue)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  Zone A: DC Generation Array
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  Module Strings to Combiner
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Eight independent strings of 23 modules generate up to 119.6 kWp DC. Positive and negative conductors are protected with 15A ceramic gPV fuses in the DCDB to prevent reverse string current damage during partial shading conditions.
                </p>
              </div>

              <div className="card">
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--color-blue)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  Zone B: Power Inversion
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  100 kW Central Inverter
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  DC energy is collected and converted to clean three-phase alternating current at 415V, 50 Hz. Internal anti-islanding relays instantly disconnect the inverter from the plant switchgear in the event of grid interruption.
                </p>
              </div>

              <div className="card">
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--color-blue)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  Zone C: AC Distribution & Grid Interconnection
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                  ACDB & Bi-Directional Meter
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Power flows through the 200A 4-Pole MCCB, energy check meters, and bidirectional net meter at the facility LT breaker panel, enabling self-consumption with excess energy export back to the grid.
                </p>
              </div>
            </div>
          </div>

          {/* Section: CAD Deliverables Table */}
          <div className="card" style={{ padding: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div className="section-label">Engineering Drawings</div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', margin: '0.25rem 0' }}>
                  AutoCAD Deliverable Drawing Sheets
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  All sheets drafted with standard coordinate alignment, scale blocks, and AIA/ISO layer conventions.
                </p>
              </div>
              <Link to="/drawings" className="btn btn--secondary" style={{ fontSize: '0.85rem' }}>
                View All Drawing Standards →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-PV-101</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>119.6 kWp Rooftop Array Layout & Walkway Clearances</span>
                </div>
                <span className="badge badge--success">DWG on File</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-PV-102</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>Shading Analysis & Intershed Row Elevation Details</span>
                </div>
                <span className="badge badge--success">DWG on File</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-SLD-201</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>DC Side Single-Line Diagram & Combiner Circuit</span>
                </div>
                <span className="badge badge--success">DWG on File</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--color-blue)', marginRight: '0.75rem' }}>DWG-SLD-202</span>
                  <span style={{ fontWeight: '500', color: 'var(--color-navy)' }}>100 kW AC Evacuation & Switchgear Interconnection SLD</span>
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
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Next Project Showcase:</div>
              <Link to="/projects/content-writing" style={{ fontWeight: '600', color: 'var(--color-navy)', fontSize: '1.1rem' }}>
                Technical & SEO Content Writing Portfolio →
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Discuss Solar Design Consultation →
              </Link>
              <Link to="/projects" className="btn btn--secondary">
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
