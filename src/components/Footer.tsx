const footerColumns = [
  {
    title: 'Ironclad',
    links: ['Our Standard', 'Careers', 'Press'],
  },
  {
    title: 'Train',
    links: ['Our Facility', 'Coached Blocks', 'App'],
  },
  {
    title: 'Membership',
    links: ['Pricing', 'Corporate Plans', 'Freeze / Cancel'],
  },
  {
    title: 'Support',
    links: ['Contact', 'FAQ'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-line py-16 pb-9">
        
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex justify-between flex-wrap gap-10 mb-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs uppercase tracking-wide text-steel mb-4">
                {column.title}
              </h4>
              {column.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-muted text-sm mb-2.5 hover:text-chalk transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between flex-wrap gap-2.5 text-steel text-xs border-t border-line pt-6">
          <span>© 2026 Ironclad Strength Co. All rights reserved.</span>
          <span>Built for Strength</span>
        </div>
      </div>
    </footer>
  )
}