'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/products'
import { SITE_CONFIG } from '@/lib/config'

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
  'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=600&q=80',
  'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80',
  'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&q=80',
]

const FLAVOURS = [
  'Belgian Dark Chocolate', 'Madagascar Vanilla', 'Salted Caramel', 'Alphonso Mango',
  'Strawberry Compote', 'Lemon Elderflower', 'Rose Lychee', 'Earl Grey',
  'Brown Butter', 'Coffee Espresso', 'Red Velvet', 'Coconut Cream',
]

const FAQS = [
  {
    q: 'How far in advance should I place my order?',
    a: 'We recommend at least 3–5 days for celebration cakes and 7–14 days for wedding and custom tiered cakes. During peak seasons (December, Valentine\'s Day, Diwali), we suggest booking 2–3 weeks ahead.',
  },
  {
    q: 'Are your prices fixed?',
    a: 'All prices shown are illustrative and subject to change based on size, flavour complexity, and decoration. We provide a firm quote after discussing your requirements. This is a demo website — no real orders can be placed.',
  },
  {
    q: 'Do you accommodate dietary requirements?',
    a: 'We offer eggless variants for many of our cakes. We are not a dedicated allergen-free kitchen — our products may contain or come into contact with gluten, dairy, eggs, and nuts.',
  },
  {
    q: 'Do you deliver?',
    a: 'We offer delivery within select Mumbai areas for an additional fee. Collection from our studio is also available. Please confirm delivery details when placing your enquiry.',
  },
  {
    q: 'Can I customise any cake?',
    a: 'Almost everything can be customised — flavour, size, design, colour palette, and toppers. Fill in our Custom Cake enquiry form to share your vision and we will get back to you within 24 hours.',
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const featuredProducts = PRODUCTS.slice(0, 3)

  return (
    <>
      {/* Announcement Bar */}
      <div
        style={{
          backgroundColor: 'var(--cocoa)',
          color: 'var(--taupe-light)',
          textAlign: 'center',
          padding: '0.625rem 1rem',
          fontSize: '0.75rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        Demo Website — For Portfolio Purposes Only — Not a Real Business
      </div>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: 'calc(100vh - 70px)', minHeight: '600px', maxHeight: '900px' }}>
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80"
          alt="Artisan chocolate layer cake"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(44, 36, 32, 0.72) 0%, rgba(44, 36, 32, 0.35) 60%, rgba(44, 36, 32, 0.1) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <p
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              Artisan Cake Studio — Mumbai
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                color: '#FAF7F2',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Cakes that tell<br />
              <em style={{ fontStyle: 'italic' }}>your story.</em>
            </h1>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'rgba(250, 247, 242, 0.85)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '440px',
              }}
            >
              {SITE_CONFIG.tagline} Handcrafted celebration cakes, custom creations, and artisan desserts made with intention.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/collection"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2rem',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--cocoa)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  transition: 'background-color 0.2s',
                }}
              >
                View Collection
              </Link>
              <Link
                href="/custom"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2rem',
                  backgroundColor: 'transparent',
                  color: 'var(--ivory)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(250, 247, 242, 0.5)',
                  transition: 'border-color 0.2s',
                }}
              >
                Order Custom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes - Editorial Layout */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
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
            Signature Cakes
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--charcoal)',
            }}
          >
            A few of our favourites
          </h2>
        </div>

        {/* Asymmetric editorial grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            gap: '1.5rem',
          }}
        >
          {/* Large feature */}
          <div
            style={{
              gridColumn: 'span 7',
              gridRow: 'span 2',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={featuredProducts[0].image}
              alt={featuredProducts[0].name}
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(44,36,32,0.85) 0%, transparent 60%)',
                padding: '2rem',
              }}
            >
              <p style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                {featuredProducts[0].category}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: 'var(--ivory)',
                  marginBottom: '0.5rem',
                }}
              >
                {featuredProducts[0].name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.8)', marginBottom: '1rem', maxWidth: '360px' }}>
                {featuredProducts[0].description}
              </p>
              <Link
                href="/collection"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--taupe)',
                  borderBottom: '1px solid var(--taupe)',
                  paddingBottom: '1px',
                }}
              >
                Enquire
              </Link>
            </div>
          </div>

          {/* Smaller right cards */}
          {[featuredProducts[1], featuredProducts[2]].map((product) => (
            <div
              key={product.id}
              style={{
                gridColumn: 'span 5',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.25rem 0' }}>
                <p style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>
                  {product.category}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1875rem',
                    color: 'var(--charcoal)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            href="/collection"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              border: '1px solid var(--cocoa)',
              color: 'var(--cocoa)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            View Full Collection
          </Link>
        </div>
      </section>

      {/* Custom Cake Feature — Full Width */}
      <section
        style={{
          backgroundColor: 'var(--cocoa)',
          padding: '5rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--taupe)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}
            >
              Custom Creations
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 600,
                color: 'var(--ivory)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Your vision,<br />
              <em style={{ fontStyle: 'italic' }}>our craft.</em>
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(250, 247, 242, 0.75)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '440px',
              }}
            >
              From intimate birthdays to grand weddings, every custom cake begins with a conversation. Share your story, your colours, your flavours — we will bring it to life with meticulous care.
            </p>
            <Link
              href="/custom"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                backgroundColor: 'var(--ivory)',
                color: 'var(--cocoa)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Start Your Custom Order
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80"
              alt="Elegant floral wedding cake"
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

      {/* Flavours */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
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
              Our Flavour Palette
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: 'var(--charcoal)',
                marginBottom: '1.5rem',
              }}
            >
              Crafted from the finest ingredients
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              We source premium Belgian couverture, single-origin vanilla, and seasonal fruits to create flavours that are complex, balanced, and memorable.
            </p>
          </div>
          <div>
            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
              }}
            >
              {FLAVOURS.map((flavour, index) => (
                <li
                  key={flavour}
                  style={{
                    padding: '0.875rem 0',
                    borderBottom: '1px solid var(--border)',
                    borderRight: index % 2 === 0 ? '1px solid var(--border)' : 'none',
                    paddingRight: index % 2 === 0 ? '1.5rem' : '0',
                    paddingLeft: index % 2 !== 0 ? '1.5rem' : '0',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                  }}
                >
                  {flavour}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        style={{
          backgroundColor: 'var(--cream)',
          padding: '5rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div style={{ order: 2 }}>
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
              About the Baker
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: 'var(--charcoal)',
                marginBottom: '1.5rem',
              }}
            >
              Made with intention,<br />served with love.
            </h2>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              Hi, I am Priya Mehta — pastry chef, flavour obsessive, and founder of The Buttercream Studio. After years of training in Paris and working in hotel patisserie kitchens across India, I started this studio to bring the craft of fine patisserie to everyday celebrations.
            </p>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Every cake is made to order, by hand, with ingredients I trust. No shortcuts, no artificial flavours — just honest, beautiful baking.
            </p>
            <Link
              href="/about"
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--cocoa)',
                borderBottom: '1px solid var(--cocoa)',
                paddingBottom: '2px',
                fontWeight: 600,
              }}
            >
              Read My Story
            </Link>
          </div>
          <div style={{ order: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=800&q=80"
              alt="Baker at work"
              style={{
                width: '100%',
                height: '460px',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px', marginBottom: '4rem' }}>
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
            The Process
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--charcoal)',
            }}
          >
            How to place an order
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0',
          }}
        >
          {[
            {
              number: '01',
              title: 'Submit an Enquiry',
              text: 'Tell us about your occasion — date, number of guests, flavour preferences, and any design inspiration. Use our online form or send a WhatsApp message.',
            },
            {
              number: '02',
              title: 'Design & Quote',
              text: 'We review your request and come back to you within 24 hours with design suggestions and a detailed, itemised quote. No obligation.',
            },
            {
              number: '03',
              title: 'Confirm & Create',
              text: 'Once you approve the quote, a 50% deposit secures your date. We then hand-craft your cake and deliver or prepare it for collection.',
            },
          ].map((step, index) => (
            <div
              key={step.number}
              style={{
                padding: '2.5rem 2rem',
                borderLeft: index === 0 ? '1px solid var(--border)' : 'none',
                borderRight: '1px solid var(--border)',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '3rem',
                  fontWeight: 400,
                  color: 'var(--taupe)',
                  lineHeight: 1,
                  marginBottom: '1.25rem',
                }}
              >
                {step.number}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--charcoal)',
                  marginBottom: '0.75rem',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '0 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <p
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem',
                fontWeight: 600,
              }}
            >
              Gallery
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--charcoal)',
              }}
            >
              A glimpse of our work
            </h2>
          </div>
          <Link
            href="/gallery"
            style={{
              fontSize: '0.8125rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--cocoa)',
              borderBottom: '1px solid var(--cocoa)',
              paddingBottom: '2px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            View All
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
          }}
        >
          {GALLERY_IMAGES.map((src, index) => (
            <Link key={index} href="/gallery" style={{ display: 'block', overflow: 'hidden' }}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                style={{
                  width: '100%',
                  height: index < 3 ? '260px' : '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          backgroundColor: 'var(--cream)',
          padding: '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
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
            Frequently Asked
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--charcoal)',
              marginBottom: '3rem',
            }}
          >
            Common questions
          </h2>

          <div>
            {FAQS.map((faq, index) => (
              <div
                key={index}
                style={{
                  borderTop: '1px solid var(--border)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--charcoal)',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--cocoa)',
                      flexShrink: 0,
                      transform: openFaq === index ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: openFaq === index ? '300px' : '0',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.8,
                      paddingBottom: '1.5rem',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '7rem 1.5rem',
          textAlign: 'center',
          backgroundColor: 'var(--ivory)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
            Let&apos;s begin
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--charcoal)',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}
          >
            Ready to begin?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Share your vision with us and we&apos;ll craft something truly beautiful for your occasion.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/custom"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                backgroundColor: 'var(--cocoa)',
                color: 'var(--ivory)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Order a Custom Cake
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '0.875rem 2.5rem',
                border: '1px solid var(--cocoa)',
                color: 'var(--cocoa)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
