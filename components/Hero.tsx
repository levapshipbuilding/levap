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
      style={{
        backgroundColor: '#071628',
        backgroundImage: 'url(/hero-ship.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(7,22,44,0.93) 0%, rgba(10,28,56,0.56) 55%, rgba(7,22,44,0.42) 100%)',
        }}
      />

      {/* Hero body */}
      <div
        className="relative z-[2] flex flex-1 flex-col justify-center"
        style={{ padding: '80px var(--px) 48px', maxWidth: 'var(--max)', width: '100%', margin: '0 auto' }}
      >
        <motion.div
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.05}
          style={{ display: 'block', width: 32, height: 2, background: '#5AAED0', marginBottom: 28, flexShrink: 0 }}
        />

        <motion.h1
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.1}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(52px,13vw,172px)',
            lineHeight: '0.88',
            letterSpacing: '0.025em',
            color: '#FFFFFF',
            marginBottom: 0,
          }}
        >
          WE BUILD<br />
          <span style={{ color: '#5AAED0' }}>SHIPS.</span><br />
          <span style={{ WebkitTextStroke: '1.5px rgba(232,241,255,.25)', color: 'transparent' }}>WE KEEP</span><br />
          THEM RUNNING.
        </motion.h1>

        <motion.div
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.32}
          className="mt-10 flex flex-col gap-4"
        >
          <span
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#5AAED0',
            }}
          >
            Marine &amp; Offshore Engineering — Finland
          </span>
          <p
            className="font-light leading-[1.72]"
            style={{ fontSize: '15px', color: 'rgba(168,196,222,.9)', maxWidth: '480px' }}
          >
            Refit, piping, steel, HVAC and interior — delivered on schedule at Europe&apos;s most demanding shipyards.
          </p>
          <span
            style={{
              fontSize: '9.5px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(232,241,255,.3)',
            }}
          >
            60.4519° N &nbsp;·&nbsp; 22.2666° E &nbsp;·&nbsp; Est. 2017
          </span>
          <div className="flex gap-[10px] items-center flex-wrap mt-2">
            <HeroBtn href="#projects" solid>See our work</HeroBtn>
            <HeroBtn href="#contact">Request a quote</HeroBtn>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-[2]"
        style={{
          borderTop: '1px solid rgba(255,255,255,.08)',
          background: 'rgba(7,22,44,0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="hero-stats-grid">
          {[
            { n: '8', sup: '+', l: 'Years experience' },
            { n: '6', sup: '', l: 'Countries active' },
            { n: '10', sup: '+', l: 'Major vessels' },
            { n: '500', sup: '+', l: 'Workers deployed' },
          ].map((s, i) => (
            <div
              key={i}
              className="hero-stat py-[22px]"
              style={{
                paddingLeft: i === 0 ? 0 : '28px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none',
              }}
            >
              <span
                className="block leading-none"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '44px', letterSpacing: '0.03em', color: '#FFFFFF' }}
              >
                {s.n}
                {s.sup && <b style={{ color: '#5AAED0' }}>{s.sup}</b>}
              </span>
              <span
                className="block mt-[5px]"
                style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(168,196,222,.6)' }}
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
  solid,
  children,
}: {
  href: string
  solid?: boolean
  children: React.ReactNode
}) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (!el) return
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  if (solid) {
    return (
      <a
        href={href}
        onClick={(e) => { e.preventDefault(); scrollTo(href) }}
        className="inline-flex items-center text-[11px] font-medium tracking-[.16em] uppercase transition-all duration-200"
        style={{ padding: '12px 28px', background: '#5AAED0', border: '1px solid #5AAED0', color: '#071628', borderRadius: '4px' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#70C0E4'; e.currentTarget.style.borderColor = '#70C0E4' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#5AAED0'; e.currentTarget.style.borderColor = '#5AAED0' }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); scrollTo(href) }}
      className="inline-flex items-center text-[11px] font-medium tracking-[.16em] uppercase transition-all duration-200"
      style={{ padding: '12px 28px', border: '1px solid rgba(255,255,255,.28)', color: 'rgba(232,241,255,.9)', borderRadius: '4px' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.6)'
        e.currentTarget.style.color = '#fff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.28)'
        e.currentTarget.style.color = 'rgba(232,241,255,.9)'
      }}
    >
      {children}
    </a>
  )
}
