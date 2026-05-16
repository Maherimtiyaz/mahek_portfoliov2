'use client'
import { useState, useEffect } from 'react'
import type { ActiveSection } from '@/types'

const SECTIONS: ActiveSection[] = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
