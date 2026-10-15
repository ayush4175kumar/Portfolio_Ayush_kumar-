import { useState } from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'job',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = formData.subject || `Project inquiry from ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Inquiry type: ${formData.inquiryType}`,
      '',
      formData.message
    ].join('\n')
    window.location.href = `mailto:ayushkumar9128750@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        title="Contact & Technical Consultation"
        subtitle="Available for freelance solar PV layout, AutoCAD drafting, and technical documentation projects. Also open to full-time design roles."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Contact' }
        ]}
      />

      <div className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gap: 'var(--space-12)',
            alignItems: 'start'
          }} className="contact-layout">
            {/* Left Column: Direct Contact Info */}
            <div>
              <div className="section-label">Direct Communication</div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Tell Me What You’re Working On
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Send a short project brief, drawing requirements, or role details. I’m based in Sasaram, Bihar, and available for remote collaboration.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {/* Email Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      Email Address
                    </div>
                    <a 
                      href="mailto:ayushkumar9128750@gmail.com" 
                      style={{ fontWeight: '600', color: 'var(--color-blue)', wordBreak: 'break-all' }}
                    >
                      ayushkumar9128750@gmail.com
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                      Typical response within 24 hours
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    💼
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      LinkedIn Profile
                    </div>
                    <a 
                      href="https://linkedin.com/in/ayush-kumar-605990259" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontWeight: '600', color: 'var(--color-blue)' }}
                    >
                      linkedin.com/in/ayush-kumar-605990259 ↗
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                      Connect for endorsements & professional updates
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      Phone & WhatsApp
                    </div>
                    <a 
                      href="tel:+919508725445" 
                      style={{ fontWeight: '600', color: 'var(--color-blue)', fontSize: '1rem' }}
                    >
                      +91 95087 25445
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                      Direct calls & WhatsApp engineering consultations
                    </div>
                  </div>
                </div>

                {/* GitHub Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    💻
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      GitHub Profile
                    </div>
                    <a 
                      href="https://github.com/ayush4175kumar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontWeight: '600', color: 'var(--color-blue)' }}
                    >
                      github.com/ayush4175kumar ↗
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                      Code repositories, web projects & CAD automation
                    </div>
                  </div>
                </div>

                {/* X (Twitter) Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    𝕏
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      X (Twitter) Profile
                    </div>
                    <a 
                      href="https://x.com/AyushKu38914909" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontWeight: '600', color: 'var(--color-blue)' }}
                    >
                      x.com/AyushKu38914909 ↗
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                      Tech discussions, renewable energy & updates
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0
                  }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-secondary)', fontWeight: '600', letterSpacing: '0.05em' }}>
                      Base Location
                    </div>
                    <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>
                      Sasaram, Bihar, India
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      Open to relocation across India & remote international collaborations
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="notice notice--info">
                <strong>Availability:</strong> Open to freelance projects and full-time design roles.
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>
                Send a Direct Message
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                Submitting opens your email app with the details filled in. The message is sent only when you press Send there.
              </p>

              {submitted ? (
                <div style={{
                  padding: '2rem',
                  background: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                  <h4 style={{ color: 'var(--color-success)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
                    Email draft ready
                  </h4>
                  <p style={{ color: 'var(--color-navy)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    Your email app should open with this inquiry addressed to Ayush. Review the draft and press Send. If no email app opens, write directly to <a href="mailto:ayushkumar9128750@gmail.com">ayushkumar9128750@gmail.com</a>.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', inquiryType: 'solar', subject: '', message: '' })
                    }}
                    className="btn btn--secondary"
                    style={{ fontSize: '0.875rem' }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="e.g. Ayush kumar"
                        value={formData.name} 
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.875rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="you@company.com"
                        value={formData.email} 
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.875rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        Inquiry Category
                      </label>
                      <select 
                        name="inquiryType" 
                        value={formData.inquiryType} 
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.875rem',
                          fontFamily: 'inherit',
                          backgroundColor: 'var(--color-white)'
                        }}
                      >
                        <option value="solar">Solar PV System Design / SLD</option>
                        <option value="autocad">AutoCAD 2D Drafting Freelance</option>
                        <option value="content">Technical & SEO Content Writing</option>
                        <option value="job">Full-Time Design Engineer Role</option>
                        <option value="other">General Engineering Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                        Subject / Project Title
                      </label>
                      <input 
                        type="text" 
                        name="subject" 
                        placeholder="e.g. 50kW Rooftop SLD Request"
                        value={formData.subject} 
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.875rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.35rem', color: 'var(--color-navy)' }}>
                      Project Specifications / Message *
                    </label>
                    <textarea 
                      name="message" 
                      required 
                      rows="5"
                      placeholder="Please describe your requirements, project scope, timeline, or job specifications..."
                      value={formData.message} 
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.875rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn--primary" 
                    style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                  >
                    Open email app to send inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
