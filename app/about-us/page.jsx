import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About Us',
  description: 'Learn about ShreeJee Travels, a premium travel, visa, ticketing, tour package and CSC services consultancy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-orange">About ShreeJee Travels</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-6xl">Trusted guidance for travel, visa and overseas plans.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">ShreeJee Travels is built for clients who want clear steps, organized documentation and responsive support across visa consultancy, work permits, student visas, tourist visas, air ticketing, tour packages and CSC services.</p>
            <Link href="/contact-us" className="btn-primary mt-8">Talk to Us</Link>
          </div>
          <img className="rounded-lg shadow-soft" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" alt="Travel consultants meeting clients" />
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading center eyebrow="Our Approach" title="Premium service without confusing steps" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Listen first', 'Prepare carefully', 'Support until the journey'].map((item) => (
              <div key={item} className="rounded-lg bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-2xl font-extrabold text-brand-navy">{item}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">Every enquiry is handled with destination-specific thinking and a practical document checklist.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
