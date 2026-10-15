import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <div>
      <PageHero 
        title="404 — Page Not Found"
        subtitle="The requested document, drawing, or section does not exist or has been relocated."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: '404' }
        ]}
      />

      <div className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2rem',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: '800',
              color: 'var(--color-navy)',
              lineHeight: 1,
              marginBottom: '1rem'
            }}>
              404
            </div>

            <p style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2rem',
              maxWidth: '480px',
              margin: '0 auto 2rem'
            }}>
              The engineering schematic or page you are looking for is unavailable. Please verify the URL or return to the main directory.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn--primary">
                Return to Home
              </Link>
              <Link to="/projects" className="btn btn--secondary">
                View Projects Portfolio
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Contact Ayush →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
