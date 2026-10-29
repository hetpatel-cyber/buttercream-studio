'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, CATEGORIES } from '@/lib/products'

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory)

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
            The Studio
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
            Our Collection
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Browse our full range of handcrafted cakes, cupcakes, and artisan desserts. All prices shown are illustrative — contact us for a personalised quote.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section
        style={{
          position: 'sticky',
          top: '70px',
          zIndex: 20,
          backgroundColor: 'var(--ivory)',
          borderBottom: '1px solid var(--border)',
          padding: '0 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '0',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                flexShrink: 0,
                padding: '1rem 1.25rem',
                background: 'none',
                border: 'none',
                borderBottom: activeCategory === cat.id ? '2px solid var(--cocoa)' : '2px solid transparent',
                color: activeCategory === cat.id ? 'var(--cocoa)' : 'var(--text-secondary)',
                fontSize: '0.8125rem',
                fontWeight: activeCategory === cat.id ? 600 : 400,
                letterSpacing: '0.03em',
                cursor: 'pointer',
                transition: 'color 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '3rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}
        >
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filtered.map((product) => (
            <article
              key={product.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                  }}
                />
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.375rem',
                    fontWeight: 500,
                  }}
                >
                  {product.category.replace(/-/g, ' ')}
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--charcoal)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {product.name}
                </h2>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                <div style={{ marginBottom: '0.5rem' }}>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--cocoa)',
                    }}
                  >
                    From &#8377;{product.price.toLocaleString('en-IN')}
                  </p>
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {product.priceNote}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--taupe-light)',
                      padding: '0.25rem 0.625rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Serves {product.serves}
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--taupe-light)',
                      padding: '0.25rem 0.625rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {product.leadTime} notice
                  </span>
                </div>

                <Link
                  href={`/custom?cake=${encodeURIComponent(product.name)}`}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'var(--cocoa)',
                    color: 'var(--ivory)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    transition: 'background-color 0.2s',
                  }}
                >
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

