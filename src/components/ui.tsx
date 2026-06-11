import type { CSSProperties, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  )
}

type IconBadgeProps = {
  icon: LucideIcon
  tone?: 'emerald' | 'gold' | 'neutral'
  className?: string
}

export function IconBadge({ icon: Icon, tone = 'emerald', className = '' }: IconBadgeProps) {
  const toneClass = {
    emerald: 'border-emerald/20 bg-emerald/10 text-emerald',
    gold: 'border-gold/25 bg-gold/10 text-gold',
    neutral: 'border-white/10 bg-white/5 text-muted-strong',
  }[tone]

  return (
    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${toneClass} ${className}`}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  )
}

type CTAButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CTAButton({ children, href, variant = 'primary', className = '' }: CTAButtonProps) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]'
  const styles =
    variant === 'primary'
      ? 'bg-emerald text-emerald-ink shadow-[0_18px_45px_rgba(16,185,129,0.22)] hover:bg-emerald-soft'
      : 'border border-white/12 bg-white/[0.03] text-offwhite hover:border-emerald/40 hover:bg-emerald/8'

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {variant === 'primary' ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </a>
  )
}

export function revealStyle(delay: number): CSSProperties {
  return { '--delay': `${delay}ms` } as CSSProperties
}
