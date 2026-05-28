'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, site } from '@/lib/siteData';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreLinks = navLinks.filter(([label]) => ['CSC', 'Testimonials', 'Gallery'].includes(label));
  const primaryLinks = navLinks.filter(([label]) => !['CSC', 'Testimonials', 'Gallery'].includes(label));
  const isMoreActive = moreLinks.some(([, href]) => pathname === href);

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
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 xl:gap-5 xl:px-8" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-[45px] w-[57px] shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-200 xl:h-[55px] xl:w-[69px]">
            <Image
              src="/logo.png"
              alt="ShreeJee Travels logo"
              width={538}
              height={427}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-extrabold leading-5 text-brand-navy sm:text-lg">ShreeJee</span>
            <span className="block text-sm font-semibold text-brand-orange">Travels</span>
          </span>
        </Link>

        <div className="hidden min-w-0 items-center justify-center gap-0.5 xl:flex">
          {primaryLinks.map(([label, href]) => (
            <Link key={href} href={href} className={`nav-link ${pathname === href ? 'nav-link-active' : ''}`}>
              {label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`nav-link inline-flex items-center gap-1 ${isMoreActive ? 'nav-link-active' : ''}`}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onClick={() => setMoreOpen((value) => !value)}
              onBlur={(event) => {
                if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                  setMoreOpen(false);
                }
              }}
            >
              More
              <svg className={`h-4 w-4 transition ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-soft" role="menu">
                {moreLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block rounded-lg px-3 py-2 text-sm font-bold transition ${pathname === href ? 'bg-brand-sky text-brand-blue' : 'text-slate-700 hover:bg-brand-sky hover:text-brand-blue'}`}
                    role="menuitem"
                    onClick={() => setMoreOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <a href={site.landlineHref} className="hidden shrink-0 rounded-lg bg-brand-orange px-4 py-2 text-sm font-extrabold text-white transition hover:bg-orange-600 xl:inline-flex">
          {site.landline}
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-lg border border-slate-200 text-brand-navy xl:hidden"
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
        <div id="mobile-menu" className="border-t border-slate-200 bg-white shadow-soft xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
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
