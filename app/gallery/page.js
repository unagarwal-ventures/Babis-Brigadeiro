import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const galleryItems = [
  { id: 1, label: '[PHOTO: Classic Chocolate arrangement on marble]', gradient: 'from-amber-900 to-stone-800', span: 'col-span-2 md:col-span-1 row-span-2' },
  { id: 2, label: '[PHOTO: Pistachio close-up, vibrant green]', gradient: 'from-green-800 to-emerald-700', span: '' },
  { id: 3, label: '[PHOTO: Birthday event table setup]', gradient: 'from-rose-600 to-pink-700', span: '' },
  { id: 4, label: '[PHOTO: Coconut beijinho]', gradient: 'from-amber-100 to-yellow-200', span: '' },
  { id: 5, label: '[PHOTO: Passion fruit brigadeiros in a box]', gradient: 'from-yellow-500 to-orange-400', span: '' },
  { id: 6, label: '[PHOTO: Gift box with ribbon]', gradient: 'from-stone-700 to-amber-800', span: '' },
  { id: 7, label: '[PHOTO: Baby shower pink display]', gradient: 'from-pink-300 to-rose-300', span: '' },
  { id: 8, label: '[PHOTO: Strawberry brigadeiros]', gradient: 'from-rose-500 to-pink-400', span: '' },
  { id: 9, label: '[PHOTO: Nutella close-up, hazelnut coating]', gradient: 'from-amber-700 to-orange-800', span: '' },
  { id: 10, label: '[PHOTO: Assorted flavors overhead shot]', gradient: 'from-choco-600 to-choco-700', span: '' },
  { id: 11, label: '[PHOTO: Corporate event display]', gradient: 'from-slate-700 to-stone-700', span: '' },
  { id: 12, label: '[PHOTO: Seasonal holiday flavors]', gradient: 'from-red-800 to-green-800', span: '' },
]

const occasions = [
  { label: 'Birthday Parties', emoji: '🎂' },
  { label: 'Baby Showers', emoji: '👶' },
  { label: 'Corporate Events', emoji: '💼' },
  { label: 'Weddings', emoji: '💍' },
  { label: 'Holiday Gifts', emoji: '🎁' },
  { label: 'Just Because', emoji: '💛' },
]

export default function GalleryPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-choco-700 pt-[100px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
            Our work
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-cream italic">A Feast for the Eyes</h1>
          <p className="text-cream/50 font-lato mt-4">
            Follow us at&nbsp;<span className="text-gold-brigadeiro">[INSTAGRAM HANDLE]</span>&nbsp;for daily treats
          </p>
        </div>
      </section>
      <div className="bg-cream">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full bg-choco-700">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="#FDF8F0" />
        </svg>
      </div>

      {/* ── Gallery Grid ── */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
              >
                <ImagePlaceholder
                  label={item.label}
                  className="w-full h-full group-hover:opacity-85 transition-opacity duration-300"
                  gradient={item.gradient}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/[INSTAGRAM HANDLE]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-choco-700 text-choco-700 px-7 py-3.5 rounded-full font-lato font-medium hover:bg-choco-700 hover:text-cream transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Occasions ── */}
      <section className="py-16 px-6 bg-[#F5EDE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              No occasion too small
            </p>
            <h2 className="font-playfair text-4xl italic text-choco-700">Perfect for Every Occasion</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {occasions.map(({ label, emoji }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 text-center border border-[#EDE0CF] hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <p className="text-3xl mb-2">{emoji}</p>
                <p className="font-lato text-choco-500 font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-cream text-center">
        <p className="text-choco-400 font-lato text-sm mb-2">Love what you see?</p>
        <h2 className="font-playfair text-3xl italic text-choco-700 mb-6">
          Let's create something beautiful for you
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-choco-700 text-cream px-9 py-4 rounded-full font-lato font-medium hover:bg-choco-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Place Your Order →
        </Link>
      </section>
    </>
  )
}
