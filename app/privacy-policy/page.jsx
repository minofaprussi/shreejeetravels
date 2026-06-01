import Link from 'next/link';
import { site } from '@/lib/siteData';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ShreeJee Travels covering visa, travel, enquiry, contact form and communication data practices.',
};

const sections = [
  {
    title: 'Introduction',
    content:
      'This Privacy Policy explains how ShreeJee Travels handles information shared by customers and website visitors for visa consultancy, travel enquiries, air ticketing, tour packages, appointments and CSC-related service requests.',
  },
  {
    title: 'Information We Collect',
    content:
      'We may collect details such as your name, phone number, email address, destination or country of interest, selected service, message details and any supporting information you choose to share with our team.',
  },
  {
    title: 'How We Use Customer Information',
    content:
      'Customer information is used to understand your enquiry, respond to your request, share service guidance, prepare document checklists, coordinate appointments and provide updates related to travel or visa assistance.',
  },
  {
    title: 'Visa and Travel Enquiry Data',
    content:
      'For visa, work permit, student visa, tourist visa and tour package enquiries, we may review destination preferences, travel purpose, expected timelines and document readiness so we can provide relevant guidance.',
  },
  {
    title: 'Contact Form Submissions',
    content:
      'Information submitted through the contact form is sent to ShreeJee Travels for enquiry follow-up. Please avoid submitting sensitive personal documents through the website form unless our team specifically requests them through an appropriate channel.',
  },
  {
    title: 'WhatsApp, Call and Email Communication',
    content:
      'When you contact us by WhatsApp, phone call or email, we may use the provided details to reply to your enquiry, continue service discussions and keep a record of communication needed to support your request.',
  },
  {
    title: 'Cookies and Analytics',
    content:
      'Our website may use basic cookies or analytics tools to understand website performance, visitor activity and page usage. These tools help us improve the website experience and do not replace direct customer communication.',
  },
  {
    title: 'Third-Party Links',
    content:
      'The website may include links to third-party platforms such as WhatsApp, social media, maps, form providers or external service pages. Their privacy practices are controlled by their own policies.',
  },
  {
    title: 'Data Protection',
    content:
      'We aim to handle customer information carefully and use it only for legitimate business communication and service support. Access to enquiry details is limited to the team members or service partners needed to respond to the request.',
  },
  {
    title: 'User Consent',
    content:
      'By using this website, submitting an enquiry form or contacting ShreeJee Travels through WhatsApp, phone or email, you consent to the collection and use of your information for the purposes described in this Privacy Policy.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section overflow-hidden">
        <div className="relative rounded-lg bg-brand-navy px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-brand-orange/20 lg:block" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-amber">Privacy Policy</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">Clear, careful handling of your travel enquiry details.</h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              This policy describes how {site.name} collects, uses and protects information shared through this website and our contact channels.
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-100">Last updated: June 1, 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-orange">ShreeJee Travels</p>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy">Contact Information</h2>
            <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              {site.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="transition hover:text-brand-orange">
                  {phone === site.landline ? `Landline: ${phone}` : phone}
                </a>
              ))}
              <a href={site.emailHref} className="break-words transition hover:text-brand-blue">{site.email}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-green-600">
                WhatsApp: +91 {site.whatsappNumber}
              </a>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm font-extrabold text-brand-navy">Approvals</p>
              <div className="mt-3 grid gap-3 text-xs leading-5 text-slate-600">
                {site.approvals.map((approval) => (
                  <p key={approval.title}>
                    <span className="block font-bold text-slate-800">{approval.title}</span>
                    {approval.label}: {approval.number}
                  </p>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-extrabold text-brand-navy">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.content}</p>
              </article>
            ))}
            <article className="rounded-lg border border-brand-orange/30 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-brand-navy">Contact Us About Privacy</h2>
              <p className="mt-3 leading-7 text-slate-600">
                For questions about this Privacy Policy or how your enquiry information is handled, contact {site.name} by email, phone or WhatsApp.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact-us" className="btn-primary">Contact Us</Link>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Enquiry</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
