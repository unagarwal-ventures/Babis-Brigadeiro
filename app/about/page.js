import ImagePlaceholder from '@/components/ImagePlaceholder'
import Link from 'next/link'

const steps = [
  {
    step: '01',
    title: 'Premium Ingredients',
    desc: 'We source only the finest chocolate, sweetened condensed milk, and natural flavorings — no shortcuts, no compromise, ever.',
  },
  {
    step: '02',
    title: 'Slow-Cooked by Hand',
    desc: "Each batch is stirred by hand over a low flame until it reaches the perfect fudgy consistency. You simply can't rush perfection.",
  },
  {
    step: '03',
    title: 'Rolled with Love',
    desc: 'Every single brigadeiro is hand-rolled and finished with its signature coating — chocolate sprinkles, coconut, crushed nuts, or more.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-choco-700 pt-[100px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
            Our story
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-cream italic leading-tight">
            The Woman Behind<br />the Brigadeiro
          </h1>
        </div>
      </section>
      <div className="bg-cream">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full bg-choco-700">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="#FDF8F0" />
        </svg>
      </div>

      {/* ── Babi's Story ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <ImagePlaceholder
                label="[PHOTO: Babi in the kitchen]"
                className="w-full h-full"
                gradient="from-rose-300 to-amber-200"
              />
            </div>
            {/* Accent squares */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold-brigadeiro/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-rose-light/40 -z-10" />
          </div>
          <div>
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              My story
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl italic text-choco-700 mb-6 leading-snug">
              From Brazil,<br />with sweetness
            </h2>
            <div className="space-y-4 text-choco-500 font-lato leading-relaxed">
              <p>
                [BABI'S STORY: Background, Brazilian roots, and how she learned to make brigadeiros from family recipes passed down through generations.]
              </p>
              <p>
                Growing up in Brazil, brigadeiros were more than just a sweet treat — they were part of every celebration, every gathering, every moment of joy. When I moved away from home, making brigadeiros became my way of keeping those memories alive and sharing a piece of Brazil with everyone around me.
              </p>
              <p>
                What started as making batches for friends and family quickly grew into something bigger. Watching people's faces light up with that first bite — that's what makes everything worth it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 px-6 bg-[#F5EDE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
              The craft
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl italic text-choco-700">
              How We Make Our Brigadeiros
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl p-8 border border-[#EDE0CF] hover:shadow-md transition-shadow">
                <p className="font-playfair text-7xl italic text-gold-brigadeiro/20 font-bold leading-none mb-3">
                  {step}
                </p>
                <h3 className="font-playfair text-xl italic text-choco-700 mb-3">{title}</h3>
                <p className="text-choco-500 font-lato text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kitchen photo ── */}
      <section className="py-0 bg-[#F5EDE0]">
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-3xl overflow-hidden h-72 md:h-96 shadow-xl">
            <ImagePlaceholder
              label="[PHOTO: Babi's kitchen — brigadeiros being made]"
              className="w-full h-full"
              gradient="from-amber-800 to-choco-600"
            />
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 px-6 bg-choco-700 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-6">
            Our mission
          </p>
          <blockquote className="font-playfair text-3xl md:text-4xl italic text-cream leading-relaxed">
            "To bring a little taste of Brazil into your life — one handcrafted brigadeiro at a time."
          </blockquote>
          <p className="text-cream/40 font-lato mt-6 text-sm">— Babi</p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-brigadeiro text-white px-8 py-4 rounded-full font-lato font-medium hover:bg-gold-dark transition-all hover:-translate-y-px hover:shadow-lg"
            >
              Order Your Brigadeiros →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
