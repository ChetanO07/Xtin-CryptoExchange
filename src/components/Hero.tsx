import type { CSSProperties, ReactNode } from 'react'
import { ArrowRight, CheckCircle, Landmark, ShieldCheck, Users, Wallet } from 'lucide-react'
import { CTAButton } from './ui'

export default function Hero() {
  return (
    <section className="page-shell relative overflow-hidden pb-20 pt-32 sm:pb-24 lg:pt-40">
      <div className="section-shell">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="min-w-0 w-full max-w-[calc(100vw-32px)] sm:max-w-3xl">
            <div className="reveal-item is-visible inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Escrow protected direct crypto trades
            </div>
            <h1 className="reveal-item is-visible mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-offwhite sm:text-6xl lg:text-7xl">
              <span className="block">Buy and Sell</span>
              <span className="block">Crypto Directly.</span>
              <span className="block">Securely.</span>
            </h1>
            <p className="reveal-item is-visible mt-6 max-w-[calc(100vw-32px)] text-lg leading-8 text-muted sm:max-w-2xl sm:text-xl" style={{ '--delay': '80ms' } as CSSProperties}>
              Trade directly with verified participants while our escrow system protects every transaction.
            </p>
            <div className="reveal-item is-visible mt-9 flex max-w-[calc(100vw-32px)] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center" style={{ '--delay': '150ms' } as CSSProperties}>
              <CTAButton href="#connect" className="w-full sm:w-auto">
                <Wallet className="h-4 w-4" aria-hidden="true" />
                Connect Wallet
              </CTAButton>
              <CTAButton href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
                See How It Works
              </CTAButton>
            </div>
            <dl className="reveal-item is-visible mt-10 grid max-w-[calc(100vw-32px)] grid-cols-3 gap-4 border-y border-white/10 py-5 sm:max-w-xl" style={{ '--delay': '220ms' } as CSSProperties}>
              {[
                ['Verified', 'participants'],
                ['Wallet', 'to wallet'],
                ['Escrow', 'protected'],
              ].map(([value, label]) => (
                <div key={value}>
                  <dt className="text-sm font-semibold text-offwhite">{value}</dt>
                  <dd className="mt-1 text-xs text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal-item is-visible min-w-0 w-[calc(100vw-32px)] max-w-full sm:w-full lg:justify-self-end" style={{ '--delay': '120ms' } as CSSProperties}>
            <div className="premium-border surface-card float-soft relative min-h-[500px] w-full max-w-full overflow-hidden rounded-lg p-5 sm:min-h-[540px] sm:p-7">
              <div className="flow-grid absolute inset-0 opacity-70 z-0" />

              <div className="relative z-20 grid h-full min-h-[490px] grid-rows-[1fr_auto]">
                <div className="relative">
                  <FlowNode
                    className="left-0 top-[42%]"
                    icon={<Users className="h-6 w-6" aria-hidden="true" />}
                    label="Buyer"
                    detail="Wallet connected"
                  />
                  <FlowNode
                    className="left-1/2 top-[49%] -translate-x-1/2"
                    icon={<Landmark className="h-6 w-6" aria-hidden="true" />}
                    label="Escrow"
                    detail="Fiat protected"
                    featured
                  />
                  <FlowNode
                    className="right-0 top-[42%]"
                    icon={<Wallet className="h-6 w-6" aria-hidden="true" />}
                    label="Seller"
                    detail="Crypto sent"
                    tone="gold"
                  />
                  <div className="absolute left-1/2 top-[6%] z-20 w-[min(88%,430px)] -translate-x-1/2 rounded-lg border border-white/10 bg-bg/55 p-4 backdrop-blur sm:w-[min(78%,430px)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Protected order</p>
                        <p className="mt-1 text-xl font-semibold text-offwhite">0.84 BTC</p>
                      </div>
                      <div className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
                        Verified
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted">
                      <span className="rounded-md bg-white/[0.04] px-2 py-2">Order locked</span>
                      <span className="rounded-md bg-white/[0.04] px-2 py-2">Fiat held</span>
                      <span className="rounded-md bg-white/[0.04] px-2 py-2">BTC tracked</span>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-lg border border-white/10 bg-bg/70 p-4 backdrop-blur">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="status-pulse flex h-10 w-10 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-emerald">
                        <CheckCircle className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-offwhite">Escrow verification active</p>
                        <p className="text-xs text-muted">Chain confirmation checked before fiat release.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald">
                      Live status
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              <svg className="absolute inset-0 h-full w-full z-30 pointer-events-none" viewBox="0 0 680 540" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="flowLine" x1="80" x2="600" y1="246" y2="246" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="0.55" stopColor="#34D399" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                  <marker id="arrowHead" markerHeight="10" markerWidth="10" orient="auto" refX="8" refY="5">
                    <path d="M0 0L10 5L0 10Z" fill="#34D399" />
                  </marker>
                </defs>
                <path className="hero-dash" d="M116 245 C220 120 320 118 340 245 C360 372 460 370 565 245" stroke="url(#flowLine)" strokeLinecap="round" strokeWidth="3" markerEnd="url(#arrowHead)" />
                <path d="M126 404 C245 468 433 468 554 404" stroke="rgba(249,250,251,0.16)" strokeDasharray="8 12" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type FlowNodeProps = {
  icon: ReactNode
  label: string
  detail: string
  className: string
  tone?: 'emerald' | 'gold'
  featured?: boolean
}

function FlowNode({ icon, label, detail, className, tone = 'emerald', featured = false }: FlowNodeProps) {
  const toneClass = tone === 'gold' ? 'border-gold/25 bg-gold/10 text-gold' : 'border-emerald/25 bg-emerald/10 text-emerald'

  return (
    <div className={`absolute flex w-[96px] flex-col items-center text-center sm:w-[148px] ${className}`}>
      <div className={`flex h-16 w-16 items-center justify-center rounded-lg border ${toneClass} ${featured ? 'h-20 w-20 bg-emerald text-emerald-ink shadow-[0_20px_60px_rgba(16,185,129,0.28)]' : ''}`}>
        {icon}
      </div>
      <div className="mt-3 rounded-lg border border-white/10 bg-bg/70 px-3 py-2 backdrop-blur">
        <p className="text-sm font-semibold text-offwhite">{label}</p>
        <p className="mt-1 text-[11px] text-muted">{detail}</p>
      </div>
    </div>
  )
}
