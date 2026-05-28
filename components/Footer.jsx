import Link from 'next/link';
import { services, site } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-lg font-black text-brand-blue">SJ</span>
            <div>
              <p className="text-xl font-extrabold">{site.name}</p>
              <p className="text-sm text-blue-100">Travel, visa and consultancy services</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-blue-100">
            Premium guidance for work permits, student visas, tourist visas, air ticketing, tour packages and CSC services.
          </p>
        </div>
        <div>
          <p className="font-bold">Services</p>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {services.slice(0, 5).map((service) => (
              <Link key={service.href} href={service.href} className="transition hover:text-white">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>India</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
