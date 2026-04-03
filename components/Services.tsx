'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const services = [
  {
    n: '01',
    name: 'Piping Installation & Maintenance',
    desc: "Complex systems, clean installs. Full piping scopes from routing to pressure testing - with crews who've done it on the world's biggest ships.",
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
    desc: 'From crew quarters to passenger areas - joinery, panels, flooring. We turn raw steel into spaces people want to be in.',
  },
  {
    n: '06',
    name: 'Manning & Workforce Solutions',
    desc: 'Skilled hands on short notice. Pre-vetted welders, fitters and pipe engineers - ready to integrate with your team from day one.',
  },
]

function ServiceRow({
  s,
  delay,
  inView,
  isOpen,
  onToggle,
}: {
  s: typeof services[0]
  delay: number
  inView: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const active = isOpen || hovered

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="svc-row"
      style={{ background: active ? 'var(--s1)' : 'transparent', transition: 'background .22s', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onToggle}
    >
      <span
        className="svc-row-num"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '20px',
          letterSpacing: '0.06em',
          color: active ? 'var(--gold)' : 'var(--ink4)',
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
          color: active ? 'var(--gold)' : 'var(--ink)',
          fontWeight: 400,
          transition: 'color .22s',
        }}
      >
        {s.name}
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="svc-row-desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="leading-[1.7]"
              style={{ fontSize: '13px', color: 'var(--ink3)', fontWeight: 400, paddingTop: 12, paddingBottom: 4 }}
            >
              {s.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-[72px]"
      style={{ background: 'var(--bg)' }}
      ref={ref}
    >
      <div className="wrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-2"
        >
          <div className="lbl">What we do</div>
        </motion.div>

        <div className="svc-list" style={{ marginTop: 16 }}>
          {services.map((s, i) => (
            <ServiceRow
              key={s.n}
              s={s}
              delay={0.07 * (i + 1)}
              inView={inView}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
