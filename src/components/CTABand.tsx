import { motion } from 'framer-motion'

export default function CTABand() {
  return (
    <section className="bg-accent text-bg text-center py-24 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-bg/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-[1180px] mx-auto px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display font-black uppercase text-[34px] sm:text-5xl md:text-[64px] mb-7 leading-[1.05]"
        >
          YOUR FIRST SESSION
          <br />
          IS ON US.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-bg text-chalk font-bold text-sm uppercase tracking-wide px-9 py-5"
        >
          Claim Your 7-Day Pass
        </motion.button>
      </div>
    </section>
  )
}