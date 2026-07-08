import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from './AnimatedCounter'

interface Stat {
  value: number
  decimals?: number
  suffix?: string
  label: string
  fillPercent: number
}

const stats: Stat[] = [
  { value: 210, suffix: 'K+', label: 'Active Members', fillPercent: 85 },
  { value: 12, suffix: 'K+', label: 'Sq Ft Facility', fillPercent: 60 },
  { value: 24, suffix: '/7', label: 'Always Open', fillPercent: 95 },
  { value: 4.8, decimals: 1, suffix: '/5', label: 'Member Rated', fillPercent: 75 },
]

function RingStat({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const radius = 26
  const circumference = 2 * Math.PI * radius

  return (
    <div
      ref={ref}
      className="text-center py-7 px-1 border-r border-line last:border-r-0"
    >
      <div className="relative w-16 h-16 mx-auto mb-3.5">
        <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#1D1E21"
            strokeWidth="6"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#FF4E1F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: isInView
                ? circumference - (stat.fillPercent / 100) * circumference
                : circumference,
            }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
          />
        </svg>
      </div>
      <div className="font-display font-black text-4xl mt-2">
        <AnimatedCounter
          value={stat.value}
          decimals={stat.decimals}
          suffix={stat.suffix}
        />
      </div>
      <div className="text-[11px] text-steel uppercase tracking-wider mt-1.5">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line max-w-[1180px] mx-auto md:px-8">
      {stats.map((stat, i) => (
        <RingStat key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  )
}