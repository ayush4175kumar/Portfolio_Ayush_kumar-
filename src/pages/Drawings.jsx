import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Drawings() {
  const drawingSheets = [
    {
      sheetNo: 'DWG-PV-101',
      title: '119.6 kWp Rooftop Array Layout & Module Coordinate Plan',
      discipline: 'Solar Mechanical / Layout',
      paperSize: 'A1 (841 × 594 mm)',
      scale: '1:100',
      rev: 'Rev 01 (Preliminary)',
      desc: 'Shows physical placement of 184 monocrystalline modules, inter-row maintenance walkways (800mm), roof edge setback buffers (1.2m), and inverter shelter zone.',
      layers: ['E-PV-MODL', 'E-BLDG-ROOF', 'E-WALK-WAY', 'E-ANNO-DIMS']
    },
    {
      sheetNo: 'DWG-PV-102',
      title: 'Shadow Contour Clearance & Intershed Spacing Elevation',
      discipline: 'Civil / Layout Analysis',
      paperSize: 'A3 (420 × 297 mm)',
      scale: '1:50',
      rev: 'Rev 00 (Demonstration)',
      desc: 'Sectional view demonstrating minimum row-to-row pitch calculation for winter solstice sun angles (elevation 28°), preventing inter-module shadow casting.',
      layers: ['E-PV-MODL', 'E-SHAD-LINE', 'E-ANNO-TEXT']
    },
    {
      sheetNo: 'DWG-SLD-201',
      title: 'DC Electrical Schematic & String Combiner Architecture',
      discipline: 'Electrical — DC Power',
      paperSize: 'A3 (420 × 297 mm)',
      scale: 'N.T.S. (Schematic)',
      rev: 'Rev 01 (Preliminary)',
      desc: 'Single-line diagram of DC string circuits, 1500V DC rated isolation switches, 15A string fuses, and Type II DC Surge Protection Devices (SPD).',
      layers: ['E-SLD-DC', 'E-SLD-SYMB', 'E-ANNO-NOTE']
    },
    {
      sheetNo: 'DWG-SLD-202',
      title: '100 kW AC Evacuation & Main Switchgear Interconnection SLD',
      discipline: 'Electrical — AC Power',
      paperSize: 'A3 (420 × 297 mm)',
      scale: 'N.T.S. (Schematic)',
      rev: 'Rev 01 (Preliminary)',
      desc: 'Interconnection from 100 kW string inverter through 415V LT AC Distribution Board (ACDB), MCCB protection, bidirectional net metering, and plant grounding bus.',
      layers: ['E-SLD-AC', 'E-SLD-SWGR', 'E-GRID-BUS', 'E-ANNO-DIMS']
    },
    {
      sheetNo: 'DWG-STR-301',
      title: 'Module Mounting Structure (MMS) & Ballast Footing Details',
      discipline: 'Structural / Mounting',
      paperSize: 'A3 (420 × 297 mm)',
      scale: '1:20',
      rev: 'Rev 00 (Demonstration)',
      desc: 'Structural connection details of anodized aluminum rafter profiles, mid/end clamps, stainless steel (SS304) hardware, and concrete ballast blocks.',
      layers: ['S-MMS-ALUM', 'S-CONC-BLST', 'S-ANNO-DIMS']
    }
  ]

  const layerStandards = [
    { name: 'E-PV-MODL', color: 'Blue (Cyan)', lineWeight: '0.35 mm', description: 'Photovoltaic module outer frames, active cell geometry' },
    { name: 'E-PV-STRG', color: 'Magenta', lineWeight: '0.25 mm', description: 'DC string routing and module interconnection paths' },
    { name: 'E-SLD-DC', color: 'Red', lineWeight: '0.50 mm', description: 'Primary DC conductors and positive/negative bus lines' },
    { name: 'E-SLD-AC', color: 'Yellow', lineWeight: '0.50 mm', description: '415V Three-Phase AC power evacuation feeders' },
    { name: 'E-BLDG-ROOF', color: 'White / Grey', lineWeight: '0.30 mm', description: 'Parapet walls, HVAC chillers, vents, roof boundary' },
    { name: 'E-ANNO-DIMS', color: 'Green', lineWeight: '0.18 mm', description: 'Dimension lines, extension lines, distance callouts' },
    { name: 'E-ANNO-TEXT', color: 'White', lineWeight: '0.25 mm', description: 'General notes, sheet title blocks, revision history' }
  ]

  return (
    <div>
      <PageHero
        title="Technical Drawings & CAD Standards"
        subtitle="AutoCAD 2D layouts, Single-Line Diagrams (SLD), layer hierarchies, and engineering sheet index prepared to industry drafting standards."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Technical Drawings' }
        ]}
      />

      <div className="section">
        <div className="container">
          {/* Availability Notice */}
          <div className="notice notice--info" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong>Drafting Governance & File Access:</strong> All sheets below conform to standard electrical drafting layer standards (AIA / ISO conventions). Source DWG CAD files are available for technical evaluation upon request.
              </div>
              <Link to="/contact" className="btn btn--secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                Request Drawing Package ↗
              </Link>
            </div>
          </div>

          {/* CAD Studio Workspace Banner */}
          <div className="detail-hero-banner">
            <img 
              src="/images/autocad-engineering-cad.jpg" 
              alt="AutoCAD 2D Electrical Schematics & Single-Line Diagram Drafting Workstation" 
            />
            <span className="detail-hero-caption">
              CAD drafting & single-line diagram production environment
            </span>
          </div>

          {/* Section: Drawing Sheets Gallery */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">Engineering Deliverables</div>
            <h2 className="section-title">Drawing Sheets Index</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Standardized drawing packages developed for preliminary review, EPC tendering, and field installation alignment.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {drawingSheets.map((sheet, idx) => (
                <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: 'Courier New, monospace',
                          fontWeight: '700',
                          color: 'var(--color-blue)',
                          background: 'var(--color-blue-subtle)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem'
                        }}>
                          {sheet.sheetNo}
                        </span>
                        <span className="badge badge--outline">{sheet.discipline}</span>
                        <span className="badge badge--warning">{sheet.rev}</span>
                      </div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0 }}>
                        {sheet.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', textAlign: 'right' }}>
                      <div>
                        <div><strong>Size:</strong> {sheet.paperSize}</div>
                        <div><strong>Scale:</strong> {sheet.scale}</div>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {sheet.desc}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    borderTop: '1px solid var(--color-border-light)',
                    paddingTop: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-navy)' }}>Active Layers:</span>
                      {sheet.layers.map((layer, lIdx) => (
                        <span key={lIdx} style={{
                          fontSize: '0.7rem',
                          fontFamily: 'monospace',
                          background: 'var(--color-bg)',
                          padding: '0.15rem 0.4rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border)'
                        }}>
                          {layer}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="verification-status">
                        <span className="verification-status__dot"></span>
                        DWG on File
                      </span>
                      <Link 
                        to="/contact" 
                        className="btn btn--secondary" 
                        style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                      >
                        Request Sheet
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: AutoCAD Layer Architecture */}
          <div>
            <div className="section-label">CAD Standardization</div>
            <h2 className="section-title">Layer Convention Architecture</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Disciplined layer separation ensures clean plotting, independent isolation during electrical audits, and multi-team collaboration compatibility.
            </p>

            <div className="table-wrapper">
              <table className="layer-table">
                <thead>
                  <tr>
                    <th>Layer Identifier</th>
                    <th>Color Code</th>
                    <th>Plot Lineweight</th>
                    <th>Engineering Description / Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {layerStandards.map((layer, idx) => (
                    <tr key={idx}>
                      <td className="layer-name">{layer.name}</td>
                      <td style={{ color: 'var(--color-navy)', fontWeight: '500' }}>{layer.color}</td>
                      <td style={{ fontFamily: 'monospace' }}>{layer.lineWeight}</td>
                      <td style={{ color: 'var(--color-text-secondary)' }}>{layer.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
