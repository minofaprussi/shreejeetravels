'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, site } from '@/lib/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={site.landlineHref} className="text-brand-amber transition hover:text-white">Landline: {site.landline}</a>
            <a href={site.emailHref} className="transition hover:text-brand-amber">{site.email}</a>
          </div>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-amber">
            WhatsApp: +91 {site.whatsappNumber}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue text-lg font-black text-white shadow-soft">SJ</span>
          <span>
            <span className="block text-lg font-extrabold leading-5 text-brand-navy">ShreeJee</span>
            <span className="block text-sm font-semibold text-brand-orange">Travels</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className={`nav-link ${pathname === href ? 'nav-link-active' : ''}`}>
              {label}
            </Link>
          ))}
        </div>

        <a href={site.landlineHref} className="hidden rounded-lg bg-brand-orange px-4 py-2 text-sm font-extrabold text-white transition hover:bg-orange-600 xl:inline-flex">
          {site.landline}
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-brand-navy lg:hidden"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Open menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold ${pathname === href ? 'bg-brand-sky text-brand-blue' : 'text-slate-700'}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
