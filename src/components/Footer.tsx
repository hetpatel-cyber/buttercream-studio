import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--charcoal)',
        color: 'var(--taupe-light)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        marginTop: '6rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(196, 168, 130, 0.2)',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--taupe)',
                marginBottom: '0.75rem',
              }}
            >
              The Buttercream Studio
            </h3>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(232, 221, 208, 0.7)',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
              }}
            >
              {SITE_CONFIG.tagline}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--taupe)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--taupe)',
                  paddingBottom: '1px',
                }}
              >
                Instagram
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--taupe)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--taupe)',
                  paddingBottom: '1px',
                }}
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                marginBottom: '1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Navigate
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/collection', label: 'Collection' },
                { href: '/custom', label: 'Custom Cakes' },
                { href: '/about', label: 'About' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(232, 221, 208, 0.7)',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                marginBottom: '1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Contact (Demo)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{ fontSize: '0.875rem', color: 'rgba(232, 221, 208, 0.7)' }}
              >
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                style={{ fontSize: '0.875rem', color: 'rgba(232, 221, 208, 0.7)' }}
              >
                {SITE_CONFIG.email}
              </a>
              <address
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(232, 221, 208, 0.7)',
                  fontStyle: 'normal',
                  lineHeight: 1.5,
                }}
              >
                {SITE_CONFIG.address}
              </address>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                marginBottom: '1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Studio Hours (Demo)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { day: 'Tuesday – Friday', hours: '10am – 6pm' },
                { day: 'Saturday', hours: '9am – 4pm' },
                { day: 'Sunday – Monday', hours: 'Closed' },
              ].map((item) => (
                <div key={item.day}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--taupe)', marginBottom: '0.125rem' }}>
                    {item.day}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(232, 221, 208, 0.7)' }}>
                    {item.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              color: 'rgba(196, 168, 130, 0.6)',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: 'var(--taupe)' }}>Allergen Notice (Demo):</strong> Our products may contain or come into contact with gluten, dairy, eggs, nuts, and other allergens. This is a fictional demo website — no real orders can be placed.
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'rgba(196, 168, 130, 0.4)',
            }}
          >
            &copy; {currentYear} The Buttercream Studio — Demo / Portfolio Website. All prices are illustrative only.
          </p>
        </div>
      </div>
    </footer>
  )
}

