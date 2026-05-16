'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Section, { SectionMeta, Reveal } from '@/components/ui/Section'
import { skills } from '@/lib/data'

const TECH = [
  'Python','FastAPI','PostgreSQL','Docker','WebSockets','JWT',
  'MongoDB','SQLAlchemy','GitHub Actions','pytest','Linux',
  'Node.js','Express','OWASP','RBAC','System Design','REST APIs',
  'Postman','Async Programming','API Security',
]

export default function SkillsSection() {
  return (
    <Section id="skills" className="py-28 bg-[var(--bg2)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal><SectionMeta num="02" label="Stack" /></Reveal>
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-[var(--t1)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Tools I build with.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[15px] text-[var(--t3)] mb-12 max-w-md font-light">
            Backend-focused with growing depth in DevOps, AI integration, and open source.
          </p>
        </Reveal>

        {/* Skill grids */}
        <div className="grid md:grid-cols-2 gap-px bg-[var(--b1)] border border-[var(--b1)] rounded-xl overflow-hidden mb-12">
          {skills.map((cat, ci) => (
            <SkillCard key={cat.cat} cat={cat} delay={ci * 0.07} />
          ))}
        </div>

        {/* Tech cloud */}
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.06 }}
                className="px-3 py-1.5 border border-[var(--b1)] rounded-full text-[11px] text-[var(--t3)] hover:border-[var(--b2)] hover:text-[var(--t2)] cursor-default transition-all"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function SkillCard({ cat, delay }: { cat: typeof skills[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref} className="bg-[var(--bg2)] p-7">
      <div className="flex items-center gap-3 mb-6">
        <span
          className="text-[11px] tracking-[0.18em] uppercase text-[var(--t3)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {cat.cat}
        </span>
        <div className="flex-1 h-px bg-[var(--b1)]" />
      </div>

      <div className="space-y-4">
        {cat.items.map((skill, si) => (
          <div key={skill.n}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[13px] text-[var(--t2)]">{skill.n}</span>
              <span
                className="text-[11px] text-[var(--t3)]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {skill.v}
              </span>
            </div>
            <div className="h-px bg-[var(--b1)] relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[var(--t1)]"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.v}%` } : {}}
                transition={{
                  duration: 1.1,
                  delay: delay + si * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
