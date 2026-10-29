import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About the Baker',
  description: 'Meet Priya Mehta, pastry chef and founder of The Buttercream Studio — an artisan cake studio in Mumbai.',
}

export default function AboutPage() {
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
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--charcoal)',
            }}
          >
            About the Baker
          </h1>
        </div>
      </section>

      {/* Baker Story */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=800&q=80"
              alt="Baker at work"
              style={{
                width: '100%',
                height: '560px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                color: 'var(--charcoal)',
                marginBottom: '0.5rem',
              }}
            >
              Priya Mehta
            </h2>
            <p
              style={{
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                fontWeight: 500,
              }}
            >
              Founder &amp; Head Pastry Chef
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                Growing up in a household where celebrations always revolved around food, I developed an early obsession with the craft of baking. My grandmother&apos;s kitchen — fragrant with cardamom and caramelising sugar — was where I first understood that a cake is not just a dessert. It is a memory made edible.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                After completing my culinary training at Le Cordon Bleu Paris, I returned to Mumbai and spent several years working in the patisserie departments of five-star hotels, honing the technical skills that underpin everything we create at the studio. In 2019, I founded The Buttercream Studio with a single conviction: that exceptional cakes should be accessible beyond hotel ballrooms.
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                Today, every cake that leaves our studio is made by hand, from scratch, using ingredients I select personally. I work with a small, trusted team to ensure that no detail is overlooked — from the quality of the couverture chocolate to the placement of the final sugar petal.
              </p>
              <blockquote
                style={{
                  borderLeft: '3px solid var(--blush)',
                  paddingLeft: '1.5rem',
                  margin: '0.5rem 0',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: 'var(--cocoa)',
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;A cake should taste as extraordinary as it looks. I will never compromise on one for the other.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section
        style={{
          backgroundColor: 'var(--cream)',
          padding: '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
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
              Our Approach
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 600,
                color: 'var(--charcoal)',
              }}
            >
              Craftsmanship in every layer
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Made from scratch',
                text: 'Every sponge, filling, ganache, and buttercream is made entirely from scratch in our studio kitchen. We do not use pre-mixes, artificial flavouring, or stabilisers.',
              },
              {
                title: 'Premium ingredients',
                text: 'We use Valrhona and Callebaut couverture chocolate, Madagascar vanilla, seasonal fruits, and fresh dairy. Ingredient quality is non-negotiable.',
              },
              {
                title: 'Made to order',
                text: 'We do not bake in advance. Each cake is created fresh for your specific order, ensuring the best possible flavour and texture on the day.',
              },
              {
                title: 'Seasonal menu',
                text: 'Our collection evolves with the seasons. When Alphonso mangoes are in season, we make the Mango Coconut Delight. We believe in cooking with what is best right now.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--ivory)',
                  border: '1px solid var(--border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--charcoal)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Values */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
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
          What we believe
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
          Studio values
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            { value: 'Honesty', text: 'We are transparent about ingredients, lead times, and pricing. No hidden charges, no inflated promises.' },
            { value: 'Detail', text: 'The difference between a good cake and an exceptional one lives in the details — a straight edge, a balanced flavour, a perfectly set ganache.' },
            { value: 'Seasonality', text: 'We believe great baking is grounded in using the right ingredients at the right time of year.' },
            { value: 'Care', text: 'We understand that most cakes mark a meaningful moment — a birthday, a wedding, a celebration. We treat every order with the significance it deserves.' },
          ].map((item, index) => (
            <div
              key={item.value}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: '2rem',
                padding: '2rem 0',
                borderTop: '1px solid var(--border)',
                borderBottom: index === 3 ? '1px solid var(--border)' : 'none',
                alignItems: 'start',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.125rem',
                  fontStyle: 'italic',
                  color: 'var(--cocoa)',
                  fontWeight: 400,
                }}
              >
                {item.value}
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: 'var(--cocoa)',
          padding: '5rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 600,
              color: 'var(--ivory)',
              marginBottom: '1.25rem',
            }}
          >
            Let&apos;s create something together
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(250, 247, 242, 0.75)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Whether you know exactly what you want or need some guidance, we love the creative process. Reach out and let&apos;s begin.
          </p>
          <Link
            href="/custom"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              backgroundColor: 'var(--ivory)',
              color: 'var(--cocoa)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Order a Custom Cake
          </Link>
        </div>
      </section>
    </>
  )
}

