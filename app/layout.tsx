import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Jost, Pinyon_Script } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500'],
  variable: '--ff-serif',
  display: 'swap',
})
const sans = Jost({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--ff-sans', display: 'swap' })
const script = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--ff-script', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Pedidas de matrimonio y de novia en Querétaro`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Organizamos pedidas de matrimonio, pedidas de novia y aniversarios en Querétaro, Tequisquiapan y Peña de Bernal. Corazones de rosas, letras MARRY ME y más.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#1a0b0d',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
