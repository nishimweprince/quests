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

  const isHeroPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navBg =
    !isHeroPage || scrolled
      ? 'bg-[rgba(10,10,12,0.92)] border-b border-(--color-border-dark) backdrop-blur-md'
      : 'bg-transparent';

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-transparent/0 transition-all duration-300 ${navBg}`}
        role="banner"
      >
        <div className="container-xl">
          <div className="flex h-[74px] items-center justify-between md:h-[82px]">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-(--color-primary)"
              aria-label="YYUSSA Group Ltd — Home"
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-(--color-primary) text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
                style={{ background: 'var(--color-primary)' }}
                aria-hidden="true"
              >
                Y
              </div>
              <div className="leading-none">
                <span className="block text-xl tracking-[0.06em] text-white">YYUSSA</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-(--color-text-muted-light)">
                  Group Ltd
                </span>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-white/5 bg-black/20 px-1.5 py-1 text-[11px] uppercase tracking-[0.18em] backdrop-blur-sm lg:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.href} className="relative" ref={dropdownRef}>
                      <button
                        className={`flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors ${
                          isActive(link.href)
                            ? 'bg-white/10 text-(--color-primary-light)'
                            : 'text-(--color-text-light) hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={() => setServicesOpen((v) => !v)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-(--color-border-dark) bg-[rgba(10,10,12,0.98)] shadow-2xl backdrop-blur-xl"
                            style={{ background: 'var(--color-surface-dark)' }}
                            role="menu"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                className={`block border-b border-(--color-border-dark) px-4 py-3 text-xs tracking-[0.14em] transition-colors last:border-0 ${
                                  pathname === item.href
                                    ? 'bg-white/5 text-(--color-primary-light)'
                                    : 'text-(--color-text-light) hover:bg-white/5 hover:text-white'
                                }`}
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
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 transition-colors ${
                      isActive(link.href)
                        ? 'bg-white/10 text-(--color-primary-light)'
                        : 'text-(--color-text-light) hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_12px_35px_rgba(0,0,0,0.55)] transition-all duration-200 hover:-translate-y-px hover:border-white/20 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            <button
              className="rounded-full border border-white/10 bg-black/40 p-2 text-white backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-80 flex-col shadow-2xl lg:hidden"
              style={{ background: 'var(--color-surface-dark)' }}
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
            >
              <div className="flex items-center justify-between border-b border-(--color-border-dark) p-5">
                <span className="text-lg tracking-[0.06em] text-(--color-text-light)">YYUSSA</span>
                <button
                  className="rounded-full p-2 text-(--color-text-muted-light) hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      {link.dropdown ? (
                        <div>
                          <div
                            className={`px-4 py-3 text-xs uppercase tracking-[0.18em] ${
                              isActive(link.href)
                                ? 'text-(--color-primary-light)'
                                : 'text-(--color-text-muted-light)'
                            }`}
                          >
                            {link.label}
                          </div>
                          <ul className="ml-4 space-y-1">
                            {link.dropdown.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className={`block rounded px-4 py-2 text-sm transition-colors ${
                                    pathname === item.href
                                      ? 'bg-white/5 text-(--color-primary-light)'
                                      : 'text-(--color-text-light) hover:bg-white/5 hover:text-white'
                                  }`}
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
                          className={`block rounded px-4 py-3 text-sm transition-colors ${
                            isActive(link.href)
                              ? 'bg-white/5 text-(--color-primary-light)'
                              : 'text-(--color-text-light) hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-5 border-t border-(--color-border-dark)">
                <Link
                  href="/contact"
                  className="btn-primary block w-full rounded-full py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-white"
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
