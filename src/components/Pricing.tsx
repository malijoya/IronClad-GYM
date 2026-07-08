import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Plan {
  tier: string
  price: string
  period: string
  billing: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    tier: 'Day Pass',
    price: '$15',
    period: '/day',
    billing: 'Billed once',
    features: [
      'Full facility access for 24h',
      'Strength floor + conditioning bay',
      'No guest privileges',
    ],
  },
  {
    tier: 'Monthly',
    price: '$69',
    period: '/mo',
    billing: 'Billed monthly · no lock-in',
    features: [
      'Unlimited 24/7 facility access',
      '2 coached blocks per month',
      'Guest pass, 1x per month',
      'Priority equipment booking',
    ],
    featured: true,
  },
  {
    tier: 'Annual',
    price: '$690',
    period: '/yr',
    billing: 'Save $138 · 2 months free',
    features: [
      'Everything in Monthly',
      'Unlimited coached blocks',
      '1-on-1 quarterly check-in',
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-surface border-t border-b border-line py-24"
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end gap-6 flex-wrap mb-14"
        >
          <div>
            <span className="font-mono text-accent text-xs uppercase tracking-widest mb-3.5 block">
              Membership
            </span>
            <h2 className="text-3xl md:text-5xl max-w-[600px]">
              No lock-in. No hidden plates.
            </h2>
          </div>
          <p className="text-muted max-w-[320px] text-[15px]">
            Cancel anytime. No hidden fees, no annual enhancement fees. Just straightforward training.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.tier}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              whileHover={{ y: -6 }}
              className={`relative border p-9 px-7 flex flex-col overflow-hidden ${
                plan.featured
                  ? 'border-accent bg-gradient-to-b from-accent-dim to-bg'
                  : 'border-line bg-bg'
              }`}
            >
              {plan.featured && (
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"
                />
              )}

              <div
                className={`relative font-mono text-xs uppercase tracking-wide mb-4 ${
                  plan.featured ? 'text-accent' : 'text-steel'
                }`}
              >
                {plan.tier}
              </div>
              <div className="relative font-display font-black text-5xl mb-1">
                {plan.price}
                <sup className="font-mono text-base align-super">
                  {plan.period}
                </sup>
              </div>
              <div className="relative text-muted text-[13px] mb-6">
                {plan.billing}
              </div>

              <ul className="relative text-sm mb-7 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 py-2.5 border-t border-line"
                  >
                    <Check size={14} className="text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative font-bold text-sm uppercase tracking-wide px-6 py-4 transition-colors ${
                  plan.featured
                    ? 'bg-accent text-bg'
                    : 'border border-line text-chalk'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}