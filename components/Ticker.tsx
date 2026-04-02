'use client'

const items = [
  'Icon of the Seas',
  'Ritz-Carlton Ilma',
  'Mein Schiff 7',
  'MSC World America',
  'Tallink MyStar',
  'Aurora Botnia',
  'Meyer Turku',
  "Chantiers de l'Atlantique",
]

// Duplicate for seamless loop
const allItems = [...items, ...items]

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden py-[10px]"
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--s2)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="inline-flex whitespace-nowrap"
        style={{ animation: 'tk 42s linear infinite' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8"
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--ink3)',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold)', fontSize: '14px', opacity: 0.7 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
