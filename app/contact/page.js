'use client'

import { useState } from 'react'
import { products } from '@/lib/products'

const occasions = [
  'Birthday Party',
  'Baby Shower',
  'Wedding',
  'Corporate Event',
  'Holiday Gift',
  'Just Because',
  'Other',
]

const quantities = [
  '1 Box — 12 pieces',
  '2 Boxes — 24 pieces',
  '3 Boxes — 36 pieces',
  '4+ Boxes (custom)',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    flavors: [],
    quantity: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))

  const toggleFlavor = (name) =>
    set(
      'flavors',
      form.flavors.includes(name)
        ? form.flavors.filter((f) => f !== name)
        : [...form.flavors, name]
    )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Replace with Formspree endpoint or any backend
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-6 pt-16">
        <div className="text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-[#F5EDE0] flex items-center justify-center mx-auto mb-6 text-5xl shadow-inner">
            🍫
          </div>
          <h2 className="font-playfair text-4xl italic text-choco-700 mb-3">Order Received!</h2>
          <p className="text-choco-500 font-lato leading-relaxed mb-8">
            Thank you, {form.name}! Babi will review your request and be in touch within 24 hours to confirm all the delicious details.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gold-brigadeiro text-white px-8 py-4 rounded-full font-lato font-medium hover:bg-gold-dark transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-choco-700 pt-[100px] pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-brigadeiro font-lato text-xs tracking-[0.35em] uppercase mb-3">
            Get in touch
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl text-cream italic">Place Your Order</h1>
          <p className="text-cream/60 font-lato mt-4 max-w-xl mx-auto">
            Fill out the form below or reach us directly via WhatsApp. We'd love to make something special for you!
          </p>
        </div>
      </section>
      <div className="bg-cream">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="block w-full bg-choco-700">
          <path d="M0 20C360 40 1080 0 1440 20V40H0V20Z" fill="#FDF8F0" />
        </svg>
      </div>

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            <div>
              <h3 className="font-playfair text-2xl italic text-choco-700 mb-5">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: '📱', label: 'WhatsApp', value: '[WHATSAPP NUMBER]' },
                  { icon: '📷', label: 'Instagram', value: '[INSTAGRAM HANDLE]' },
                  { icon: '📍', label: 'Service Area', value: '[SERVICE AREA]' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">{icon}</span>
                    <div>
                      <p className="font-lato text-xs text-choco-400 uppercase tracking-wide">{label}</p>
                      <p className="font-lato text-choco-600 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/[WHATSAPP NUMBER]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-lato font-medium hover:bg-[#1FB05A] transition-colors shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="bg-[#F5EDE0] rounded-2xl p-5 border border-[#EDE0CF]">
              <p className="font-lato text-sm text-choco-500 leading-relaxed">
                <strong className="text-choco-700">📦 Pickup & Delivery</strong>
                <br />
                Available in [SERVICE AREA]. Delivery fees apply based on distance.
              </p>
              <p className="font-lato text-sm text-choco-500 leading-relaxed mt-3">
                <strong className="text-choco-700">⏰ Response Time</strong>
                <br />
                We typically respond within 24 hours.
              </p>
              <p className="font-lato text-sm text-choco-500 leading-relaxed mt-3">
                <strong className="text-choco-700">📋 Minimum Order</strong>
                <br />
                1 box of 12 pieces. Lead time 48–72 hours.
              </p>
            </div>
          </aside>

          {/* ── Order Form ── */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-[#EDE0CF]"
          >
            <h3 className="font-playfair text-2xl italic text-choco-700 mb-6">Order Request Form</h3>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Name *">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Email *">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Phone + Occasion */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Phone / WhatsApp">
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Occasion">
                <select
                  value={form.occasion}
                  onChange={(e) => set('occasion', e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select occasion…</option>
                  {occasions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Flavors */}
            <div className="mb-4">
              <label className={labelCls}>Select Flavors</label>
              <div className="grid grid-cols-2 gap-2">
                {products.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleFlavor(p.name)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-lato transition-all border ${
                      form.flavors.includes(p.name)
                        ? 'bg-choco-700 text-cream border-choco-700'
                        : 'bg-cream text-choco-500 border-[#EDE0CF] hover:border-choco-400'
                    }`}
                  >
                    {p.emoji} {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Date */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Quantity">
                <select
                  value={form.quantity}
                  onChange={(e) => set('quantity', e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select quantity…</option>
                  {quantities.map((q) => (
                    <option key={q}>{q}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Pickup / Delivery Date">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set('date', e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>

            {/* Notes */}
            <div className="mb-7">
              <label className={labelCls}>Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Any special requests, dietary restrictions, packaging preferences…"
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-choco-700 text-cream py-4 rounded-2xl font-lato font-medium text-lg hover:bg-choco-600 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending…' : 'Send Order Request 🍫'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

const labelCls = 'block font-lato text-xs uppercase tracking-wide text-choco-400 mb-1.5'
const inputCls =
  'w-full border border-[#EDE0CF] rounded-xl px-4 py-3 font-lato text-choco-700 text-sm focus:outline-none focus:border-gold-brigadeiro bg-cream transition-colors'

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  )
}
