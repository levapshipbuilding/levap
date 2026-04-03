'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const up = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  },
})

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: 'var(--gold)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.82 21 3 13.18 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02L6.6 10.8z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: 'var(--gold)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <polyline points="2,6 12,14 22,6" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, stroke: 'var(--gold)', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill="none" />
    </svg>
  )
}

function ContactDetail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[14px] mb-[14px]">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: 38, height: 38, border: '1px solid var(--line)', background: 'var(--s2)' }}
      >
        {icon}
      </div>
      <div>
        <strong
          className="block"
          style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 2 }}
        >
          {label}
        </strong>
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10px 0px' })

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', scope: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--line)',
    padding: '10px 0',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    fontWeight: 400,
    color: 'var(--ink)',
    outline: 'none',
    width: '100%',
    transition: 'border-color .2s',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink3)',
  }

  return (
    <section
      id="contact"
      className="py-[72px]"
      style={{ background: 'var(--bg)' }}
      ref={ref}
    >
      <div className="wrap">
        <div className="r-grid-2">
          {/* Left */}
          <div>
            <motion.div className="lbl" variants={up(0.07)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              Get in touch
            </motion.div>
            <motion.h2
              variants={up(0.12)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="mb-5"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(52px,7vw,88px)',
                lineHeight: '0.88',
                letterSpacing: '0.025em',
                color: 'var(--ink)',
                marginTop: 14,
              }}
            >
              LET&apos;S TALK<br />
              <em style={{ color: 'var(--ink)', fontStyle: 'normal' }}>SCOPE.</em>
            </motion.h2>
            <motion.p
              variants={up(0.19)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="leading-[1.7] mb-8 max-w-[360px]"
              style={{ fontSize: '14px', color: 'var(--ink2)' }}
            >
              Tell us about your project - yard, vessel type, timeline, scope. We&apos;ll come back with a concrete plan, not a brochure.
            </motion.p>

            <motion.div variants={up(0.26)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <ContactDetail icon={<PhoneIcon />} label="Phone">
                <a
                  href="tel:+358449536292"
                  className="transition-colors duration-200"
                  style={{ fontSize: '14px', color: 'var(--ink)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                >
                  +358 449 536 292
                </a>
              </ContactDetail>
            </motion.div>

            <motion.div variants={up(0.32)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <ContactDetail icon={<EmailIcon />} label="Email">
                <a
                  href="mailto:info@levap.fi"
                  className="transition-colors duration-200"
                  style={{ fontSize: '14px', color: 'var(--ink)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                >
                  info@levap.fi
                </a>
              </ContactDetail>
            </motion.div>

            <motion.div variants={up(0.38)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
              <ContactDetail icon={<MapIcon />} label="Address">
                <span style={{ fontSize: '14px', color: 'var(--ink)' }}>
                  Kupittaankatu 63 A32, Turku
                </span>
              </ContactDetail>
            </motion.div>

            <motion.div
              variants={up(0.44)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="flex gap-6 flex-wrap"
              style={{ marginTop: 28 }}
            >
              {['Reg. 53477472-5', 'Turku, Finland', 'Est. 2017'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ink4)',
                  }}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div variants={up(0.14)} initial="hidden" animate={inView ? 'show' : 'hidden'} style={{ paddingTop: 6 }}>
            <div>
              {submitted ? (
                <p
                  className="leading-[1.7]"
                  style={{ fontSize: '15px', color: 'var(--ink2)', padding: '40px 0' }}
                >
                  Thank you - we&apos;ll be in touch shortly.
                </p>
              ) : (
                <form className="flex flex-col gap-[14px]" onSubmit={handleSubmit}>
                  <div className="r-form-row">
                    <div className="flex flex-col gap-[6px]">
                      <label style={labelStyle}>Full name</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        style={inputStyle}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label style={labelStyle}>Company</label>
                      <input
                        type="text"
                        placeholder="Shipping Co."
                        style={inputStyle}
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                      />
                    </div>
                  </div>

                  <div className="r-form-row">
                    <div className="flex flex-col gap-[6px]">
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        style={inputStyle}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        placeholder="+358 …"
                        style={inputStyle}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label style={labelStyle}>Project type</label>
                    <select
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%230A0F1A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 4px center',
                        paddingRight: '22px',
                      }}
                      value={form.scope}
                      onChange={(e) => setForm({ ...form, scope: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                    >
                      <option value="">Select scope…</option>
                      <option>Piping installation</option>
                      <option>Steel &amp; welding</option>
                      <option>HVAC installation</option>
                      <option>Interior installation</option>
                      <option>Engine maintenance</option>
                      <option>Manning / workforce</option>
                      <option>Full refit</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <label style={labelStyle}>Project details</label>
                    <textarea
                      placeholder="Vessel type, yard, timeline - any context helps us respond faster."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '100px', borderBottom: 'none' }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--line)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-[6px] w-full inline-flex items-center justify-center gap-[10px] cursor-pointer transition-[background,color] duration-[.22s] sm:w-auto sm:self-start"
                    style={{
                      padding: '13px 28px',
                      background: 'var(--ink)',
                      border: '1px solid var(--ink)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      borderRadius: '6px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1A2840'
                      e.currentTarget.style.borderColor = '#1A2840'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--ink)'
                      e.currentTarget.style.borderColor = 'var(--ink)'
                    }}
                  >
                    Send enquiry →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
