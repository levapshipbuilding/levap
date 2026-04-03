'use client'

import Image from 'next/image'

export default function Footer() {
  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return
    if (id === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  const linkStyle = {
    fontSize: '13px',
    color: 'rgba(255,255,255,.3)',
  }
  const linkHover = {
    enter: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,.75)'),
    leave: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(255,255,255,.3)'),
  }

  return (
    <footer style={{ background: 'var(--deep)', paddingTop: 56 }}>
      <div className="wrap">
        <div className="foot-cols">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo('#') }}
              className="block mb-5"
              style={{ lineHeight: 0 }}
            >
              <Image
                src="/alneva-logo.png"
                alt="Alneva"
                width={148}
                height={38}
                style={{ objectFit: 'contain', objectPosition: 'left center', filter: 'invert(1)', opacity: 0.5 }}
              />
            </a>
            <p
              className="leading-[1.65] max-w-[210px]"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,.2)' }}
            >
              Leading marine and offshore engineering across Europe. Based in Turku, Finland.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5
              className="mb-4"
              style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,.15)' }}
            >
              Company
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              {[
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#projects', label: 'Projects' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                    className="transition-colors duration-200"
                    style={linkStyle}
                    onMouseEnter={linkHover.enter}
                    onMouseLeave={linkHover.leave}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5
              className="mb-4"
              style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,.15)' }}
            >
              Services
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              {['Piping', 'Steel works', 'HVAC', 'Interior', 'Manning'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="transition-colors duration-200"
                    style={linkStyle}
                    onMouseEnter={linkHover.enter}
                    onMouseLeave={linkHover.leave}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="mb-4"
              style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,255,255,.15)' }}
            >
              Contact
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li>
                <a href="tel:+358449536292" className="transition-colors duration-200" style={linkStyle} onMouseEnter={linkHover.enter} onMouseLeave={linkHover.leave}>
                  +358 449 536 292
                </a>
              </li>
              <li>
                <a href="mailto:info@levap.fi" className="transition-colors duration-200" style={linkStyle} onMouseEnter={linkHover.enter} onMouseLeave={linkHover.leave}>
                  info@levap.fi
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact') }} className="transition-colors duration-200" style={linkStyle} onMouseEnter={linkHover.enter} onMouseLeave={linkHover.leave}>
                  Get a quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-between items-center gap-3 mt-12"
        style={{ padding: '16px var(--px)', borderTop: '1px solid rgba(255,255,255,.04)' }}
      >
        <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', color: 'rgba(255,255,255,.12)' }}>
          © 2026 Alneva OY · Reg. 53477472-5 · All rights reserved
        </span>
        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(26,111,232,.3)' }}>
          Built to last. At sea.
        </span>
      </div>
    </footer>
  )
}
