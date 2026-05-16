'use client'
import { motion } from 'framer-motion'
import Section, { SectionMeta, Reveal } from '@/components/ui/Section'
import { experience } from '@/lib/data'
import { Briefcase, GraduationCap, GitBranch } from 'lucide-react'

const ICON = { work: Briefcase, oss: GitBranch, edu: GraduationCap } as const

export default function ExperienceSection() {
  return (
    <Section id="experience" className="py-28 bg-[var(--bg2)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal><SectionMeta num="04" label="Journey" /></Reveal>
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-[var(--t1)] mb-16"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            How I got here.
          </h2>
        </Reveal>

        <div className="max-w-2xl space-y-0">
          {experience.map((exp, i) => {
            const Icon = ICON[exp.type as keyof typeof ICON] ?? Briefcase
            const isLast = i === experience.length - 1
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6"
              >
                {/* Rail */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--b2)] bg-[var(--bg2)] z-10">
                    <Icon size={14} className="text-[var(--t2)]" />
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-[var(--b1)] mt-2 min-h-[2rem]" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-12'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pt-1">
                    <div>
                      <h3 className="text-[15px] font-semibold text-[var(--t1)] leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-[13px] text-[var(--t3)] mt-0.5">{exp.company}</p>
                    </div>
                    <span
                      className="text-[11px] text-[var(--t3)] border border-[var(--b1)] rounded-full px-3 py-1 whitespace-nowrap"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-[13px] text-[var(--t2)] leading-relaxed font-light">
                        <span className="text-[var(--t3)] flex-shrink-0 mt-0.5 text-[10px]">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] text-[var(--t3)] border border-[var(--b1)] rounded px-2 py-0.5"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
