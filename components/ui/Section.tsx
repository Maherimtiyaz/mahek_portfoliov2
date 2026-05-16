'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  id: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <section id={id} ref={ref} className={`border-t border-[var(--b1)] ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

/** Staggered child reveal */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Section label + number row */
export function SectionMeta({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-14">
      <span
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="text-[11px] tracking-[0.12em] text-[var(--t3)]"
      >
        {num}
      </span>
      <span
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className="text-[11px] tracking-[0.18em] uppercase text-[var(--t3)]"
      >
        {label}
      </span>
    </div>
  )
}
