import { services, site } from '@/lib/siteData';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact ShreeJee Travels for work permit, student visa, tourist visa, air ticketing, tour packages and CSC services.',
};

export default function ContactPage() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id';

  return (
    <section className="section">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-orange">Contact Us</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">Tell us your destination. We will help with the next step.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">This static contact form is ready for Formspree. Add your endpoint in Vercel as NEXT_PUBLIC_FORMSPREE_ENDPOINT.</p>
          <div className="mt-8 grid gap-4">
            <a href={site.phoneHref} className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange">Call: {site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-green-500 hover:text-green-600">WhatsApp: {site.phone}</a>
            <a href={`mailto:${site.email}`} className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">{site.email}</a>
          </div>
        </div>
        <form className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 sm:p-8" action={formEndpoint} method="POST">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-label">Name
              <input className="form-input" required type="text" name="name" placeholder="Your full name" />
            </label>
            <label className="form-label">Phone
              <input className="form-input" required type="tel" name="phone" placeholder="+91" />
            </label>
            <label className="form-label">Email
              <input className="form-input" type="email" name="email" placeholder="you@example.com" />
            </label>
            <label className="form-label">Service Required
              <select className="form-input" required name="service" defaultValue="">
                <option value="" disabled>Select service</option>
                {services.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
            </label>
            <label className="form-label sm:col-span-2">Destination/Country
              <input className="form-input" type="text" name="destination" placeholder="Canada, UK, Dubai..." />
            </label>
            <label className="form-label sm:col-span-2">Message
              <textarea className="form-input min-h-36" required name="message" placeholder="Share your travel or visa requirement" />
            </label>
          </div>
          <button className="btn-primary mt-6 w-full justify-center" type="submit">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}
