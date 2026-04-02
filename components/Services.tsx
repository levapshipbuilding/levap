'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    n: '01',
    name: 'Piping Installation & Maintenance',
    desc: "Complex systems, clean installs. Full piping scopes from routing to pressure testing — with crews who've done it on the world's biggest ships.",
  },
  {
    n: '02',
    name: 'Steel & Welding Works',
    desc: "Structural and outfitting steel, certified welding to classification society standards. When the weld has to hold, we're who you call.",
  },
  {
    n: '03',
    name: 'Engine Maintenance',
    desc: 'Routine overhauls to emergency repairs. Our engine teams work fast under pressure and always to spec. No guessing. No delays.',
  },
  {
    n: '04',
    name: 'HVAC Installation & Maintenance',
    desc: "Climate systems for vessels where downtime isn't an option. Installed right the first time, maintained to keep them that way.",
  },
  {
    n: '05',
    name: 'Interior Installation & Maintenance',
    desc: 'From crew quarters to passenger areas — joinery, panels, flooring. We turn raw steel into spaces people want to be in.',
  },
  {
    n: '06',
    name: 'Manning & Workforce Solutions',
    desc: 'Skilled hands on short notice. Pre-vetted welders, fitters and pipe engineers — ready to integrate with your team from day one.',
  },
]

function ServiceRow({ s, delay, inView }: { s: typeof services[0]; delay: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="svc-row"
      style={{ background: hovered ? 'var(--s1)' : 'transparent', transition: 'background .22s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="svc-row-num"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '20px',
          letterSpacing: '0.06em',
          color: hovered ? 'var(--gold)' : 'var(--ink4)',
          transition: 'color .22s',
          paddingTop: '2px',
          display: 'block',
        }}
      >
        {s.n}
      </span>
      <h3
        className="svc-row-name"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(22px, 2.6vw, 34px)',
          letterSpacing: '0.04em',
          lineHeight: '1.1',
          color: hovered ? 'var(--gold)' : 'var(--ink)',
          fontWeight: 400,
          transition: 'color .22s',
        }}
      >
        {s.name}
      </h3>
      <p
        className="svc-row-desc font-light leading-[1.74]"
        style={{ fontSize: '13px', color: 'var(--ink3)' }}
      >
        {s.desc}
      </p>
      {/* Hover arrow */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-bebas)',
          fontSize: '20px',
          letterSpacing: '0.04em',
          color: 'var(--gold)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity .22s',
          pointerEvents: 'none',
        }}
      >
        →
      </span>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })

  return (
    <section
      id="services"
      className="py-[120px]"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}
      ref={ref}
    >
      <div className="wrap">
        {/* Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="pb-10"
          style={{ borderBottom: '1px solid var(--line)', marginBottom: 0 }}
        >
          <div className="lbl">What we do</div>
          <span className="accent-dash" />
          <h2
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(50px, 6vw, 84px)',
              lineHeight: '0.88',
              letterSpacing: '0.025em',
              color: 'var(--ink)',
            }}
          >
            SIX DISCIPLINES.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>ONE CREW.</em>
          </h2>
        </motion.div>

        {/* Row list */}
        <div className="svc-list">
          {services.map((s, i) => (
            <ServiceRow key={s.n} s={s} delay={0.07 * (i + 1)} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
