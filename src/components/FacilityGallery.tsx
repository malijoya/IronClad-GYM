import { motion } from 'framer-motion'

const images = [
  '/images/gym 3 potrait.jfif',
  '/images/gym quote 1.png',
  '/images/gym quote 2.jpg',
  '/images/gym quote 3.jpg',
  '/images/gym quote 4.jfif',
  '/images/gym quote 5.jfif',
]

export default function FacilityGallery() {
  return (
    <section id="facility" className="py-24 bg-line text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-accent text-xs uppercase tracking-widest mb-3.5 block">
            The Facility
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black max-w-[600px] mx-auto">
            Everything you need. Nothing you don't.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid overflow-hidden border border-line"
            >
              <img 
                src={src} 
                alt={`Gym view ${idx + 1}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
