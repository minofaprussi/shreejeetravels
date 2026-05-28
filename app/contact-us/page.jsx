import ContactForm from '@/components/ContactForm';
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
          <p className="mt-6 text-lg leading-8 text-slate-600">This static contact form is ready for Formspree. Add your endpoint in Vercel as NEXT_PUBLIC_FORMSPREE_ENDPOINT.</p>
          <div className="mt-8 grid gap-4">
            <a href={site.landlineHref} className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-brand-orange hover:text-brand-orange">Landline: {site.landline}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-green-500 hover:text-green-600">WhatsApp: +91 {site.whatsappNumber}</a>
            <a href={site.emailHref} className="break-words rounded-lg border border-slate-200 p-5 font-bold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">{site.email}</a>
          </div>
        </div>
        <ContactForm endpoint={formEndpoint} />
      </div>
    </section>
  );
}
