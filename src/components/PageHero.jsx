import { Link } from 'react-router-dom'

export default function PageHero({ title, subtitle, badge, breadcrumb = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumb.length > 0 && (
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1
              return (
                <span key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  {item.to && !isLast ? (
                    <Link to={item.to}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {!isLast && <span>/</span>}
                </span>
              )
            })}
          </nav>
        )}

        {badge && (
          <div style={{ marginBottom: '0.75rem' }}>
            <span className="badge">{badge}</span>
          </div>
        )}

        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
