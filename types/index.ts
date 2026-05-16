export type ActiveSection = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact'

export interface Project {
  id: string
  title: string
  desc: string
  stack: string[]
  cat: string
  github: string
  icon: string
  featured: boolean
  demo?: string
}

export interface SkillCategory {
  cat: string
  items: { n: string; v: number }[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  type: string
  bullets: string[]
  stack: string[]
}
