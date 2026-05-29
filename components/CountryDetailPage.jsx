import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { site } from '@/lib/siteData';

export default function CountryDetailPage({ page }) {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover opacity-35" src={page.image} alt="" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-rise">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-amber">{page.service.title}</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{page.country}</h1>
            <p className="mt-6 text-lg leading-8 text-blue-50">{page.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us" className="btn-primary">Send Enquiry</Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp ShreeJee Travels</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={`${page.country} ${page.service.title}`} text={page.overview} />
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-brand-navy">Who can apply</h2>
              <ul className="mt-5 grid gap-3">
                {page.eligibility.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-sky text-sm font-bold text-brand-blue">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-lg bg-brand-sky p-6">
            <h2 className="text-2xl font-extrabold text-brand-navy">Why choose ShreeJee Travels</h2>
            <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
              {site.approvals.map((approval) => (
                <li key={approval.title}>{approval.title}</li>
              ))}
              <li>Clear guidance from enquiry to next step</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Documents" title="Required documents" />
              <ul className="mt-8 grid gap-3">
                {page.documents.map((document) => (
                  <li key={document} className="rounded-lg bg-white p-4 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">{document}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Process" title="How the process works" />
              <div className="mt-8 grid gap-4">
                {page.process.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-orange font-extrabold text-white">{index + 1}</span>
                    <p className="self-center font-bold text-brand-navy">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Benefits" title="Benefits" />
            <ul className="mt-8 grid gap-3">
              {page.benefits.map((benefit) => (
                <li key={benefit} className="rounded-lg bg-brand-sky p-4 font-semibold text-brand-navy">{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Related Services" title="Explore more services" />
            <div className="mt-8 grid gap-3">
              {page.relatedServices.map((service) => (
                <Link key={service.href} href={service.href} className="rounded-lg border border-slate-200 bg-white p-4 font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-brand-blue px-6 py-12 text-center text-white shadow-soft">
          <h2 className="text-3xl font-extrabold">Ready to enquire about {page.country}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-50">Send your details to ShreeJee Travels and our team will guide your next step.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-extrabold text-brand-blue transition hover:bg-brand-amber hover:text-brand-navy">Enquiry Form</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
