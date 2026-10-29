import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'The Buttercream Studio — Little Moments, Beautifully Baked.',
    template: '%s | The Buttercream Studio',
  },
  description:
    'Artisan custom cakes, cupcakes, and desserts crafted with care in Mumbai. Order custom celebration cakes, wedding cakes, and seasonal dessert boxes. Demo portfolio website.',
  keywords: ['artisan cakes', 'custom cakes', 'wedding cakes', 'birthday cakes', 'bakery', 'Mumbai'],
  openGraph: {
    type: 'website',
    siteName: 'The Buttercream Studio',
    title: 'The Buttercream Studio — Little Moments, Beautifully Baked.',
    description: 'Artisan custom cakes, cupcakes, and desserts crafted with care.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navigation />
        <main style={{ paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
