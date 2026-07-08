import { motion } from 'framer-motion'

interface Program {
  num: string
  title: string
  description: string
  meta: [string, string]
  image: string
}

const programs: Program[] = [
  {
    num: '01',
    title: 'Strength Floor',
    description:
      'Power racks, deadlift platforms, and 45lb-plate loading zones. Built for squat, bench, and pull — not circuit machines.',
    meta: ['Open Access', 'Full Equipment'],
    image: '/images/gym 2.jfif'
  },
  {
    num: '02',
    title: 'Coached Blocks',
    description:
      '12-week programming blocks led by a certified strength coach. Small groups, tracked lifts, progressive overload.',
    meta: ['6/wk Classes', 'Members Only'],
    image: '/images/gym 4.jpeg'
  },
  {
    num: '03',
    title: 'Conditioning Bay',
    description:
      'Sleds, rowers, and turf lanes for the engine work that makes the strength stick. 30-minute finishers built in.',
    meta: ['Drop-In', 'Full Facility'],
    image: '/images/gym 5.webp'
  },
]

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Programs() {
  return (
    <section
      id="programs"
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
              The Floor
            </span>
            <h2 className="text-3xl md:text-5xl max-w-[600px]">
              Three ways to train. Zero guesswork.
            </h2>
          </div>
          <p className="text-muted max-w-[320px] text-[15px]">
            Top tier equipment and an atmosphere that demands hard work. We supply the tools, you bring the effort.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line"
      >
        {programs.map((program) => (
          <motion.div
            key={program.num}
            variants={fadeUp}
            className="group relative bg-surface p-10 px-8 transition-colors overflow-hidden flex flex-col justify-end min-h-[400px]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
              style={{ backgroundImage: `url('${program.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent z-0" />
            
            <div className="relative z-10">
              <div className="font-mono text-accent text-[13px] mb-5">
                {program.num}
              </div>
              <h3 className="font-display font-black uppercase text-2xl mb-3">
                {program.title}
              </h3>
              <p className="text-muted text-[14.5px] mb-5">
                {program.description}
              </p>
              <div className="flex gap-4 text-xs text-steel uppercase tracking-wide border-t border-line/30 pt-4">
                <span>{program.meta[0]}</span>
                <span>{program.meta[1]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}