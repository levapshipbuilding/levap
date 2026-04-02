'use client'

import { useEffect, useState } from 'react'

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
    if (id === '#') return
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <>
      {/* Mobile overlay */}
      {mobOpen && (
        <div
          style={{ background: 'var(--bg)' }}
          className="fixed inset-0 z-[900] flex flex-col items-center justify-center gap-[6px]"
        >
          <button
            className="absolute top-5 cursor-pointer border-none bg-transparent text-2xl"
            style={{ right: 'var(--px)', color: 'var(--ink3)' }}
            onClick={() => setMobOpen(false)}
            aria-label="Close menu"
          >
            &#x2715;
          </button>
          {(['#about', '#services', '#projects', '#contact'] as const).map((href) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href) }}
              style={{ fontFamily: 'var(--font-bebas)', color: 'var(--ink3)', lineHeight: '1.1' }}
              className="text-[52px] tracking-[.06em] transition-colors duration-200 hover:text-[var(--ink)] capitalize"
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
      )}

      {/* Nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[800] flex h-16 items-center justify-between transition-[background] duration-300"
        style={{
          padding: '0 var(--px)',
          ...(scrolled
            ? {
                background: 'rgba(248,247,244,.96)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }
            : {}),
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('#') }}
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '.1em', color: 'var(--ink)' }}
          className="text-2xl"
        >
          LEVA<em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>P</em>
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
                className="text-[11px] font-medium tracking-[.16em] uppercase transition-colors duration-200"
                style={{ color: 'var(--ink3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink3)')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="text-[11px] font-medium tracking-[.14em] uppercase transition-[border-color,color] duration-200"
              style={{
                padding: '9px 20px',
                border: '1px solid var(--ink4)',
                color: 'var(--ink2)',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)'
                e.currentTarget.style.color = 'var(--gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--ink4)'
                e.currentTarget.style.color = 'var(--ink2)'
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
          <span className="block w-5 bg-[var(--ink)] transition-all duration-300" style={{ height: '1.5px' }} />
          <span className="block w-5 bg-[var(--ink)] transition-all duration-300" style={{ height: '1.5px' }} />
          <span className="block w-5 bg-[var(--ink)] transition-all duration-300" style={{ height: '1.5px' }} />
        </button>
      </nav>
    </>
  )
}
