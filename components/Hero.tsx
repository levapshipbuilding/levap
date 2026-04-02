'use client'

import { motion } from 'framer-motion'

const up = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Hero body */}
      <div
        className="relative z-[2] flex flex-1 flex-col justify-center"
        style={{ padding: '80px var(--px) 48px', maxWidth: 'var(--max)', width: '100%', margin: '0 auto' }}
      >
        {/* Tag */}
        <motion.div
          className="mb-8"
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.05}
        >
          <span className="lbl">Marine &amp; Offshore Engineering — Finland</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.18}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(80px,12vw,172px)',
            lineHeight: '0.88',
            letterSpacing: '0.025em',
            color: 'var(--ink)',
            marginBottom: 0,
          }}
        >
          WE BUILD<br />
          <span style={{ color: 'var(--gold)' }}>SHIPS.</span><br />
          <span
            style={{
              WebkitTextStroke: '1.5px var(--ink4)',
              color: 'transparent',
            }}
          >
            WE KEEP
          </span><br />
          THEM RUNNING.
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.42}
          className="flex flex-wrap items-end justify-between gap-10 mt-12 pt-10"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <p
            className="font-light leading-[1.72] max-w-[380px]"
            style={{ fontSize: '15px', color: 'var(--ink2)' }}
          >
            Refit, piping, steel, HVAC and interior — delivered on schedule at Europe&apos;s most demanding shipyards.
          </p>
          <div className="flex gap-[10px] items-center flex-shrink-0 flex-wrap">
            <HeroBtn href="#projects" dark>See our work</HeroBtn>
            <HeroBtn href="#contact">Request a quote</HeroBtn>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-[2]"
        style={{ borderTop: '1px solid var(--line)', background: 'var(--bg)' }}
      >
        <div
          className="grid"
          style={{
            maxWidth: 'var(--max)',
            margin: '0 auto',
            padding: '0 var(--px)',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {[
            { n: '8', sup: '+', l: 'Years experience' },
            { n: '6', sup: '', l: 'Countries active' },
            { n: '10', sup: '+', l: 'Major vessels' },
            { n: '500', sup: '+', l: 'Workers deployed' },
          ].map((s, i) => (
            <div
              key={i}
              className="py-[22px]"
              style={{
                paddingLeft: i === 0 ? 0 : '28px',
                borderRight: i < 3 ? '1px solid var(--line)' : 'none',
              }}
            >
              <span
                className="block leading-none"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '32px', letterSpacing: '0.03em', color: 'var(--ink)' }}
              >
                {s.n}
                {s.sup && <b style={{ color: 'var(--gold)' }}>{s.sup}</b>}
              </span>
              <span
                className="block mt-[5px]"
                style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink3)' }}
              >
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HeroBtn({
  href,
  dark,
  children,
}: {
  href: string
  dark?: boolean
  children: React.ReactNode
}) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  if (dark) {
    return (
      <a
        href={href}
        onClick={(e) => { e.preventDefault(); scrollTo(href) }}
        className="inline-flex items-center text-[11px] font-medium tracking-[.16em] uppercase transition-[background] duration-200"
        style={{ padding: '12px 28px', background: 'var(--ink)', color: 'var(--bg)' }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ink)')}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); scrollTo(href) }}
      className="inline-flex items-center text-[11px] font-medium tracking-[.16em] uppercase transition-[border-color,color] duration-200"
      style={{ padding: '11px 28px', border: '1px solid var(--ink4)', color: 'var(--ink2)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--gold)'
        e.currentTarget.style.color = 'var(--gold)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--ink4)'
        e.currentTarget.style.color = 'var(--ink2)'
      }}
    >
      {children}
    </a>
  )
}
