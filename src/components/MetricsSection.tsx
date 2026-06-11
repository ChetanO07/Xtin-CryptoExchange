import { useReveal } from '../hooks'
import { revealStyle } from './ui'

const metrics = [
  { value: '25,000+', label: 'Transactions' },
  { value: '99.8%', label: 'Successful Settlements' },
  { value: '5 min', label: 'Average Verification' },
  { value: '15+', label: 'Supported Wallets' },
]

export default function MetricsSection() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section ref={ref} className={`py-14 sm:py-18 ${visible ? 'is-visible' : ''}`} aria-label="Platform metrics">
      <div className="section-shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="reveal-item rounded-lg border border-white/10 bg-white/[0.035] p-6 text-center" style={revealStyle(index * 80)}>
              <p className="text-3xl font-semibold tracking-tight text-offwhite sm:text-4xl">{metric.value}</p>
              <p className="mt-3 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
