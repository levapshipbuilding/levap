'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })

  return (
    <section
      id="about"
      className="py-[64px]"
      style={{ background: 'var(--s1)' }}
      ref={ref}
    >
      <div className="wrap">
        <motion.div variants={up(0.07)} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ marginBottom: '16px' }}>
          <div className="lbl">About Levap</div>
        </motion.div>

        <div className="about-grid">
          {/* Left */}
          <div style={{ paddingRight: '40px' }}>
            <motion.h2
              variants={up(0.12)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(56px, 7vw, 96px)',
                lineHeight: '0.9',
                letterSpacing: '0.02em',
                color: 'var(--ink)',
              }}
            >
              8 YEARS.<br />
              <span style={{ color: 'var(--ink)' }}>ZERO</span><br />
              <span style={{ color: 'var(--ink)' }}>SHORTCUTS.</span>
            </motion.h2>
          </div>

          {/* Right */}
          <div className="about-right-col">
            {([
              <>Levap operates at the sharp end of marine engineering — where deadlines are tight, tolerances are tighter, and the margin for error is <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>zero</strong>.</>,
              <>We&apos;ve delivered for Meyer Turku, Chantiers de l&apos;Atlantique, and Tallink. That&apos;s not a credential. That&apos;s a standard.</>,
              <>Based in Turku, Finland. Operating across Germany, Netherlands, France and Sweden.</>,
            ] as React.ReactNode[]).map((txt, i) => (
              <motion.p
                key={i}
                variants={up(0.18 + i * 0.07)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                style={{ fontSize: '14px', fontWeight: 400, color: 'var(--ink2)', lineHeight: '1.7', marginBottom: i < 2 ? '16px' : 0 }}
              >
                {txt}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
