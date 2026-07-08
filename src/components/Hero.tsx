import { motion, type Variants } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
} satisfies Variants;

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 border-b border-line overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 mix-blend-luminosity" 
        style={{ backgroundImage: "url('/images/gym 1.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent z-0" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1180px] mx-auto px-8 relative z-10"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest mb-6"
        >
          <span className="w-6 h-px bg-accent inline-block" />
          EST. 2026 · OPEN 24/7 · IRONCLAD STRENGTH
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-black uppercase text-[48px] leading-[0.92] max-w-[920px] sm:text-[64px] md:text-[88px] lg:text-[108px]"
        >
          BUILT WHERE
          <br />
          AMERICA{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-outline"
          >
            TRAINS
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-[480px] text-muted text-[17px] mt-7 mb-10"
        >
          Real barbells. Real plates. No juice bars, no fluff — your local sanctuary for serious strength training. We built the floor you've been looking for.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
          <motion.button
            whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(255,78,31,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-accent text-bg font-bold text-sm uppercase tracking-wide px-8 py-4"
          >
            Start Free 7-Day Pass
          </motion.button>
          <motion.button
            whileHover={{ borderColor: '#7A7E85' }}
            whileTap={{ scale: 0.97 }}
            className="border border-line text-chalk font-semibold text-sm uppercase tracking-wide px-8 py-4 bg-transparent"
          >
            View Memberships
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}