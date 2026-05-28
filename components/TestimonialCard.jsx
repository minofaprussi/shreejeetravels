export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex gap-1 text-brand-amber" aria-label={`${testimonial.rating} star rating`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
            <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5Z" />
          </svg>
        ))}
      </div>
      <p className="mt-4 leading-7 text-slate-600">“{testimonial.text}”</p>
      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="font-bold text-brand-navy">{testimonial.name}</p>
        <p className="text-sm font-semibold text-brand-orange">{testimonial.service}</p>
      </div>
    </article>
  );
}
