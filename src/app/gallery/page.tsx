'use client'

import { useState } from 'react'

const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80', alt: 'Classic chocolate truffle cake' },
  { src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&q=80', alt: 'Elegant floral wedding cake' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80', alt: 'Artisan cupcakes with buttercream' },
  { src: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=800&q=80', alt: 'Strawberry cloud cake' },
  { src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&q=80', alt: 'Salted caramel layer cake' },
  { src: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80', alt: 'Artisan dessert box with macarons' },
  { src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80', alt: 'Red velvet layer cake' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', alt: 'Vanilla berry celebration cake' },
  { src: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=800&q=80', alt: 'Lemon elderflower cake' },
  { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', alt: 'Mango coconut cake slice' },
  { src: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&q=80', alt: 'French opera cake' },
  { src: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?w=800&q=80', alt: 'White elegance wedding cake' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null))
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null))

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
            Portfolio
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
            Gallery
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            A curated selection of our recent work. Click any image to view it in full. Note: all images shown are illustrative and sourced from Unsplash.
          </p>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section style={{ padding: '3rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            columns: '3',
            columnGap: '1rem',
          }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              style={{
                breakInside: 'avoid',
                marginBottom: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(index)
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.4s ease, opacity 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'
                  ;(e.currentTarget as HTMLImageElement).style.opacity = '0.92'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                  ;(e.currentTarget as HTMLImageElement).style.opacity = '1'
                }}
              />
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .gallery-grid { columns: 2 !important; }
          }
          @media (max-width: 600px) {
            .gallery-grid { columns: 1 !important; }
          }
        `}</style>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(44, 36, 32, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--taupe-light)',
              fontSize: '1.75rem',
              lineHeight: 1,
              cursor: 'pointer',
              zIndex: 101,
            }}
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: '1px solid rgba(250,247,242,0.3)',
              color: 'var(--taupe-light)',
              fontSize: '1.25rem',
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              zIndex: 101,
            }}
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={GALLERY_ITEMS[lightbox].src.replace('w=800', 'w=1200')}
            alt={GALLERY_ITEMS[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {/* Caption */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: 'var(--taupe)', letterSpacing: '0.04em' }}>
              {GALLERY_ITEMS[lightbox].alt}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(196,168,130,0.6)', marginTop: '0.25rem' }}>
              {lightbox + 1} / {GALLERY_ITEMS.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: '1px solid rgba(250,247,242,0.3)',
              color: 'var(--taupe-light)',
              fontSize: '1.25rem',
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              zIndex: 101,
            }}
          >
            &#8594;
          </button>
        </div>
      )}
    </>
  )
}

