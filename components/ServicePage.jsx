import Link from 'next/link';
import CountryGrid from '@/components/CountryGrid';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/lib/siteData';

export default function ServicePage({ service }) {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover opacity-35" src={service.image} alt="" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-rise">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-amber">{service.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-blue-50">{service.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us" className="btn-primary">Send Enquiry</Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Overview" title="Built around a clear file process" text={service.overview} />
        <div className="mt-10">
          <CountryGrid items={service.countries} baseHref={service.countryPageType ? service.href : undefined} />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Process" title="Simple, organized and transparent" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {['Consultation', 'Document Checklist', 'File Preparation', 'Submission Guidance'].map((step, index) => (
              <div key={step} className="rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-orange font-extrabold text-white">{index + 1}</span>
                <p className="mt-5 font-bold text-brand-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Documents" title="Documents required" text="Exact requirements can vary by destination and applicant profile. This starter checklist keeps the first conversation focused." />
            <ul className="mt-8 grid gap-3">
              {service.documents.map((document) => (
                <li key={document} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-sky text-brand-blue">✓</span>
                  <span className="font-semibold text-slate-700">{document}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Benefits" title="Why clients choose this service" />
            <ul className="mt-8 grid gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="rounded-lg bg-brand-sky p-4 font-semibold text-brand-navy">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-brand-navy px-6 py-12 text-center text-white shadow-soft">
          <h2 className="text-3xl font-extrabold">Need help with {service.title}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">Share your profile, destination and timeline. We will guide the next step with a practical checklist.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact-us" className="btn-primary">Enquire Now</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
