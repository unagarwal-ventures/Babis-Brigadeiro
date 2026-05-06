'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['About', '/about'],
  ['Gallery', '/gallery'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const alwaysDark = !isHome

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled || alwaysDark || menuOpen
          ? 'bg-choco-700/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-2xl italic font-bold text-cream hover:text-gold-light transition-colors"
        >
          Babi's Brigadeiro
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`font-lato text-sm transition-colors ${
                pathname === href
                  ? 'text-gold-brigadeiro'
                  : 'text-cream/80 hover:text-cream'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold-brigadeiro text-white px-5 py-2.5 rounded-full font-lato text-sm font-medium hover:bg-gold-dark transition-all hover:shadow-md hover:shadow-gold-brigadeiro/30 hover:-translate-y-px"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-center"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-0.5 bg-cream rounded-full transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream rounded-full transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-choco-700/95 backdrop-blur-md`}
      >
        <div className="px-5 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`py-3 font-lato text-base border-b border-cream/10 transition-colors ${
                pathname === href ? 'text-gold-brigadeiro' : 'text-cream/80'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 bg-gold-brigadeiro text-white py-3.5 rounded-full font-lato font-medium text-center hover:bg-gold-dark transition-colors"
          >
            Order Now 🍫
          </Link>
        </div>
      </div>
    </header>
  )
}
