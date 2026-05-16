'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Section, { SectionMeta, Reveal } from '@/components/ui/Section'
import { projects } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

const FILTERS = [
  { label: 'All',     value: 'all'     },
  { label: 'Backend', value: 'backend' },
  { label: 'AI',      value: 'ai'      },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <Section id="projects" className="py-28 bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal><SectionMeta num="03" label="Work" /></Reveal>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <Reveal>
            <h2
              className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.025em] text-[var(--t1)]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Things I've shipped.
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-1.5 rounded-full text-[12px] border transition-all ${
                    filter === f.value
                      ? 'bg-[var(--t1)] text-[var(--bg)] border-transparent'
                      : 'border-[var(--b1)] text-[var(--t3)] hover:border-[var(--b2)] hover:text-[var(--t2)]'
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--b1)]">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--bg)] p-7 group hover:bg-[var(--bg2)] transition-colors cursor-default"
              >
                {/* Icon + link */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-2xl select-none" aria-hidden>{p.icon}</span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 w-7 h-7 flex items-center justify-center border border-[var(--b2)] rounded text-[var(--t3)] hover:text-[var(--t1)] hover:border-[var(--t1)] transition-all"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold text-[var(--t1)] mb-2.5 leading-snug group-hover:text-[var(--t1)] transition-colors">
                  {p.title}
                </h3>

                {/* Desc */}
                <p className="text-[13px] text-[var(--t3)] leading-[1.75] mb-5 line-clamp-3 font-light">
                  {p.desc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--b1)]">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] text-[var(--t3)]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s}
                      <span className="ml-1.5 opacity-30">·</span>
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span
                      className="text-[10px] text-[var(--t3)]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
