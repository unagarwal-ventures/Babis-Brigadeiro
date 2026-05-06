import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  title: "Babi's Brigadeiro — Handcrafted with love",
  description:
    'Authentic Brazilian brigadeiros made by hand with love. Order classic chocolate, pistachio, coconut, passion fruit, and more. Serving [SERVICE AREA].',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato bg-cream text-choco-700 antialiased">
        <Navbar />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Sticky mobile Order CTA */}
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-cream/95 backdrop-blur-sm border-t border-choco-100 px-4 py-3">
          <Link
            href="/contact"
            className="block w-full bg-choco-700 text-cream py-4 rounded-2xl font-lato font-medium text-center text-base hover:bg-choco-600 transition-colors"
          >
            Order Now 🍫
          </Link>
        </div>
      </body>
    </html>
  )
}
