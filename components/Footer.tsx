'use client'

export default function Footer() {
  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return
    if (id === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid var(--line)', paddingTop: 64 }}>
      <div className="wrap">
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1.2fr' }}
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo('#') }}
              className="block mb-3"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: '24px', letterSpacing: '0.1em', color: 'var(--bg)' }}
            >
              LEVA<em style={{ fontStyle: 'normal', color: 'var(--gold2)' }}>P</em>
            </a>
            <p
              className="font-light leading-[1.72] max-w-[210px]"
              style={{ fontSize: '13px', color: 'rgba(248,247,244,.32)' }}
            >
              Leading marine and offshore engineering across Europe. Based in Turku, Finland.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5
              className="mb-4"
              style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(248,247,244,.22)' }}
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
                    className="font-light transition-colors duration-200"
                    style={{ fontSize: '13px', color: 'rgba(248,247,244,.45)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.88)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.45)')}
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
              style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(248,247,244,.22)' }}
            >
              Services
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              {['Piping', 'Steel works', 'HVAC', 'Interior', 'Manning'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="font-light transition-colors duration-200"
                    style={{ fontSize: '13px', color: 'rgba(248,247,244,.45)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.88)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.45)')}
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
              style={{ fontSize: '9px', fontWeight: 500, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(248,247,244,.22)' }}
            >
              Contact
            </h5>
            <ul className="list-none flex flex-col gap-[9px]">
              <li>
                <a
                  href="tel:+358449536292"
                  className="font-light transition-colors duration-200"
                  style={{ fontSize: '13px', color: 'rgba(248,247,244,.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.88)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.45)')}
                >
                  +358 449 536 292
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@levap.fi"
                  className="font-light transition-colors duration-200"
                  style={{ fontSize: '13px', color: 'rgba(248,247,244,.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.88)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.45)')}
                >
                  info@levap.fi
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                  className="font-light transition-colors duration-200"
                  style={{ fontSize: '13px', color: 'rgba(248,247,244,.45)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.88)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,.45)')}
                >
                  Get a quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bar */}
      <div
        className="flex flex-wrap justify-between items-center gap-3 mt-14"
        style={{
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: '18px var(--px)',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '0.1em', color: 'rgba(248,247,244,.22)' }}>
          © 2025 Levap OY · Reg. 53477472-5 · All rights reserved
        </span>
        <span style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '0.1em', color: 'rgba(248,247,244,.22)' }}>
          Built to last. At sea.
        </span>
      </div>
    </footer>
  )
}
