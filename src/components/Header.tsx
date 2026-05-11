'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Inici' },
  { href: '/qui-som', label: 'Qui Som' },
  { href: '/que-fem', label: 'Què Fem' },
  { href: '/clients', label: 'Clients' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img src="/img/logo/Logo+Txt.png" alt="FastNets" className="invert w-[180px] h-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#F5F0E8] font-medium'
                  : 'text-[#A89F91] hover:text-[#F5F0E8]'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="active-nav"
                  className="h-px bg-[#2563EB] mt-0.5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/privat/login" className="btn-ghost text-xs py-2 px-4">
            Àrea Privada
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden text-[#A89F91] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-px bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111111] border-b border-[#2A2A2A] overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm transition-colors ${
                    pathname === link.href
                      ? 'bg-[#1A1A1A] text-[#F5F0E8] font-medium'
                      : 'text-[#A89F91] hover:bg-[#1A1A1A] hover:text-[#F5F0E8]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-[#2A2A2A] my-2"/>
              <Link href="/privat/login" onClick={() => setMenuOpen(false)} className="btn-ghost text-xs text-center">
                Àrea Privada
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
