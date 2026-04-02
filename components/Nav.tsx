'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 5)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobOpen])

  const scrollTo = (id: string) => {
    setMobOpen(false)
    if (id === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobOpen && (
        <div
          className="fixed inset-0 z-[900] flex flex-col"
          style={{ background: 'radial-gradient(ellipse at 25% 35%, #132E52 0%, #071628 65%)' }}
        >
          <div
            className="flex items-center justify-between flex-shrink-0"
            style={{ padding: '0 var(--px)', height: 64, borderBottom: '1px solid rgba(255,255,255,.08)' }}
          >
            <Image
              src="/alneva-logo.png"
              alt="Alneva"
              width={160}
              height={40}
              style={{ objectFit: 'contain', objectPosition: 'left center', filter: 'invert(1)', opacity: 0.9 }}
            />
            <button
              onClick={() => setMobOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(168,196,222,.7)', fontSize: '20px', lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center" style={{ padding: '0 var(--px)' }}>
            {(['#about', '#services', '#projects', '#contact'] as const).map((href) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                className="block transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(40px, 10vw, 56px)',
                  letterSpacing: '0.06em',
                  lineHeight: '1',
                  color: 'rgba(232,241,255,.9)',
                  padding: '18px 0',
                  borderBottom: '1px solid rgba(255,255,255,.06)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#5AAED0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,241,255,.9)')}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          <div style={{ padding: '24px var(--px) 32px', borderTop: '1px solid rgba(255,255,255,.06)' }}>
            <div style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#5AAED0', marginBottom: 10 }}>
              Get in touch
            </div>
            <a
              href="tel:+358449536292"
              className="block font-light transition-colors duration-200"
              style={{ fontSize: '13px', color: 'rgba(168,196,222,.6)', marginBottom: 6 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(232,241,255,.9)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,196,222,.6)')}
            >
              +358 449 536 292
            </a>
            <a
              href="mailto:info@levap.fi"
              className="block font-light transition-colors duration-200"
              style={{ fontSize: '13px', color: 'rgba(168,196,222,.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(232,241,255,.9)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(168,196,222,.6)')}
            >
              info@levap.fi
            </a>
          </div>
        </div>
      )}

      {/* Nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[800] flex h-16 items-center"
        style={{
          padding: '0 var(--px)',
          background: scrolled ? 'rgba(7,22,44,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,.05)' : 'none',
          transition: 'background 0.2s ease, backdrop-filter 0.2s ease, border-bottom 0.2s ease',
        }}
      >
        {/* Inner wrapper aligned with page content */}
        <div className="flex items-center justify-between w-full" style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo('#') }}
            className="flex items-center"
            style={{ lineHeight: 0 }}
          >
            <Image
              src="/alneva-logo.png"
              alt="Alneva"
              width={148}
              height={38}
              style={{ objectFit: 'contain', objectPosition: 'left center', filter: 'invert(1)', opacity: 0.95 }}
            />
          </a>

          <ul className="hidden lg:flex items-center gap-8 list-none">
            {[
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#projects', label: 'Projects' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                  className="nav-link text-[11px] font-medium tracking-[.16em] uppercase transition-colors duration-200"
                  style={{ color: 'rgba(232,241,255,.75)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,241,255,.75)')}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="text-[11px] font-medium tracking-[.14em] uppercase transition-all duration-200"
                style={{
                  padding: '9px 20px',
                  border: '1px solid rgba(255,255,255,.4)',
                  color: '#fff',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fff'
                  e.currentTarget.style.background = 'rgba(255,255,255,.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.4)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Request a quote
              </a>
            </li>
          </ul>

          <button
            className="flex lg:hidden flex-col gap-[5px] cursor-pointer border-none bg-transparent p-1"
            onClick={() => setMobOpen(true)}
            aria-label="Menu"
          >
            <span className="block w-5" style={{ height: '1.5px', background: '#fff' }} />
            <span className="block" style={{ height: '1.5px', background: '#fff', width: '14px' }} />
            <span className="block w-5" style={{ height: '1.5px', background: '#fff' }} />
          </button>
        </div>
      </nav>
    </>
  )
}
