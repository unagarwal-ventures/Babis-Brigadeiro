'use client'

import { useState } from 'react'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { products } from '@/lib/products'

const categories = [
  { id: 'all', label: 'All Flavors' },
  { id: 'chocolate', label: '🍫 Chocolate' },
  { id: 'fruity', label: '🍓 Fruity' },
  { id: 'nutty', label: '🌰 Nutty' },
  { id: 'seasonal', label: '🌸 Seasonal' },
]

export default function MenuPage() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-choco-700 pt-[100px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
            Handcrafted flavors
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-cream italic">Our Menu</h1>
          <p className="text-cream/60 font-lato mt-4 max-w-md mx-auto">
            Every brigadeiro is made to order with premium ingredients and lots of love.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-cream">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full bg-choco-700">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="#FDF8F0" />
        </svg>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="bg-cream sticky top-[72px] z-30 border-b border-[#EDE0CF]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-2.5 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-lato text-sm font-medium transition-all ${
                active === cat.id
                  ? 'bg-choco-700 text-cream shadow-sm'
                  : 'bg-white text-choco-500 border border-[#EDE0CF] hover:border-choco-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="py-16 px-6 bg-cream min-h-[50vh]">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🌸</p>
              <p className="text-choco-400 font-playfair text-xl italic">
                Seasonal flavors coming soon — check back soon!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product) => (
                <MenuCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Pricing & Ordering Info ── */}
      <section className="py-16 px-6 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-4xl italic text-choco-700">Pricing & How to Order</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { icon: '🎁', size: 'Box of 12', note: 'Perfect for personal gifts or small gatherings' },
              { icon: '🎉', size: 'Box of 24', note: 'Great for parties and events' },
              { icon: '✨', size: 'Custom Order', note: 'Bulk or bespoke arrangements for any occasion' },
            ].map(({ icon, size, note }) => (
              <div key={size} className="bg-white rounded-2xl p-6 text-center border border-[#EDE0CF] hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-playfair text-xl italic text-choco-700 mb-2">{size}</h3>
                <p className="text-choco-500 font-lato text-sm">{note}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#EDE0CF] text-center">
            <p className="text-choco-500 font-lato mb-1">
              <strong className="text-choco-700">Minimum order:</strong> 1 box of 12
              &nbsp;·&nbsp;
              <strong className="text-choco-700">Lead time:</strong> 48–72 hours
              &nbsp;·&nbsp;
              <strong className="text-choco-700">Area:</strong> [SERVICE AREA]
            </p>
            <p className="text-choco-400 font-lato text-sm mb-5">
              Local pickup & delivery available. Delivery fees apply based on distance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-brigadeiro text-white px-8 py-3.5 rounded-full font-lato font-medium hover:bg-gold-dark transition-all hover:-translate-y-px hover:shadow-md"
            >
              Place a Custom Order →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Menu Product Card ─── */
function MenuCard({ product }) {
  const [size, setSize] = useState('unit')

  const prices = {
    unit:  { label: 'Per unit',   price: product.pricePerUnit },
    box12: { label: 'Box of 12',  price: product.priceBox12 },
    box24: { label: 'Box of 24',  price: product.priceBox24 },
  }

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EDE0CF]">
      <div className="relative aspect-square overflow-hidden">
        <ImagePlaceholder
          label={`[PHOTO: ${product.name}]`}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          gradient={product.gradient}
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gold-brigadeiro text-white text-xs font-lato font-medium px-3 py-1 rounded-full">
            Bestseller
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 text-choco-500 text-xs font-lato font-medium px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-2xl italic text-choco-700 mb-1">{product.name}</h3>
        <p className="text-gold-brigadeiro font-lato text-xs mb-2">{product.tasteNotes}</p>
        <p className="text-choco-500 font-lato text-sm leading-relaxed mb-5">{product.description}</p>

        {/* Size toggle */}
        <div className="flex gap-1.5 mb-5">
          {Object.entries(prices).map(([key, info]) => (
            <button
              key={key}
              onClick={() => setSize(key)}
              className={`flex-1 py-1.5 text-xs font-lato font-medium rounded-lg transition-colors ${
                size === key
                  ? 'bg-choco-700 text-cream'
                  : 'bg-[#F5EDE0] text-choco-500 hover:bg-[#EDE0CF]'
              }`}
            >
              {info.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-playfair text-3xl text-gold-brigadeiro italic">
            ${prices[size].price.toFixed(2)}
          </p>
          <Link
            href="/contact"
            className="bg-choco-700 text-cream px-5 py-2.5 rounded-full text-sm font-lato font-medium hover:bg-choco-600 transition-colors"
          >
            Add to Order
          </Link>
        </div>
      </div>
    </div>
  )
}
