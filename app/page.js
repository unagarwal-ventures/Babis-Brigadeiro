import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { products } from '@/lib/products'

/* ─── Testimonials data ─── */
const testimonials = [
  {
    quote:
      "These brigadeiros are absolutely divine! I ordered a box of 24 for my daughter's birthday and they disappeared in minutes. Every single guest asked where I got them.",
    name: 'Sarah M.',
    occasion: 'Birthday Party',
    stars: 5,
  },
  {
    quote:
      "The pistachio flavor is something else. Babi's brigadeiros are the real deal — authentic, indulgent, and made with so much care. I'm ordering again this week.",
    name: 'Carlos R.',
    occasion: 'Corporate Event',
    stars: 5,
  },
  {
    quote:
      "I discovered brigadeiros through Babi and now I'm completely hooked. The classic chocolate is perfection in a single bite. Fast, sweet, and beautifully packaged.",
    name: 'Emily K.',
    occasion: 'Personal Order',
    stars: 5,
  },
]

/* ─── Home Page ─── */
export default function Home() {
  const featured = products.filter((p) => p.featured)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-choco-700">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-choco-800/60 via-transparent to-choco-700" />

        {/* Decorative circles */}
        <div className="absolute top-24 right-10 w-64 h-64 rounded-full bg-gold-brigadeiro/5 blur-3xl" />
        <div className="absolute bottom-32 left-10 w-80 h-80 rounded-full bg-rose-brigadeiro/10 blur-3xl" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-6">
            ✦ &nbsp;Authentic Brazilian Sweets&nbsp; ✦
          </p>
          <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl text-cream italic font-bold mb-6 leading-tight">
            Babi's<br />Brigadeiro
          </h1>
          <p className="text-cream/70 font-lato text-lg md:text-xl mb-12 max-w-sm mx-auto leading-relaxed">
            Handcrafted with love.<br />One bite at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold-brigadeiro text-white px-9 py-4 rounded-full font-lato font-medium text-lg hover:bg-gold-dark transition-all hover:shadow-xl hover:shadow-gold-brigadeiro/30 hover:-translate-y-0.5"
            >
              Order Now
            </Link>
            <Link
              href="/menu"
              className="border-2 border-cream/40 text-cream px-9 py-4 rounded-full font-lato font-medium text-lg hover:border-cream hover:bg-cream/10 transition-all"
            >
              See Menu
            </Link>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 inset-x-0">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0 35C360 70 1080 0 1440 35V70H0V35Z" fill="#FDF8F0" />
          </svg>
        </div>
      </section>

      {/* ── Meet Babi ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="relative flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-[10px] border-gold-brigadeiro/15 shadow-2xl">
              <ImagePlaceholder
                label="[PHOTO: Babi portrait]"
                className="w-full h-full"
                gradient="from-rose-300 to-amber-200"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-gold-brigadeiro/10 -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-rose-light/50 -z-10" />
          </div>
          <div>
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              Meet the maker
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-choco-700 italic mb-6 leading-snug">
              Made by Babi,<br />with love
            </h2>
            <p className="text-choco-500 font-lato text-lg leading-relaxed mb-4">
              [BABI'S STORY: 2–3 sentences about her background, Brazilian roots, and her passion for making brigadeiros.]
            </p>
            <p className="text-choco-500 font-lato leading-relaxed mb-8">
              Every brigadeiro is made by hand in my home kitchen, using the same traditional recipe passed down through generations — with a few of my own delicious twists.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-gold-brigadeiro font-lato font-medium hover:gap-3 transition-all group"
            >
              Read my story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Flavors ── */}
      <section className="py-24 px-6 bg-[#F5EDE0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              Our bestsellers
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-choco-700 italic">
              Irresistible Favorites
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-choco-700 text-cream px-9 py-4 rounded-full font-lato font-medium hover:bg-choco-600 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              Happy customers
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-choco-700 italic">
              What People Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#EDE0CF] hover:shadow-md transition-shadow"
              >
                <div className="text-gold-brigadeiro text-xl mb-4 tracking-widest">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="text-choco-500 font-lato italic mb-5 leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                <p className="text-choco-700 font-lato font-medium text-sm">— {t.name}</p>
                <p className="text-choco-400 font-lato text-xs mt-0.5">{t.occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ── */}
      <section className="py-24 px-6 bg-choco-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              Follow along
            </p>
            <h2 className="font-playfair text-4xl italic text-cream">See Our Creations</h2>
            <p className="text-cream/50 font-lato text-sm mt-2">[INSTAGRAM HANDLE]</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: '[Gallery: Classic Chocolate arrangement]', gradient: 'from-amber-900 to-stone-800' },
              { label: '[Gallery: Pistachio close-up]', gradient: 'from-green-800 to-emerald-700' },
              { label: '[Gallery: Birthday event table]', gradient: 'from-rose-600 to-pink-700' },
              { label: '[Gallery: Coconut beijinho]', gradient: 'from-amber-200 to-yellow-300' },
            ].map((item, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <ImagePlaceholder
                  label={item.label}
                  className="w-full h-full group-hover:opacity-80 transition-opacity duration-300"
                  gradient={item.gradient}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-gold-brigadeiro text-gold-brigadeiro px-7 py-3 rounded-full font-lato font-medium hover:bg-gold-brigadeiro hover:text-white transition-all"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-28 px-6 bg-gradient-to-br from-gold-brigadeiro to-gold-dark relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-white italic mb-4 leading-snug">
            Ready to indulge?
          </h2>
          <p className="text-white/75 font-lato text-lg mb-10 leading-relaxed">
            Place a custom order for your next birthday, baby shower, corporate event — or simply because you deserve a treat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gold-dark px-9 py-4 rounded-full font-lato font-medium text-lg hover:bg-cream transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Place an Order
            </Link>
            <a
              href="https://wa.me/[WHATSAPP NUMBER]"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-9 py-4 rounded-full font-lato font-medium text-lg hover:bg-white/15 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Featured Product Card ─── */
function FeaturedCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-[#EDE0CF]">
      <div className="aspect-square overflow-hidden">
        <ImagePlaceholder
          label={`[PHOTO: ${product.name}]`}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          gradient={product.gradient}
        />
      </div>
      <div className="p-6">
        <p className="text-gold-brigadeiro font-lato text-xs uppercase tracking-wide mb-1">
          {product.tasteNotes}
        </p>
        <h3 className="font-playfair text-2xl italic text-choco-700 mb-2">{product.name}</h3>
        <p className="text-choco-500 font-lato text-sm leading-relaxed mb-5 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-choco-400 font-lato text-xs">From</p>
            <p className="text-gold-brigadeiro font-lato font-bold text-xl">
              ${product.pricePerUnit.toFixed(2)}
              <span className="text-xs text-choco-400 font-normal ml-1">/ea</span>
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-choco-700 text-cream px-5 py-2.5 rounded-full text-sm font-lato font-medium hover:bg-choco-600 transition-colors"
          >
            Order →
          </Link>
        </div>
      </div>
    </div>
  )
}
