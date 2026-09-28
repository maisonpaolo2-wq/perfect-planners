import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import Logo, { HeartMark } from './Logo'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image
          src="/photos/kiosco-fuentes-camino-velas.webp"
          alt="Camino de velas hacia un kiosco iluminado entre fuentes de colores"
          fill
          sizes="100vw"
        />
      </div>
      <div className="container">
        <HeartMark size={34} className="footer__mark" />
        <p className="footer__quote">{siteConfig.quote}</p>
        <p className="footer__sig">{siteConfig.name}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>Pedidas de matrimonio, pedidas de novia y aniversarios en {siteConfig.locations.slice(0, 4).join(', ')}.</p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/escenarios">Escenarios</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/sobre-mi">Nosotros</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hablemos</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp · {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                  {siteConfig.instagram}
                </a>
              </li>
              <li>
                <a href={siteConfig.catalogUrl} target="_blank" rel="noopener noreferrer">
                  Catálogo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · Querétaro, México
          </span>
          <span>Proposals · Anniversaries · Surprise dates</span>
        </div>
      </div>
    </footer>
  )
}
