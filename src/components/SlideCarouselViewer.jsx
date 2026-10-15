import { useState } from 'react'

export default function SlideCarouselViewer({ slides = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  if (!slides || slides.length === 0) return null

  const slide = slides[currentIdx]
  const total = slides.length

  const goToNext = () => {
    setCurrentIdx((prev) => (prev + 1) % total)
  }

  const goToPrev = () => {
    setCurrentIdx((prev) => (prev - 1 + total) % total)
  }

  return (
    <div className="carousel-viewer">
      <div className="carousel-viewer__header">
        <div className="carousel-viewer__counter">
          <span className="carousel-viewer__badge">Canva Design Spec</span>
          <span>Slide {currentIdx + 1} of {total}</span>
        </div>
        <div className="carousel-viewer__dots" role="tablist" aria-label="Slide navigation">
          {slides.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot ${idx === currentIdx ? 'carousel-dot--active' : ''}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              aria-selected={idx === currentIdx}
            />
          ))}
        </div>
      </div>

      <div className="carousel-viewer__stage">
        <div className="carousel-slide-card">
          <div className="carousel-slide-card__top">
            <span className="carousel-slide-card__tag">{slide.tag}</span>
            <span className="carousel-slide-card__num">{slide.slideNo}</span>
          </div>

          <h3 className="carousel-slide-card__headline">{slide.headline}</h3>

          {slide.subhead && (
            <p className="carousel-slide-card__subhead">{slide.subhead}</p>
          )}

          {slide.body && (
            <p className="carousel-slide-card__body">{slide.body}</p>
          )}

          {slide.bullets && slide.bullets.length > 0 && (
            <ul className="carousel-slide-card__bullets">
              {slide.bullets.map((b, bIdx) => (
                <li key={bIdx}>
                  <span className="bullet-check">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {slide.actionableTip && (
            <div className="carousel-slide-card__tip">
              <span className="tip-icon">⚡</span>
              <div>
                <strong>Key Takeaway:</strong> {slide.actionableTip}
              </div>
            </div>
          )}

          {slide.visualNote && (
            <div className="carousel-slide-card__visual-note">
              <strong>Art Direction:</strong> {slide.visualNote}
            </div>
          )}

          <div className="carousel-slide-card__footer">
            <span className="carousel-slide-card__badge-pill">
              {slide.badge || 'Swipe Next →'}
            </span>
            {slide.callToAction && (
              <span className="carousel-slide-card__cta-text">
                {slide.callToAction}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="carousel-viewer__controls">
        <button
          type="button"
          onClick={goToPrev}
          className="btn btn--secondary carousel-nav-btn"
          aria-label="Previous Slide"
        >
          ← Previous Slide
        </button>
        <span className="carousel-viewer__step-label">
          {currentIdx + 1} / {total}
        </span>
        <button
          type="button"
          onClick={goToNext}
          className="btn btn--primary carousel-nav-btn"
          aria-label="Next Slide"
        >
          Next Slide →
        </button>
      </div>
    </div>
  )
}
