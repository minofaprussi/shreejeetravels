import { site } from '@/lib/siteData';
import { Icon, WhatsAppIcon } from '@/components/Icons';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={site.landlineHref} className="grid h-12 w-12 place-items-center rounded-full bg-brand-blue text-white shadow-soft transition hover:-translate-y-1" aria-label="Call ShreeJee Travels">
        <Icon name="phone" className="h-5 w-5" />
      </a>
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-soft transition hover:-translate-y-1" aria-label="WhatsApp ShreeJee Travels">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
