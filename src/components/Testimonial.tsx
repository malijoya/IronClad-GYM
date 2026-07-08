export default function Testimonial() {
  return (
    <section className="relative py-32 text-center px-8 border-b border-line overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30 bg-fixed" 
        style={{ backgroundImage: "url('/images/gym 6.jfif')" }}
      />
      <div className="absolute inset-0 bg-bg/70 z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-black mb-10 max-w-3xl mx-auto leading-tight text-white drop-shadow-lg">"Ironclad changed the way I look at strength training. No gimmicks, just results."</h2>
        <div className="text-accent tracking-widest uppercase text-sm font-mono drop-shadow-md">- Sarah Jenkins, Member</div>
      </div>
    </section>
  )
}
