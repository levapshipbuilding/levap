'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobOpen, setMobOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
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
          style={{
            background: 'radial-gradient(ellipse at 25% 35%, #132E52 0%, #071628 65%)',
          }}
        >
          {/* Mobile header */}
          <div
            className="flex items-center justify-between flex-shrink-0"
            style={{ padding: '0 var(--px)', height: 64, borderBottom: '1px solid var(--line)' }}
          >
            <Image
              src="/alneva-logo.png"
              alt="Alneva"
              width={110}
              height={28}
              style={{ objectFit: 'contain', filter: 'invert(1)', opacity: 0.9 }}
            />
            <button
              onClick={() => setMobOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink3)', fontSize: '20px', lineHeight: 1 }}
            >
              ✕
            </button>
          </div>

          {/* Links */}
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
                  color: 'var(--ink)',
                  padding: '18px 0',
                  borderBottom: '1px solid var(--line)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div style={{ padding: '24px var(--px) 32px', borderTop: '1px solid var(--line)' }}>
            <div className="lbl" style={{ marginBottom: 10 }}>Get in touch</div>
            <a
              href="tel:+358449536292"
              className="block font-light transition-colors duration-200"
              style={{ fontSize: '13px', color: 'var(--ink3)', marginBottom: 6 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink2)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink3)')}
            >
              +358 449 536 292
            </a>
            <a
              href="mailto:info@levap.fi"
              className="block font-light transition-colors duration-200"
              style={{ fontSize: '13px', color: 'var(--ink3)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink2)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink3)')}
            >
              info@levap.fi
            </a>
          </div>
        </div>
      )}

      {/* Nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[800] flex h-16 items-center justify-between transition-all duration-300"
        style={{
          padding: '0 var(--px)',
          ...(scrolled
            ? {
                background: 'rgba(13,34,64,0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,.06)',
              }
            : {}),
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('#') }}
          className="block"
          style={{ lineHeight: 0 }}
        >
          <Image
            src="/alneva-logo.png"
            alt="Alneva"
            width={110}
            height={28}
            style={{ objectFit: 'contain', filter: 'invert(1)', opacity: 0.92 }}
          />
        </a>

        {/* Desktop links */}
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
                style={{ color: 'rgba(232,241,255,.55)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(232,241,255,.55)')}
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
                border: '1px solid rgba(90,174,208,.45)',
                color: 'var(--gold)',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.background = 'var(--gold)'
                e.currentTarget.style.color = 'var(--deep)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(90,174,208,.45)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--gold)'
              }}
            >
              Request a quote
            </a>
          </li>
        </ul>

        {/* Burger */}
        <button
          className="flex lg:hidden flex-col gap-[5px] cursor-pointer border-none bg-transparent p-1"
          onClick={() => setMobOpen(true)}
          aria-label="Menu"
        >
          <span className="block w-5 transition-all duration-300" style={{ height: '1.5px', background: 'var(--ink)' }} />
          <span className="block w-5 transition-all duration-300" style={{ height: '1.5px', background: 'var(--ink)', width: '14px' }} />
          <span className="block w-5 transition-all duration-300" style={{ height: '1.5px', background: 'var(--ink)' }} />
        </button>
      </nav>
    </>
  )
}
