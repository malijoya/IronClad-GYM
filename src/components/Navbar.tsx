import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFormOpen])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-bg/85 backdrop-blur-lg border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-gradient-to-b from-bg/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Dumbbell className="text-accent transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" size={28} />
          <span className="font-display font-black text-2xl tracking-widest text-chalk uppercase mt-1">Ironclad</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] tracking-widest text-steel uppercase font-semibold">
          {['Programs', 'Facility', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-white transition-colors py-2 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button 
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 78, 31, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-bg px-7 py-3 text-[13px] font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors inline-block"
        >
          Join Now
        </motion.button>
      </div>

      {/* Join Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-bg/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-zinc-900 border border-line p-8 shadow-2xl backdrop-blur-md rounded-xl my-auto"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <h2 className="font-display font-black text-3xl uppercase mb-2 text-chalk">Join Ironclad</h2>
              <p className="text-muted text-sm mb-6">Send us your details and we'll get back to you with membership options.</p>
              
              <form 
                className="flex flex-col gap-4" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setIsFormOpen(false); 
                  alert('Thank you! We will get in touch with you shortly.'); 
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted mb-1 font-semibold">Full Name</label>
                  <input type="text" id="name" required className="w-full bg-black/50 border border-line px-4 py-3 text-chalk placeholder:text-steel focus:outline-none focus:border-accent transition-colors rounded-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted mb-1 font-semibold">Email Address</label>
                  <input type="email" id="email" required className="w-full bg-black/50 border border-line px-4 py-3 text-chalk placeholder:text-steel focus:outline-none focus:border-accent transition-colors rounded-lg" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-muted mb-1 font-semibold">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-black/50 border border-line px-4 py-3 text-chalk placeholder:text-steel focus:outline-none focus:border-accent transition-colors rounded-lg" placeholder="(555) 000-0000" />
                </div>
                <button type="submit" className="bg-accent text-bg font-bold uppercase tracking-widest py-4 mt-2 hover:bg-white transition-colors rounded-lg">
                  Send Details
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
