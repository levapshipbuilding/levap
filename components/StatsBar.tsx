'use client'

export default function StatsBar() {
  return (
    <div
      style={{
        borderTop: '1px solid rgba(255,255,255,.1)',
        background: 'rgba(15,27,45,0.92)',
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
              className="block leading-none stat-num"
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
  )
}
