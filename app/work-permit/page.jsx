import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/work-permit');

export const metadata = {
  title: 'Work Permit',
  description: 'Work permit consultancy for Bulgaria, Russia, Ukraine, Greece, Slovakia, Australia, Canada, New Zealand, UK, Serbia and Germany.',
};

export default function WorkPermitPage() {
  return <ServicePage service={service} />;
}
