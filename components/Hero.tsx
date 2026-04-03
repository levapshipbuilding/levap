'use client'

import { motion } from 'framer-motion'

const up = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-16 hero-bg"
    >
      {/* Left-to-right gradient */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(4,4,4,0.88) 0%, rgba(4,4,4,0.55) 45%, rgba(4,4,4,0.15) 100%)' }} />
      {/* Top fade for nav */}
      <div className="absolute inset-x-0 top-0 z-[1]" style={{ height: 100, background: 'linear-gradient(to bottom, rgba(4,4,4,0.7) 0%, transparent 100%)' }} />

      {/* Hero body */}
      <div
        className="relative z-[2] flex flex-1 flex-col justify-center"
        style={{ padding: '80px var(--px) 40px', maxWidth: 'var(--max)', width: '100%', margin: '0 auto' }}
      >
        <motion.h1
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.1}
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(52px,11vw,148px)',
            lineHeight: '0.88',
            letterSpacing: '0.02em',
            color: '#FFFFFF',
            marginBottom: 0,
          }}
        >
          WE BUILD<br />
          SHIPS.<br />
          WE KEEP<br />
          THEM RUNNING.
        </motion.h1>

        <motion.div
          variants={up}
          initial="hidden"
          animate="show"
          custom={0.22}
          className="mt-6 flex flex-col gap-4"
        >
          <p
            style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(220,225,230,.85)', maxWidth: '440px', lineHeight: '1.6' }}
          >
            Refit, piping, steel, HVAC and interior - delivered on schedule at Europe&apos;s most demanding shipyards.
          </p>
          <div
            className="lbl"
            style={{ color: 'rgba(255,255,255,.45)', fontSize: '10px', letterSpacing: '0.24em' }}
          >
            Marine &amp; Offshore Engineering - Finland
          </div>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.4)',
            }}
          >
            60.4519° N &nbsp;·&nbsp; 22.2666° E &nbsp;·&nbsp; Est. 2017
          </span>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-[2]"
        style={{
          borderTop: '1px solid rgba(255,255,255,.1)',
          background: 'rgba(6,6,6,0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="hero-stats-grid">
          {[
            { n: '8', sup: '+', l: 'Years experience' },
            { n: '6', sup: '',  l: 'Countries active' },
            { n: '10', sup: '+', l: 'Major vessels' },
            { n: '500', sup: '+', l: 'Workers deployed' },
          ].map((s, i) => (
            <div
              key={i}
              className="hero-stat py-[18px]"
              style={{
                paddingLeft: i === 0 ? 0 : '24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,.1)' : 'none',
                textAlign: 'center',
              }}
            >
              <span
                className="block leading-none"
                style={{ fontFamily: 'var(--font-bebas)', fontSize: '64px', letterSpacing: '0.02em', color: '#FFFFFF' }}
              >
                {s.n}
                {s.sup && <b style={{ color: '#FFFFFF' }}>{s.sup}</b>}
              </span>
              <span
                className="block mt-[4px]"
                style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)' }}
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

