'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })

  return (
    <section
      id="about"
      className="py-[120px]"
      style={{ background: 'var(--s1)', borderTop: '1px solid var(--line)' }}
      ref={ref}
    >
      <div className="wrap">
        <motion.div
          variants={up(0.07)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ marginBottom: '56px' }}
        >
          <div className="lbl">About Levap</div>
        </motion.div>

        {/* Editorial 2-col split */}
        <div className="about-grid">
          {/* Left — heading */}
          <div style={{ paddingRight: '40px' }}>
            <motion.div
              variants={up(0.1)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="accent-dash"
            />
            <motion.h2
              variants={up(0.14)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(48px, 5.5vw, 80px)',
                lineHeight: '0.88',
                letterSpacing: '0.025em',
                color: 'var(--ink)',
              }}
            >
              8 YEARS.<br />
              <span style={{ color: 'var(--gold)' }}>ZERO</span><br />
              <span style={{ WebkitTextStroke: '1.5px rgba(232,241,255,.22)', color: 'transparent' }}>SHORTCUTS.</span>
            </motion.h2>
          </div>

          {/* Right — body copy */}
          <div className="about-right-col">
            {([
              <>Levap operates at the sharp end of marine engineering — where deadlines are tight, tolerances are tighter, and the margin for error is <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>zero</strong>.</>,
              <>We&apos;ve delivered for Meyer Turku, Chantiers de l&apos;Atlantique, and Tallink. That&apos;s not a credential. That&apos;s a standard.</>,
              <>Based in Turku, Finland. Operating in Germany, Netherlands, France and Sweden.</>,
            ] as React.ReactNode[]).map((txt, i) => (
              <motion.p
                key={i}
                variants={up(0.21 + i * 0.07)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="font-light leading-[1.82] mb-[20px] last:mb-0"
                style={{ fontSize: '15px', color: 'var(--ink2)' }}
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
