import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/lib/siteData';

export const metadata = {
  title: 'Testimonials',
  description: 'Client testimonials and travel, visa, work permit and student visa success stories for ShreeJee Travels.',
};

export default function TestimonialsPage() {
  return (
    <section className="bg-brand-sky py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow="Testimonials" title="Success stories from our clients" text="Professional feedback from clients who trusted ShreeJee Travels for visa files, air tickets and holiday planning." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
        </div>
      </div>
    </section>
  );
}
