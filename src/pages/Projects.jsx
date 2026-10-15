import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import { projectSummaries } from '../data/contentData'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterOptions = [
    { label: 'All Projects', value: 'all', count: projectSummaries.length },
    { label: 'Solar PV Engineering', value: 'solar', count: projectSummaries.filter(p => p.categoryFilter === 'solar').length },
    { label: 'Content Writing & Media', value: 'content', count: projectSummaries.filter(p => p.categoryFilter === 'content').length },
    { label: 'Electrical Distribution', value: 'electrical', count: projectSummaries.filter(p => p.categoryFilter === 'electrical').length }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projectSummaries
    : projectSummaries.filter(p => p.categoryFilter === activeFilter)

  return (
    <div>
      <PageHero
        title="Engineering Projects & Portfolio"
        subtitle="Explore detailed design case studies across commercial solar photovoltaic systems, technical communication samples, and power distribution models."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects' }
        ]}
      />

      <div className="section">
        <div className="container">
          {/* Filter Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '1.25rem'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {filterOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`btn ${activeFilter === option.value ? 'btn--primary' : 'btn--secondary'}`}
                  style={{ fontSize: '0.85rem', padding: '0.45rem 0.9rem' }}
                >
                  {option.label}
                  <span style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.75rem',
                    opacity: activeFilter === option.value ? 0.9 : 0.6
                  }}>
                    ({option.count})
                  </span>
                </button>
              ))}
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>

          {/* Project Grid */}
          <div className="project-grid" style={{ marginBottom: '4rem' }}>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Academic Capstone Feature Section: Smart City Lighting Network */}
          <div id="smart-city-lighting" className="card" style={{ background: 'var(--color-bg)', padding: '2.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge--outline" style={{ marginBottom: '0.5rem' }}>
                  Academic Capstone Project
                </span>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', margin: '0.25rem 0 0.5rem' }}>
                  Smart City LED Street Lighting Network
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  Discipline: Power Distribution & Automated Energy Management • Academic Engineering Project
                </p>
              </div>

              <span className="badge badge--warning">
                Academic Project / Conceptual
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--color-white)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  System Architecture
                </div>
                <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  <li>• 415V Three-Phase, 4-Wire LT power distribution ring</li>
                  <li>• Balanced phase load distribution across municipal sector poles</li>
                  <li>• Permissible voltage drop kept below 3% at furthest luminaire</li>
                </ul>
              </div>

              <div style={{ background: 'var(--color-white)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Automation & Controls
                </div>
                <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  <li>• Photocell ambient light sensors for auto twilight activation</li>
                  <li>• Digital timer relay controllers with multi-step midnight dimming</li>
                  <li>• Achieved estimated 38% energy reduction over legacy HPS lamps</li>
                </ul>
              </div>

              <div style={{ background: 'var(--color-white)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontWeight: '600', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Switchgear & Safety
                </div>
                <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  <li>• Four-pole MCCB main incoming protection with thermal magnetic trip</li>
                  <li>• Individual pole MCB protection to isolate localized luminaire faults</li>
                  <li>• Continuous GI earth wire grounding across all lamp posts</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                Note: This project was conducted as part of academic engineering research.
              </div>
              <Link to="/projects/smart-city-lighting" className="btn btn--primary" style={{ fontSize: '0.85rem' }}>
                Explore Dedicated Smart City Case Study & Calculations →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
