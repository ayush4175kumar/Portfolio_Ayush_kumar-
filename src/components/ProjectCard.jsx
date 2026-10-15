import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    description,
    image,
    imageAlt,
    imageCaption,
    metrics = [],
    tags = [],
    badge,
    link
  } = project

  // Render SVG illustration placeholder as fallback only if image is not provided
  const renderFallbackGraphic = () => (
    <svg viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="120" height="50" rx="4" stroke="#64748B" strokeWidth="1.5" fill="#f8fafc" />
      <circle cx="45" cy="45" r="12" stroke="#2563EB" strokeWidth="2" />
      <line x1="57" y1="45" x2="103" y2="45" stroke="#2563EB" strokeWidth="2" />
      <circle cx="115" cy="45" r="12" stroke="#2563EB" strokeWidth="2" />
    </svg>
  )

  return (
    <div className="project-card">
      <Link to={link} className="project-card__image" aria-label={`View details for ${title}`}>
        {image ? (
          <img 
            src={image} 
            alt={imageAlt || title} 
            className="project-card__img"
            loading="lazy"
          />
        ) : (
          renderFallbackGraphic()
        )}
        {imageCaption && (
          <span className="project-card__caption">{imageCaption}</span>
        )}
      </Link>

      <div className="project-card__body">
        <div className="project-card__status">
          <span className="badge badge--outline" style={{ marginRight: '0.5rem' }}>
            {category}
          </span>
          {badge && (
            <span className="badge badge--warning">
              {badge}
            </span>
          )}
        </div>

        <h3 className="project-card__title">
          <Link to={link} style={{ color: 'inherit', textDecoration: 'none' }}>
            {title}
          </Link>
        </h3>
        <p className="project-card__desc">{description}</p>

        {metrics.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
            background: 'var(--color-bg)',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1rem',
            fontSize: '0.75rem'
          }}>
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.7rem' }}>{m.label}</div>
                <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>{m.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="project-card__meta">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
          <Link to={link} className="project-card__link">
            <span>Explore Case Study & Technical Details</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
