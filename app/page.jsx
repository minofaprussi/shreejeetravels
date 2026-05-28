import Link from 'next/link';
import CountryGrid from '@/components/CountryGrid';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, site, slugify, studentVisaCountries, testimonials, touristVisaCountries, tourPackageImages, tourPackages, workPermitCountries } from '@/lib/siteData';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover opacity-35" src="/images/hero-travel.jpg" alt="" />
        </div>
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white animate-rise">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-amber">Visa • Travel • Ticketing • CSC</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Premium travel and visa guidance for your next big move.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">ShreeJee Travels helps families, students, workers and holidaymakers plan international journeys with clear documentation support and friendly consulting.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us" className="btn-primary">Start Enquiry</Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl rounded-lg border border-white/70 bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-3">
            {site.approvals.map((approval) => (
              <div key={approval.label} className="rounded-lg bg-brand-sky p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-orange">{approval.title}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-brand-navy">{approval.label}</p>
                <p className="mt-1 break-words text-sm leading-6 text-slate-700">{approval.number}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading center eyebrow="Our Services" title="Everything your travel file needs" text="A polished static showcase website today, ready for future admin, database or enquiry workflows later." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.href} service={service} />)}
        </div>
      </section>

      <section className="bg-brand-sky py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Work Permit" title="Career destinations we support" text="Country-specific consulting for overseas work routes, document planning and file preparation." />
            <div className="mt-8">
              <CountryGrid items={workPermitCountries} baseHref="/work-permit" />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-soft">
            <img className="h-full min-h-[420px] w-full object-cover" src="/images/work-permit-highlight.jpg" alt="Modern city skyline for overseas work permit planning" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Student Visa" title="Study abroad destinations" text="Support for admissions, SOPs, financial documents and visa file preparation." />
            <div className="mt-8">
              <CountryGrid items={studentVisaCountries} columns="sm:grid-cols-4 lg:grid-cols-2" baseHref="/student-visa" />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Tourist Visa" title="Travel visa destinations" text="Document guidance for holiday, family visit, event and short business travel files." />
            <div className="mt-8">
              <CountryGrid items={touristVisaCountries} baseHref="/tourist-visa" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-amber">Air Ticketing</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">All routes available at best price.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">Get domestic and international ticketing support for students, families, groups and urgent travel. CSC Services are also available at ShreeJee Travels.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Domestic', 'International', 'Student Fares', 'Group Travel'].map((item) => (
              <div key={item} className="rounded-lg bg-white/10 p-5 text-center font-bold backdrop-blur">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading center eyebrow="Tour Packages" title="Popular holiday ideas" text="Preview destinations for ready-to-customize packages with stays, transfers, sightseeing and visa add-ons." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tourPackages.map((place) => (
            <Link key={place} href={`/tour-packages/${slugify(place)}`} className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-soft">
              <img className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" src={tourPackageImages[place]} alt={`${place} tour package`} />
              <div className="p-5">
                <p className="text-lg font-bold text-brand-navy">{place}</p>
                <p className="mt-2 text-sm text-slate-600">Hotels, transfers and sightseeing options.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Why Choose Us" title="Careful consulting, clear next steps" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Premium file guidance', 'Responsive travel support', 'Visa, tickets, packages and CSC under one roof'].map((benefit) => (
              <div key={benefit} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand-orange" />
                <p className="text-xl font-bold text-brand-navy">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Testimonials" title="Client success stories" text="Professional support for real travel, study and visa goals." />
          <Link href="/testimonials" className="btn-outline">View All</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-brand-blue px-6 py-12 text-center text-white shadow-soft sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to plan your file or trip?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-50">Send your service requirement and destination. The ShreeJee Travels team will guide your next step.</p>
          <Link href="/contact-us" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-bold text-brand-blue transition hover:bg-brand-amber hover:text-brand-navy">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
