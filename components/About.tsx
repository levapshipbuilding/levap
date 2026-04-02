'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  },
})

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })

  const nums = [
    { n: '8', sup: '+', l: 'Years exp.', dark: false },
    { n: '6', sup: '',  l: 'Countries',  dark: true  },
    { n: '10', sup: '+', l: 'Projects',  dark: false },
    { n: '500', sup: '+', l: 'Workers',  dark: false },
  ]

  return (
    <section
      id="about"
      className="py-[120px]"
      style={{ background: 'var(--s1)', borderTop: '1px solid var(--line)' }}
      ref={ref}
    >
      <div className="wrap">
        <div
          className="grid gap-20 items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* Left */}
          <div>
            <motion.div
              className="lbl"
              variants={up(0.07)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              About Levap
            </motion.div>

            <motion.h2
              variants={up(0.14)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(52px,6.5vw,88px)',
                lineHeight: '0.88',
                letterSpacing: '0.025em',
                color: 'var(--ink)',
                margin: '20px 0 32px',
              }}
            >
              8 YEARS.<br />
              <span style={{ color: 'var(--gold)' }}>ZERO</span><br />
              <span style={{ WebkitTextStroke: '1.5px var(--ink4)', color: 'transparent' }}>SHORTCUTS.</span>
            </motion.h2>

            {[
              <>Levap operates at the sharp end of marine engineering — where deadlines are tight, tolerances are tighter, and the margin for error is <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>zero</strong>.</>,
              <>We&apos;ve delivered for Meyer Turku, Chantiers de l&apos;Atlantique, and Tallink. That&apos;s not a credential. That&apos;s a standard.</>,
              <>Based in Turku, Finland. Operating in Germany, Netherlands, France and Sweden.</>,
            ].map((txt, i) => (
              <motion.p
                key={i}
                variants={up(0.21 + i * 0.07)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="font-light leading-[1.8] mb-[14px] last:mb-0"
                style={{ fontSize: '15px', color: 'var(--ink2)' }}
              >
                {txt}
              </motion.p>
            ))}
          </div>

          {/* Right – nums grid */}
          <motion.div
            variants={up(0.14)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="grid overflow-hidden"
            style={{
              gridTemplateColumns: '1fr 1fr',
              border: '1px solid var(--line)',
            }}
          >
            {nums.map((n, i) => (
              <div
                key={i}
                className="p-7"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                  background: n.dark ? 'var(--ink)' : 'var(--bg)',
                }}
              >
                <span
                  className="block leading-none"
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: '54px',
                    letterSpacing: '0.02em',
                    color: n.dark ? 'var(--bg)' : 'var(--ink)',
                  }}
                >
                  {n.n}
                  {n.sup && (
                    <sup
                      style={{
                        fontSize: '18px',
                        color: n.dark ? 'rgba(154,116,40,.8)' : 'var(--gold)',
                        verticalAlign: 'super',
                      }}
                    >
                      {n.sup}
                    </sup>
                  )}
                </span>
                <span
                  className="block mt-2"
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: n.dark ? 'rgba(248,247,244,.45)' : 'var(--ink3)',
                  }}
                >
                  {n.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
