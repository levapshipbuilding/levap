'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  { i: '01', name: 'Icon of the Seas',    yard: 'Meyer Turku Shipyard',        tag: 'Piping & Steel'    },
  { i: '02', name: 'Mein Schiff 7',       yard: 'Meyer Turku Shipyard',        tag: 'Interior & HVAC'  },
  { i: '03', name: 'Ritz-Carlton Ilma',   yard: "Chantiers de l'Atlantique",   tag: 'Full refit'       },
  { i: '04', name: 'MSC World America',   yard: "Chantiers de l'Atlantique",   tag: 'Piping'           },
  { i: '05', name: 'MyStar',              yard: 'Tallink',                     tag: 'Steel & outfitting'},
  { i: '06', name: 'Aurora Botnia',       yard: 'Tallink',                     tag: 'Manning'          },
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
      className="prow-layout py-[26px] cursor-default transition-opacity duration-200"
      style={{
        borderBottom: '1px solid rgba(255,255,255,.07)',
        opacity: listHovered ? (hovered ? 1 : 0.45) : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="prow-num text-right"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,.2)',
        }}
      >
        {p.i}
      </span>
      <span
        className="prow-name leading-none overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-[.22s]"
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(22px,2.4vw,30px)',
          letterSpacing: '0.04em',
          color: hovered ? 'var(--gold2)' : 'var(--bg)',
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
          color: 'rgba(255,255,255,.22)',
        }}
      >
        {p.yard}
      </span>
      <span
        className="prow-tag whitespace-nowrap px-[14px] py-[6px] transition-[color,border-color] duration-[.22s]"
        style={{
          fontSize: '9.5px',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: hovered ? 'var(--gold2)' : 'rgba(255,255,255,.35)',
          border: `1px solid ${hovered ? 'rgba(184,140,58,.4)' : 'rgba(255,255,255,.14)'}`,
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
      style={{ background: 'var(--ink)', borderTop: '1px solid var(--line)' }}
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
          style={{ borderBottom: '1px solid rgba(255,255,255,.08)' }}
        >
          <div
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'rgba(154,116,40,.6)',
            }}
          >
            Portfolio
          </div>
          <h2
            className="mt-[18px]"
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(50px,6vw,84px)',
              lineHeight: '0.88',
              letterSpacing: '0.025em',
              color: 'var(--bg)',
            }}
          >
            THE WORK<br />
            <em style={{ color: 'var(--gold2)', fontStyle: 'normal' }}>SPEAKS.</em>
          </h2>
        </motion.div>

        {/* List */}
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
