'use client';

import { useState } from 'react';
import { services, site } from '@/lib/siteData';

export default function ContactForm({ endpoint }) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', 'New enquiry from ShreeJee Travels website');
    formData.append('business_email', site.email);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
      setMessage('Thank you. Your enquiry has been sent to ShreeJee Travels. Our team will contact you soon.');
    } catch {
      setStatus('error');
      setMessage('Sorry, your enquiry could not be sent right now. Please call us or contact us on WhatsApp.');
    }
  }

  return (
    <form className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 sm:p-8" onSubmit={handleSubmit}>
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

      <button className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending Enquiry...' : 'Submit Enquiry'}
      </button>

      {message ? (
        <p className={`mt-4 rounded-lg p-4 text-sm font-semibold ${status === 'success' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
