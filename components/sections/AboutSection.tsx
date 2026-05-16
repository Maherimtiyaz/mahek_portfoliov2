'use client'
import { motion } from 'framer-motion'
import Section, { SectionMeta, Reveal } from '@/components/ui/Section'

const STATS = [
  { val: '4+',   lbl: 'Projects shipped'  },
  { val: '3',    lbl: 'Certifications'     },
  { val: '100%', lbl: 'Remote ready'       },
  { val: '24h',  lbl: 'Response time'      },
]

const CERTS = [
  'Machine Learning Specialization — Andrew Ng, Coursera',
  'Python for AI & Machine Learning — DeepLearning.AI',
  'MongoDB Semantic Search — MongoDB University',
]

export default function AboutSection() {
  return (
    <Section id="about" className="py-28 bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal><SectionMeta num="01" label="About" /></Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <h2
                className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-[var(--t1)] mb-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Building backends<br />that scale.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-[15px] text-[var(--t2)] leading-[1.8] font-light">
                <p>
                  I'm a backend engineer based in Jaipur, India — specializing in Python, FastAPI,
                  and PostgreSQL. Since 2025 I've been shipping production-oriented systems: real-time
                  messaging backends, authentication services, multi-tenant APIs, and scheduling systems.
                </p>
                <p>
                  My approach:{' '}
                  <strong className="text-[var(--t1)] font-medium">security-first,
                  performance-obsessed, documentation-aware.</strong> Every project applies OWASP
                  standards, optimized schemas, and Docker CI/CD from day one.
                </p>
                <p>
                  Currently deepening Node.js, contributing to open source in the FastAPI ecosystem,
                  and building in public. Open to remote backend opportunities globally.
                </p>
              </div>
            </Reveal>

            {/* Certs */}
            <Reveal delay={0.18}>
              <div className="mt-10 pt-8 border-t border-[var(--b1)]">
                <p
                  className="text-[11px] tracking-[0.18em] uppercase text-[var(--t3)] mb-5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Certifications
                </p>
                <ul className="space-y-2.5">
                  {CERTS.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[13px] text-[var(--t2)]">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[var(--t3)] flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <Reveal delay={0.1}>
              <div
                className="grid grid-cols-2 gap-px bg-[var(--b1)] border border-[var(--b1)] rounded-lg overflow-hidden mb-5"
              >
                {STATS.map((s) => (
                  <div key={s.lbl} className="bg-[var(--bg2)] p-5">
                    <div
                      className="text-[2rem] text-[var(--t1)] leading-none mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-[11px] text-[var(--t3)] tracking-[0.06em]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Education card */}
            <Reveal delay={0.18}>
              <div className="p-5 border border-[var(--b1)] rounded-lg bg-[var(--bg2)]">
                <p
                  className="text-[11px] tracking-[0.16em] uppercase text-[var(--t3)] mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Education
                </p>
                <p className="text-[15px] font-semibold text-[var(--t1)] mb-1">
                  Bachelor of Computer Applications
                </p>
                <p className="text-[13px] text-[var(--t2)]">Vivekananda Global University, Jaipur</p>
                <p
                  className="text-[12px] text-[var(--t3)] mt-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  2025 – 2028
                </p>
              </div>
            </Reveal>

            {/* Availability */}
            <Reveal delay={0.26}>
              <div className="mt-4 p-5 border border-[var(--b2)] rounded-lg bg-[var(--bg2)]">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full bg-green-400"
                    style={{ animation: 'pulseDot 2s infinite' }}
                  />
                  <span className="text-[13px] font-semibold text-[var(--t1)]">Available now</span>
                </div>
                <p className="text-[12px] text-[var(--t3)] leading-relaxed">
                  Actively seeking remote backend engineering opportunities.
                  Open to full-time remote roles globally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
