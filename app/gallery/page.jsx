import SectionHeading from '@/components/SectionHeading';
import { galleryImages } from '@/lib/siteData';

export const metadata = {
  title: 'Gallery',
  description: 'Travel destination and service gallery for ShreeJee Travels.',
};

export default function GalleryPage() {
  return (
    <section className="section">
      <SectionHeading center eyebrow="Gallery" title="Travel inspiration and service moments" text="Placeholder visuals for destinations, consultation, documents and travel experiences." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((item) => (
          <figure key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
            <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} />
          </figure>
        ))}
      </div>
    </section>
  );
}
