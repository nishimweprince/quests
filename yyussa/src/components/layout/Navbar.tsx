'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navBg = scrolled
    ? 'border-b'
    : 'border-b border-transparent';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}
        style={{
          background: scrolled ? 'rgba(10,10,10,0.96)' : 'rgba(10,10,10,0.0)',
          borderColor: scrolled ? 'var(--color-grey-800)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(184,150,90,0.08)' : 'none',
        }}
        role="banner"
      >
        <div className="container-xl">
          <div className="flex h-[74px] items-center justify-between md:h-[82px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-none"
              aria-label="YYUSSA Group Ltd — Home"
            >
              <span
                className="text-xl font-bold tracking-[0.04em] text-white"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif", letterSpacing: '0.04em' }}
              >
                YYUSSA
              </span>
              <span
                className="mt-0.5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: 'var(--color-grey-500)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Group Ltd
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                if (link?.dropdown) {
                  return (
                    <div key={link.href} className="relative cursor-pointer" ref={dropdownRef}>
                      <button
                        className="flex cursor-pointer items-center gap-1.5 px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors duration-200"
                        style={{
                          color: isActive(link.href) ? 'var(--color-accent)' : 'rgba(245,242,237,0.55)',
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                        onClick={() => setServicesOpen((v) => !v)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        onMouseEnter={(e) => {
                          if (!isActive(link.href)) e.currentTarget.style.color = 'var(--color-text-light)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(link.href)) e.currentTarget.style.color = 'rgba(245,242,237,0.55)';
                        }}
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Active underline */}
                      {isActive(link.href) && (
                        <div
                          className="absolute bottom-0 left-4 right-4 h-px"
                          style={{ background: 'var(--color-accent)' }}
                          aria-hidden="true"
                        />
                      )}

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 top-full mt-1 w-56 border"
                            style={{
                              background: 'var(--color-grey-800)',
                              borderColor: 'var(--color-grey-800)',
                            }}
                            role="menu"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                onClick={() => setServicesOpen(false)}
                                className="block border-b px-5 py-3.5 text-[11px] uppercase tracking-[0.14em] transition-colors last:border-0"
                                style={{
                                  borderColor: 'var(--color-grey-800)',
                                  color: pathname === item.href ? 'var(--color-accent)' : 'rgba(245,242,237,0.55)',
                                  fontFamily: 'DM Sans, sans-serif',
                                }}
                                onMouseEnter={(e) => {
                                  if (pathname !== item.href) e.currentTarget.style.color = 'var(--color-text-light)';
                                }}
                                onMouseLeave={(e) => {
                                  if (pathname !== item.href) e.currentTarget.style.color = 'rgba(245,242,237,0.55)';
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors duration-200"
                      style={{
                        color: isActive(link.href) ? 'var(--color-accent)' : 'rgba(245,242,237,0.55)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(link.href)) e.currentTarget.style.color = 'var(--color-text-light)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(link.href)) e.currentTarget.style.color = 'rgba(245,242,237,0.55)';
                      }}
                    >
                      {link.label}
                    </Link>
                    {isActive(link.href) && (
                      <div
                        className="absolute bottom-0 left-4 right-4 h-px"
                        style={{ background: 'var(--color-accent)' }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden border px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 lg:inline-flex"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
              >
                Get in Touch
              </Link>

              <button
                className="border p-2 text-white transition-colors lg:hidden"
                style={{ borderColor: 'var(--color-grey-700)' }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.28 }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-80 flex-col border-l lg:hidden"
              style={{
                background: 'var(--color-primary)',
                borderColor: 'var(--color-grey-800)',
              }}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between border-b p-6"
                style={{ borderColor: 'var(--color-grey-800)' }}
              >
                <div className="leading-none">
                  <span
                    className="block text-lg tracking-[0.04em] text-white"
                    style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                  >
                    YYUSSA
                  </span>
                  <span
                    className="mt-0.5 block text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    Group Ltd
                  </span>
                </div>
                <button
                  className="p-1 text-white/50 transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                <ul className="space-y-0">
                  {NAV_LINKS.map((link, i) => (
                    <li
                      key={link.href}
                      className="border-b"
                      style={{ borderColor: 'var(--color-grey-800)' }}
                    >
                      {link.dropdown ? (
                        <div>
                          <span
                            className="block py-4 text-sm uppercase tracking-[0.14em]"
                            style={{ color: 'var(--color-grey-500)', fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {link.label}
                          </span>
                          <ul className="mb-2 space-y-1 pl-4">
                            {link.dropdown.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2.5 text-sm uppercase tracking-[0.12em] transition-colors"
                                  style={{
                                    color: pathname === item.href ? 'var(--color-accent)' : 'rgba(245,242,237,0.65)',
                                    fontFamily: 'DM Sans, sans-serif',
                                  }}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-4 text-sm uppercase tracking-[0.14em] transition-colors"
                          style={{
                            color: isActive(link.href) ? 'var(--color-accent)' : 'rgba(245,242,237,0.65)',
                            fontFamily: 'DM Sans, sans-serif',
                          }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <div
                className="border-t p-6"
                style={{ borderColor: 'var(--color-grey-800)' }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full border py-3.5 text-center text-[11px] uppercase tracking-[0.16em] transition-colors"
                  style={{
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
