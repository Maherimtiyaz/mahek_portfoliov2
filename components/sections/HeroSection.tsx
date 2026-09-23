'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Magnetic from '@/components/ui/Magnetic'

const ROLES = [
  'Backend Engineer',
  'API Architect',
  'Python Developer',
  'Open Source Contributor',
]

const TICKER = [
  'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'WebSockets', 'JWT Auth',
  'MongoDB', 'GitHub Actions', 'pytest', 'Node.js', 'OWASP', 'REST APIs', 'System Design',
]

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function HeroSection() {
  const [role, setRole] = useState(0)
  const spotRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const t = setInterval(() => setRole((p) => (p + 1) % ROLES.length), 3000)
    return () => clearInterval(t)
  }, [])

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = spotRef.current
    if (!el) return
    const r = e.currentTarget.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      id="hero"
      onMouseMove={onMove}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Cursor-reactive spotlight ── */}
      <div
        ref={spotRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), var(--t2) 0%, transparent 72%)',
          opacity: 0.07,
        }}
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--b1) 1px,transparent 1px),linear-gradient(90deg,var(--b1) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.5,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pb-0 pt-24 w-full">

        {/* Status + scroll cue */}
        <motion.div {...f(0.1)} className="flex items-center justify-between mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--b2)] text-[var(--t3)] text-[11px] tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulseDot 2s infinite' }} />
            Open to remote opportunities
          </div>
          <span
            className="hidden sm:flex items-center gap-2 text-[11px] text-[var(--t3)] tracking-[0.14em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Scroll down
            <span className="w-6 h-px bg-[var(--t3)] inline-block" />
          </span>
        </motion.div>

        {/* Name — editorial display */}
        <motion.h1
          {...f(0.15)}
          className="text-[clamp(4rem,11vw,9rem)] leading-[0.95] tracking-[-0.03em] text-[var(--t1)] mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
        >
          Mahek<br />
          <em className="text-[var(--t2)] not-italic" style={{ fontStyle: 'italic' }}>Fatima</em>
        </motion.h1>

        {/* Role rotator */}
        <motion.div {...f(0.2)} className="h-8 overflow-hidden mb-8">
          <motion.p
            key={role}
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[var(--t3)] text-[13px] tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — {ROLES[role]}
          </motion.p>
        </motion.div>

        {/* Bottom row: tagline + actions */}
        <div className="grid sm:grid-cols-2 gap-8 items-end border-t border-[var(--b1)] pt-6 pb-6">
          <motion.p {...f(0.25)} className="text-[var(--t2)] text-lg leading-[1.75] font-light max-w-[420px]">
            I build{' '}
            <strong className="text-[var(--t1)] font-medium">scalable APIs</strong>, real-time
            systems, and secure authentication with{' '}
            <strong className="text-[var(--t1)] font-medium">Python, FastAPI</strong> and{' '}
            <strong className="text-[var(--t1)] font-medium">PostgreSQL.</strong>
          </motion.p>

          <motion.div {...f(0.3)} className="flex flex-col items-start sm:items-end gap-4">
            <div className="flex gap-3">
              <Magnetic>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-full bg-[var(--t1)] text-[var(--bg)] text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  View projects
                </motion.a>
              </Magnetic>
              <Magnetic>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-full border border-[var(--b2)] text-[var(--t2)] text-sm font-medium hover:border-[var(--t1)] hover:text-[var(--t1)] transition-all"
                >
                  Get in touch
                </motion.a>
              </Magnetic>
            </div>
            <div className="flex gap-5">
              {[
                { label: 'GitHub',   href: 'https://github.com/Maherimtiyaz',       Icon: Github   },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/mahek-fatima',   Icon: Linkedin },
                { label: 'Twitter',  href: 'https://x.com/itzmaherimtiyaz',         Icon: Twitter  },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-[var(--t3)] hover:text-[var(--t1)] transition-colors"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Icon size={12} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Ticker strip ── */}
      <div className="relative z-10 border-t border-[var(--b1)] overflow-hidden py-3">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: 'ticker 22s linear infinite' }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="text-[11px] text-[var(--t3)] tracking-[0.16em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {i % 1 === 0 && i !== 0 && i !== TICKER.length ? (
                <>{t}</>
              ) : (
                t
              )}
              {i < TICKER.length * 2 - 1 && (
                <span className="mx-4 opacity-30">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
