import { Link } from 'react-router-dom'
import ayushPhoto from '../assets/ayush-photo.jpg'
import PageHero from '../components/PageHero'
import { contentSamples } from '../data/contentData'

export default function ContentWritingProject() {
  const { seoArticle, socialPost, videoScript, toolsUsed } = contentSamples

  return (
    <div>
      <PageHero
        title="Technical & SEO Content Writing Portfolio"
        subtitle="A showcase of digital communication assets: search-intent optimized buying guides, audience retention copywriting, and paced vertical video scriptwriting."
        badge="Self-Initiated Portfolio Samples"
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: 'Content Writing' }
        ]}
      />

      <div className="section">
        <div className="container">
          {/* Portfolio Scope Banner */}
          <div className="notice notice--info" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong>Portfolio Demonstration Notice:</strong> The three pieces below demonstrate practical versatility across commercial SEO articles, social media copywriting, and short-form video scripting.
              </div>
              <Link to="/contact" className="btn btn--secondary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
                Discuss Content Collaboration ↗
              </Link>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="detail-hero-banner">
            <img 
              src="/images/technical-content-writing.jpg" 
              alt="Technical and SEO Content Writing Editorial Workspace" 
            />
            <span className="detail-hero-caption">
              Creative & editorial workspace visualization
            </span>
          </div>

          {/* Quick Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Content Formats
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-blue)', margin: '0.25rem 0' }}>
                3 Modalities
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                SEO, Social, Video Script
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Search Intent
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.4rem 0' }}>
                Commercial Inv.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                High Buyer Relevance
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Video Format
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--color-success)', margin: '0.25rem 0' }}>
                60s Timed
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                9:16 Shorts / Reels Format
              </div>
            </div>

            <div className="card" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600' }}>
                Workflow Partner
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-navy)', margin: '0.4rem 0' }}>
                AI-Augmented
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                ChatGPT Research & Outlining
              </div>
            </div>
          </div>

          {/* ========================================================================
             SAMPLE 1: SEO Tech Article
             ======================================================================== */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-label">Sample Piece 01 • Search Engine Optimization</div>
            <h2 className="section-title">Commercial SEO Buying Guide</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Structured to capture organic buyer queries during mid-funnel research, balancing technical driver comparisons with reader readability.
            </p>

            {/* Meta Bar */}
            <div className="content-meta-grid">
              <div className="content-meta-item">
                <span className="content-meta-label">Content Type</span>
                <span className="content-meta-value">{seoArticle.contentType}</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Primary Target Keyword</span>
                <span className="content-meta-value" style={{ color: 'var(--color-blue)' }}>"{seoArticle.primaryKeyword}"</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Search Intent</span>
                <span className="content-meta-value">{seoArticle.searchIntent}</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Target Audience</span>
                <span className="content-meta-value">{seoArticle.targetAudience}</span>
              </div>
            </div>

            {/* Article Content Viewer */}
            <div className="article-preview-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge--outline">SEO Article Draft</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Target Word Count: 850+ words</span>
              </div>

              <h3>{seoArticle.title}</h3>
              <p className="intro-lead">{seoArticle.introduction}</p>

              {seoArticle.sections.map((section, idx) => (
                <div key={idx} className="article-section-item">
                  <h4>{section.heading}</h4>
                  <p>{section.content}</p>
                </div>
              ))}

              <div style={{
                background: 'var(--color-bg)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--color-blue)',
                marginTop: '1.5rem',
                fontSize: '0.875rem'
              }}>
                <strong>Author Takeaway:</strong> {seoArticle.takeaway}
              </div>
            </div>
          </div>

          {/* ========================================================================
             SAMPLE 2: Social Media Post
             ======================================================================== */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-label">Sample Piece 02 • Audience Retention & Social Copy</div>
            <h2 className="section-title">Professional Social Copywriting</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Engineered with hook mechanics, generous white space, and modular value delivery to maximize mobile reader dwell time.
            </p>

            <div className="tips-grid">
              {socialPost.tips.map((tip, idx) => (
                <div key={idx} className="tip-card">
                  <div className="tip-card__number">{tip.number}</div>
                  <div className="tip-card__title">{tip.title}</div>
                  <div className="tip-card__detail">{tip.detail}</div>
                </div>
              ))}
            </div>

            {/* Social Post Feed Preview Box */}
            <div style={{ marginTop: '2.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-navy)', marginBottom: '1rem', textAlign: 'center' }}>
                Feed Simulator (LinkedIn / Social Post Preview)
              </h4>

              <div className="social-post-card">
                <div className="social-post-author">
                  <img 
                    src={ayushPhoto} 
                    alt="Ayush Kumar" 
                    className="social-avatar"
                    onError={(e) => { e.currentTarget.src = '/ayush-photo.jpg' }}
                  />
                  <div className="social-author-info">
                    <span className="social-author-name">Ayush Kumar</span>
                    <span className="social-author-role">Design Engineer • B.Tech Electrical Engineering</span>
                  </div>
                </div>

                <div className="social-post-content">
                  <p style={{ fontWeight: '600', marginBottom: '0.75rem', color: 'var(--color-navy)' }}>
                    {socialPost.title} 👇
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    Writing online isn't about using complex vocabulary to sound smart. It's about taking nuanced ideas and making them effortless for someone to understand in 30 seconds.
                  </p>
                  <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {socialPost.tips.map((t, idx) => (
                      <li key={idx}><strong>{t.title}</strong> — {t.detail}</li>
                    ))}
                  </ol>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                    {socialPost.captionSnippet}
                  </p>
                </div>

                <div className="social-hashtags">
                  {socialPost.hashtags.map((tag, idx) => (
                    <span key={idx} className="social-hashtag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================
             SAMPLE 3: Video Script
             ======================================================================== */}
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-label">Sample Piece 03 • Video Storyboarding & Scripting</div>
            <h2 className="section-title">60-Second Short-Form Video Script</h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Paced second-by-second timeline for YouTube Shorts or Instagram Reels, coordinating visual cues, b-roll directions, and precise spoken narration.
            </p>

            <div className="content-meta-grid">
              <div className="content-meta-item">
                <span className="content-meta-label">Format / Platform</span>
                <span className="content-meta-value">{videoScript.contentType}</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Exact Runtime</span>
                <span className="content-meta-value" style={{ color: 'var(--color-blue)' }}>{videoScript.runtime}</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Aspect Ratio</span>
                <span className="content-meta-value">{videoScript.aspectRatio}</span>
              </div>
              <div className="content-meta-item">
                <span className="content-meta-label">Core Takeaway</span>
                <span className="content-meta-value">{videoScript.keyMessage}</span>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="script-table">
                <thead>
                  <tr>
                    <th style={{ width: '130px' }}>Timing</th>
                    <th style={{ width: '160px' }}>Scene & Phase</th>
                    <th style={{ width: '38%' }}>Visual Cue / On-Screen Action</th>
                    <th>Audio Narration / Spoken Dialogue</th>
                  </tr>
                </thead>
                <tbody>
                  {videoScript.timeline.map((beat, idx) => (
                    <tr key={idx}>
                      <td>
                        <span className="script-time-badge">{beat.timestamp}</span>
                      </td>
                      <td>
                        <span className="script-phase-title">{beat.phase}</span>
                      </td>
                      <td>
                        <div className="script-visual-note">
                          🎬 {beat.visual}
                        </div>
                      </td>
                      <td>
                        <div className="script-narration-text">
                          "{beat.narration}"
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================================
             Tools & Strategy Methodology
             ======================================================================== */}
          <div className="card" style={{ background: 'var(--color-bg)', padding: '2rem', marginBottom: '3.5rem' }}>
            <div className="section-label">Toolkit & AI-Assisted Workflow</div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              How I Blend Engineering Rigor With Content Creation
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Engineers often struggle to articulate their work, while generic writers often lack technical depth. My background in electrical engineering enables me to audit technical specs accurately, while leveraging modern AI tools to accelerate ideation, verify grammar, and design clean visual formats.
            </p>

            <div className="tools-showcase-grid">
              {toolsUsed.map((tool, idx) => (
                <div key={idx} className="tool-showcase-card">
                  <div className="tool-name">{tool.name}</div>
                  <div className="tool-role">{tool.role}</div>
                </div>
              ))}
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
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Explore Engineering Case Study:</div>
              <Link to="/projects/commercial-rooftop-solar-pv" style={{ fontWeight: '600', color: 'var(--color-navy)', fontSize: '1.1rem' }}>
                ← 119.6 kWp Commercial Solar PV Design
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Hire for Content or Design →
              </Link>
              <Link to="/projects" className="btn btn--secondary">
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
