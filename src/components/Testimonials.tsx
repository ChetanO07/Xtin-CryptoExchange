import { Star } from 'lucide-react'
import { useReveal } from '../hooks'
import { SectionHeading, revealStyle } from './ui'

const testimonials = [
  {
    quote: 'The escrow flow made a high-value BTC purchase feel orderly. I could see exactly when funds were held, when the transaction confirmed, and when settlement happened.',
    name: 'Maya R.',
    role: 'Verified buyer',
  },
  {
    quote: 'It feels much cleaner than using a traditional exchange for a direct sale. I keep custody until the buyer has funds in escrow, then the release process is transparent.',
    name: 'Arjun S.',
    role: 'BTC seller',
  },
  {
    quote: 'Our team needed auditability without a noisy trading interface. XtinTrade puts the trust layer front and center, which is exactly what direct marketplace deals need.',
    name: 'Leah K.',
    role: 'Treasury operations',
  },
]

export default function Testimonials() {
  const [ref, visible] = useReveal<HTMLElement>()

  return (
    <section ref={ref} className={`py-18 sm:py-24 ${visible ? 'is-visible' : ''}`} aria-labelledby="testimonials-heading">
      <div className="section-shell">
        <div className="reveal-item">
          <SectionHeading
            eyebrow="Trusted by operators"
            title="A direct-trade experience that feels calm, premium, and accountable."
            description="Placeholder voices representing buyers, sellers, and teams who need trust without surrendering wallet control."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.name} className="reveal-item surface-card rounded-lg p-6" style={revealStyle(index * 100)}>
              <div className="flex gap-1 text-gold" aria-label="Five star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-6 text-base leading-7 text-muted-strong">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-sm font-semibold text-emerald">
                  {testimonial.name.slice(0, 1)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-offwhite">{testimonial.name}</span>
                  <span className="block text-xs text-muted">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
