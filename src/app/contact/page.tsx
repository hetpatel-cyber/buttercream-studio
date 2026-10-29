'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) newErrors.message = 'Please enter a message.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello! I have a quick question.\n\nName: ${form.name || '[Not provided]'}\nMessage: ${form.message || '[Not provided]'}`
  )

  return (
    <>
      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--cream)',
          padding: '4rem 1.5rem 3rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              fontWeight: 600,
            }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--charcoal)',
              marginBottom: '1rem',
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Have a question or just want to say hello? We would love to hear from you. For cake orders, please use our Custom Cake form.
          </p>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '0.8125rem',
              color: 'var(--blush-deep)',
              fontWeight: 500,
            }}
          >
            Demo website — all contact details are fictional.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Info */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.375rem',
                color: 'var(--charcoal)',
                marginBottom: '2rem',
              }}
            >
              Studio Information
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Phone */}
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Phone (Demo)
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--cocoa)',
                    fontWeight: 500,
                  }}
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Email (Demo)
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--cocoa)',
                    fontWeight: 500,
                  }}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Address */}
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Studio Location (Demo)
                </p>
                <address
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    fontStyle: 'normal',
                    lineHeight: 1.6,
                  }}
                >
                  {SITE_CONFIG.address}
                </address>
                {/* Map Placeholder */}
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '2rem',
                    backgroundColor: 'var(--taupe-light)',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Map placeholder — Demo website
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Studio Hours (Demo)
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { day: 'Tuesday – Friday', hours: '10:00am – 6:00pm' },
                    { day: 'Saturday', hours: '9:00am – 4:00pm' },
                    { day: 'Sunday & Monday', hours: 'Closed' },
                  ].map((item) => (
                    <div
                      key={item.day}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.625rem 0',
                        borderBottom: '1px solid var(--border)',
                        fontSize: '0.875rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)' }}>{item.day}</span>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  WhatsApp (Demo)
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.625rem 1.5rem',
                    backgroundColor: '#25D366',
                    color: '#fff',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Allergen */}
              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--cream)',
                  border: '1px solid var(--border)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--cocoa)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  Allergen Information
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Our products may contain or come into contact with gluten, dairy, eggs, tree nuts, peanuts, and other allergens. We are not a dedicated allergen-free kitchen. Please inform us of any dietary requirements when ordering.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.375rem',
                color: 'var(--charcoal)',
                marginBottom: '2rem',
              }}
            >
              Send a Message
            </h2>

            {submitted ? (
              <div style={{ padding: '2rem', backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.25rem',
                    color: 'var(--charcoal)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Thank you, {form.name}!
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  This is a demo website — no message has been sent. In a real version of this site, we would respond within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  style={{
                    padding: '0.625rem 1.5rem',
                    backgroundColor: 'var(--cocoa)',
                    color: 'var(--ivory)',
                    border: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Name <span style={{ color: 'var(--blush-deep)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    style={inputStyle(!!errors.name)}
                  />
                  {errors.name && <p id="contact-name-error" style={errorStyle}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    Email <span style={{ color: 'var(--blush-deep)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <p id="contact-email-error" style={errorStyle}>{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" style={labelStyle}>
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle(false)}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" style={labelStyle}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Wedding cake enquiry"
                    style={inputStyle(false)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Message <span style={{ color: 'var(--blush-deep)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    rows={5}
                    placeholder="Your message..."
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical' }}
                  />
                  {errors.message && <p id="contact-message-error" style={errorStyle}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '0.875rem 2rem',
                    backgroundColor: 'var(--cocoa)',
                    color: 'var(--ivory)',
                    border: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Send Message (Demo)
                </button>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  This is a demo site. No message is sent.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'var(--text-primary)',
  marginBottom: '0.5rem',
}

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  display: 'block',
  width: '100%',
  padding: '0.75rem 1rem',
  fontSize: '0.9375rem',
  color: 'var(--text-primary)',
  backgroundColor: 'var(--white)',
  border: `1px solid ${hasError ? 'var(--blush-deep)' : 'var(--border)'}`,
  outline: 'none',
  fontFamily: "'Inter', sans-serif",
})

const errorStyle: React.CSSProperties = {
  marginTop: '0.375rem',
  fontSize: '0.8125rem',
  color: 'var(--blush-deep)',
}

