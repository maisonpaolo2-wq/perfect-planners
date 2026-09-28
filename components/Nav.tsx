'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '@/content/data'
import Logo from './Logo'
import { waLink } from './WhatsAppButton'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/escenarios', label: 'Escenarios' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/sobre-mi', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Nav() {
  const pathname = usePathname()
  const sentinel = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Fondo del nav activado con IntersectionObserver sobre un centinela en el top
  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div ref={sentinel} className="nav-sentinel" aria-hidden="true" />
      <header className={`nav${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link href="/" className="nav__brand" aria-label={`${siteConfig.name}, inicio`}>
            <Logo />
          </Link>
          <nav aria-label="Principal">
            <ul className="nav__links">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="nav__lang" title="Próximamente · Coming soon">
                  EN
                </span>
              </li>
            </ul>
          </nav>
          <div className="nav__right">
            <span className="nav__lang nav__lang--mobile" title="Próximamente · Coming soon">
              EN
            </span>
            <button
              type="button"
              className="nav__burger"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="menu__panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menú"
              initial={{ y: '-4%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-4%', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="menu__close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
                ×
              </button>
              <ul className="menu__links">
                {[{ href: '/', label: 'Inicio' }, ...links].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.08, duration: 0.4 }}
                  >
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      <span className="menu__num">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="menu__foot">
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <a
                  href={`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.instagram}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
