'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  { i: '01', name: 'Icon of the Seas',    yard: 'Meyer Turku Shipyard',        tag: 'Piping & Steel',     year: '2024' },
  { i: '02', name: 'Mein Schiff 7',       yard: 'Meyer Turku Shipyard',        tag: 'Interior & HVAC',   year: '2024' },
  { i: '03', name: 'Ritz-Carlton Ilma',   yard: "Chantiers de l'Atlantique",   tag: 'Full refit',         year: '2023' },
  { i: '04', name: 'MSC World America',   yard: "Chantiers de l'Atlantique",   tag: 'Piping',             year: '2023' },
  { i: '05', name: 'MyStar',              yard: 'Tallink',                     tag: 'Steel & outfitting', year: '2022' },
  { i: '06', name: 'Aurora Botnia',       yard: 'Tallink',                     tag: 'Manning',            year: '2022' },
]

function ProjectRow({
  p,
  listHovered,
}: {
  p: typeof projects[0]
  listHovered: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <li
      className="prow-layout py-[26px] cursor-default"
      style={{
        borderBottom: '1px solid var(--line)',
        boxShadow: hovered ? 'inset 3px 0 0 var(--gold)' : 'inset 3px 0 0 transparent',
        opacity: listHovered ? (hovered ? 1 : 0.35) : 1,
        transition: 'opacity .2s, box-shadow .28s cubic-bezier(0.16,1,0.3,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="prow-num text-right"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '14px',
          letterSpacing: '0.1em',
          color: 'var(--ink4)',
        }}
      >
        {p.i}
      </span>
      <span
        className="prow-name leading-none overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-[.22s]"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(24px, 3vw, 40px)',
          letterSpacing: '0.04em',
          color: hovered ? 'var(--gold)' : 'var(--ink)',
        }}
      >
        {p.name}
      </span>
      <span
        className="prow-yard whitespace-nowrap"
        style={{
          fontSize: '10.5px',
          fontWeight: 400,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--ink4)',
        }}
      >
        {p.yard}
      </span>
      <span
        className="prow-year whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '16px',
          letterSpacing: '0.08em',
          color: hovered ? 'var(--gold)' : 'var(--ink4)',
          transition: 'color .22s',
        }}
      >
        {p.year}
      </span>
      <span
        className="prow-tag whitespace-nowrap px-[14px] py-[6px] transition-[color,border-color] duration-[.22s]"
        style={{
          fontSize: '9.5px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: hovered ? 'var(--gold)' : 'var(--ink3)',
          border: `1px solid ${hovered ? 'var(--gold)' : 'var(--line)'}`,
        }}
      >
        {p.tag}
      </span>
    </li>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })
  const [listHovered, setListHovered] = useState(false)

  return (
    <section
      id="projects"
      className="py-[120px]"
      style={{ background: 'var(--s1)' }}
      ref={ref}
    >
      <div className="wrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="pb-10"
          style={{ borderBottom: '1px solid var(--line)' }}
        >
          <div className="lbl">Portfolio</div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(50px,6vw,84px)',
              lineHeight: '0.88',
              letterSpacing: '0.025em',
              color: 'var(--ink)',
              marginTop: 16,
            }}
          >
            THE WORK<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>SPEAKS.</em>
          </h2>
        </motion.div>

        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
          }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="list-none"
          onMouseEnter={() => setListHovered(true)}
          onMouseLeave={() => setListHovered(false)}
        >
          {projects.map((p) => (
            <ProjectRow key={p.i} p={p} listHovered={listHovered} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
