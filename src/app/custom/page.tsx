
'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/config'

const FLAVOUR_OPTIONS = [
  'Belgian Dark Chocolate',
  'Madagascar Vanilla',
  'Salted Caramel',
  'Red Velvet',
  'Strawberry',
  'Lemon Elderflower',
  'Coffee & Espresso',
  'Mango Coconut',
  'Rose Lychee',
  'Earl Grey',
  'Other / Discuss',
]

interface FormData {
  name: string
  phone: string
  email: string
  occasion: string
  flavour: string
  servings: string
  designRequirements: string
  referenceImageUrl: string
  date: string
  deliveryPreference: string
  budget: string
  allergens: string
  message: string
}

function CustomPageContent() {
  const searchParams = useSearchParams()
  const prefilledCake = searchParams.get('cake') || ''

  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    occasion: prefilledCake,
    flavour: '',
    servings: '',
    designRequirements: '',
    referenceImageUrl: '',
    date: '',
    deliveryPreference: '',
    budget: '',
    allergens: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!form.phone.trim() || !/^[+\d\s\-()]{7,15}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone / WhatsApp number.'
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.occasion) newErrors.occasion = 'Please describe the occasion or cake type.'
    if (!form.date) newErrors.date = 'Please provide the event date.'
    else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (new Date(form.date) < today) newErrors.date = 'Please select a future date.'
    }
    if (!form.servings) newErrors.servings = 'Please provide the approximate number of servings.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello! I'd like to enquire about a custom cake.\n\nName: ${form.name || '[Not provided]'}\nPhone: ${form.phone || '[Not provided]'}\nOccasion / Cake Type: ${form.occasion || '[Not provided]'}\nFlavour: ${form.flavour || '[Not provided]'}\nServings: ${form.servings || '[Not provided]'}\nDate: ${form.date || '[Not provided]'}\nDelivery: ${form.deliveryPreference || '[Not specified]'}\nBudget: ${form.budget || '[Not provided]'}\nDesign: ${form.designRequirements || '[None]'}\nNotes: ${form.message || '[None]'}`
  )

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '560px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1rem',
              fontWeight: 600,
            }}
          >
            Demo Form — No Data Sent
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '2.25rem',
              color: 'var(--charcoal)',
              marginBottom: '1.5rem',
            }}
          >
            Thank you, {form.name}!
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}
          >
            This is a demo website — no enquiry has been submitted or will be processed. In a real version of this site, we would respond within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              padding: '0.75rem 2rem',
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
            Start Again
          </button>
        </div>
      </div>
    )
  }

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
            Bespoke Cakes
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
            Order a Custom Cake
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Every custom order begins with a conversation. Fill in the form below to share your vision and we will be in touch within 24 hours.
          </p>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '0.8125rem',
              color: 'var(--blush-deep)',
              fontWeight: 500,
            }}
          >
            Demo website — this form does not submit any real data.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: '1200px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
          {[
            { num: '01', title: 'Fill the form', desc: 'Share your occasion details, flavour preferences, and any design inspiration.' },
            { num: '02', title: 'We reply in 24h', desc: 'We review your request and send a design brief and quote.' },
            { num: '03', title: 'Approve & deposit', desc: 'Confirm the quote and pay a 50% deposit to secure your date.' },
            { num: '04', title: 'Collection or delivery', desc: 'We create your cake and arrange collection or delivery.' },
          ].map((step) => (
            <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: 'var(--taupe)',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--charcoal)',
                    marginBottom: '0.375rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Summary */}
      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                color: 'var(--charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              Your Enquiry
            </h2>

            {/* Name */}
            <div>
              <label htmlFor="name" style={labelStyle}>
                Full Name <span style={{ color: 'var(--blush-deep)' }}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="e.g. Priya Sharma"
                style={inputStyle(!!errors.name)}
              />
              {errors.name && <p id="name-error" style={errorStyle}>{errors.name}</p>}
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label htmlFor="phone" style={labelStyle}>
                Mobile / WhatsApp Number <span style={{ color: 'var(--blush-deep)' }}>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="+91 98765 43210"
                style={inputStyle(!!errors.phone)}
              />
              {errors.phone && <p id="phone-error" style={errorStyle}>{errors.phone}</p>}
            </div>

            {/* Email (optional) */}
            <div>
              <label htmlFor="email" style={labelStyle}>
                Email <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="priya@example.com"
                style={inputStyle(!!errors.email)}
              />
              {errors.email && <p id="email-error" style={errorStyle}>{errors.email}</p>}
            </div>

            {/* Occasion / Cake Type */}
            <div>
              <label htmlFor="occasion" style={labelStyle}>
                Occasion / Cake Type <span style={{ color: 'var(--blush-deep)' }}>*</span>
              </label>
              <input
                id="occasion"
                name="occasion"
                type="text"
                value={form.occasion}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.occasion ? 'occasion-error' : undefined}
                placeholder="e.g. Birthday, Wedding, Anniversary"
                style={inputStyle(!!errors.occasion)}
              />
              {errors.occasion && <p id="occasion-error" style={errorStyle}>{errors.occasion}</p>}
            </div>

            {/* Flavour */}
            <div>
              <label htmlFor="flavour" style={labelStyle}>
                Preferred Flavour
              </label>
              <select
                id="flavour"
                name="flavour"
                value={form.flavour}
                onChange={handleChange}
                style={inputStyle(false)}
              >
                <option value="">Select a flavour...</option>
                {FLAVOUR_OPTIONS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Servings */}
            <div>
              <label htmlFor="servings" style={labelStyle}>
                Approximate Size / Number of Servings <span style={{ color: 'var(--blush-deep)' }}>*</span>
              </label>
              <input
                id="servings"
                name="servings"
                type="text"
                value={form.servings}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.servings ? 'servings-error' : undefined}
                placeholder="e.g. 1 kg / 20–25 guests"
                style={inputStyle(!!errors.servings)}
              />
              {errors.servings && <p id="servings-error" style={errorStyle}>{errors.servings}</p>}
            </div>

            {/* Design Requirements */}
            <div>
              <label htmlFor="designRequirements" style={labelStyle}>
                Design Requirements
              </label>
              <textarea
                id="designRequirements"
                name="designRequirements"
                value={form.designRequirements}
                onChange={handleChange}
                rows={3}
                placeholder="Describe colours, theme, tiers, toppers, inscriptions..."
                style={{ ...inputStyle(false), resize: 'vertical', minHeight: '90px' }}
              />
            </div>

            {/* Reference Image URL */}
            <div>
              <label htmlFor="referenceImageUrl" style={labelStyle}>
                Reference Image URL <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                id="referenceImageUrl"
                name="referenceImageUrl"
                type="url"
                value={form.referenceImageUrl}
                onChange={handleChange}
                placeholder="https://pinterest.com/your-inspiration"
                style={inputStyle(false)}
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" style={labelStyle}>
                Event / Required Date <span style={{ color: 'var(--blush-deep)' }}>*</span>
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.date ? 'date-error' : undefined}
                style={inputStyle(!!errors.date)}
              />
              {errors.date && <p id="date-error" style={errorStyle}>{errors.date}</p>}
            </div>

            {/* Delivery / Pickup */}
            <div>
              <label htmlFor="deliveryPreference" style={labelStyle}>
                Pickup or Delivery
              </label>
              <select
                id="deliveryPreference"
                name="deliveryPreference"
                value={form.deliveryPreference}
                onChange={handleChange}
                style={inputStyle(false)}
              >
                <option value="">Select preference...</option>
                <option value="Pickup from Studio">Pickup from Studio (Bandra West)</option>
                <option value="Delivery – Mumbai">Delivery – Mumbai area (fee applies)</option>
                <option value="Discuss">Discuss at enquiry stage</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" style={labelStyle}>
                Budget Range (INR)
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                style={inputStyle(false)}
              >
                <option value="">Select a range...</option>
                <option value="Under ₹1,500">Under ₹1,500</option>
                <option value="₹1,500 – ₹3,000">₹1,500 – ₹3,000</option>
                <option value="₹3,000 – ₹6,000">₹3,000 – ₹6,000</option>
                <option value="₹6,000 – ₹12,000">₹6,000 – ₹12,000</option>
                <option value="₹12,000+">₹12,000+</option>
                <option value="Discuss">Happy to discuss</option>
              </select>
            </div>

            {/* Allergens */}
            <div>
              <label htmlFor="allergens" style={labelStyle}>
                Allergen / Dietary Requirements
              </label>
              <input
                id="allergens"
                name="allergens"
                type="text"
                value={form.allergens}
                onChange={handleChange}
                placeholder="e.g. Eggless preferred, Nut-free environment"
                style={inputStyle(false)}
              />
              <p style={{ marginTop: '0.375rem', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                We are not a dedicated allergen-free kitchen. Our products may contain gluten, dairy, eggs, and nuts.
              </p>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="message" style={labelStyle}>
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Anything else — delivery address, preferred collection time, special requests..."
                style={{ ...inputStyle(false), resize: 'vertical', minHeight: '100px' }}
              />
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
                transition: 'background-color 0.2s',
              }}
            >
              Submit Enquiry (Demo)
            </button>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              This is a demo website. No real enquiry is submitted. For real orders, please use the WhatsApp link below.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '0.875rem 2rem',
                backgroundColor: '#25D366',
                color: '#fff',
                border: 'none',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Or Chat on WhatsApp (Demo)
            </a>
          </form>

          {/* Live Summary Panel */}
          <aside>
            <div
              style={{
                position: 'sticky',
                top: '100px',
                padding: '2rem',
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--border)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.125rem',
                  color: 'var(--charcoal)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                Enquiry Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: 'Name', value: form.name },
                  { label: 'Phone / WhatsApp', value: form.phone },
                  { label: 'Email', value: form.email },
                  { label: 'Occasion / Cake Type', value: form.occasion },
                  { label: 'Flavour', value: form.flavour },
                  { label: 'Servings / Size', value: form.servings },
                  { label: 'Design Requirements', value: form.designRequirements },
                  { label: 'Reference Image', value: form.referenceImageUrl },
                  { label: 'Event Date', value: form.date },
                  { label: 'Delivery Preference', value: form.deliveryPreference },
                  { label: 'Budget', value: form.budget },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '0.125rem',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: item.value ? 'var(--charcoal)' : 'var(--text-muted)',
                        fontStyle: item.value ? 'normal' : 'italic',
                      }}
                    >
                      {item.value || 'Not provided'}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  We typically respond within 24 hours on business days. For urgent enquiries, please use WhatsApp.
                </p>
              </div>
            </div>
          </aside>
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
  letterSpacing: '0.01em',
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
  transition: 'border-color 0.2s',
})

const errorStyle: React.CSSProperties = {
  marginTop: '0.375rem',
  fontSize: '0.8125rem',
  color: 'var(--blush-deep)',
}

export default function CustomPage() {
  return (
    <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>}>
      <CustomPageContent />
    </Suspense>
  )
}

