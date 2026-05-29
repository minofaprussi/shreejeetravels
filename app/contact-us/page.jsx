import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { site } from '@/lib/siteData';

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
          <p className="mt-6 text-lg leading-8 text-slate-600">Have a question about visas, tickets, tour packages, or appointments? Share your details and our team will contact you shortly.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange"
              >
                {phone === site.landline ? `Landline: ${phone}` : `Call: ${phone}`}
              </a>
            ))}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-green-500 hover:text-green-600">WhatsApp: +91 {site.whatsappNumber}</a>
            <a href={site.emailHref} className="overflow-hidden rounded-lg border border-slate-200 p-5 text-sm font-bold leading-6 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue sm:col-span-2">
              <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">Email</span>
              <span className="mt-1 block break-words">{site.email}</span>
            </a>
            <div className="rounded-lg border border-slate-200 p-5 sm:col-span-2">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">Follow ShreeJee Travels</p>
              <SocialLinks className="mt-3" iconClassName="border-slate-200 bg-white text-brand-navy" />
            </div>
          </div>
        </div>
        <ContactForm endpoint={formEndpoint} />
      </div>
    </section>
  );
}
