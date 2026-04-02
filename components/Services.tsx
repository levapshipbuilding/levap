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
    desc: 'Structural and outfitting steel, certified welding to classification society standards. When the weld has to hold, we\'re who you call.',
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

function ServiceCard({ s, delay, inView }: { s: typeof services[0]; delay: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="svc-card relative p-[36px_28px_30px] transition-[background] duration-[.25s] cursor-default overflow-hidden"
      style={{ background: hovered ? 'var(--ink)' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="block leading-none mb-5 transition-colors duration-[.25s]"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '44px',
          letterSpacing: '0.04em',
          color: hovered ? 'var(--gold)' : 'var(--ink4)',
        }}
      >
        {s.n}
      </span>
      <h3
        className="mb-[10px] leading-[1.3] transition-colors duration-[.25s]"
        style={{ fontSize: '14px', fontWeight: 500, color: hovered ? 'var(--bg)' : 'var(--ink)' }}
      >
        {s.name}
      </h3>
      <p
        className="font-light leading-[1.74] transition-colors duration-[.25s]"
        style={{ fontSize: '13px', color: hovered ? 'rgba(248,247,244,.55)' : 'var(--ink3)' }}
      >
        {s.desc}
      </p>
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
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="pb-10"
          style={{
            borderBottom: '1px solid var(--line)',
            marginBottom: '1px',
          }}
        >
          <div className="lbl">What we do</div>
          <h2
            className="mt-[18px]"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(50px,6vw,84px)',
              lineHeight: '0.88',
              letterSpacing: '0.025em',
              color: 'var(--ink)',
            }}
          >
            SIX DISCIPLINES.<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>ONE CREW.</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={s.n} className="svc-cell">
              <ServiceCard s={s} delay={0.07 * (i + 1)} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
