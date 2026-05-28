import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/tour-packages');

export const metadata = {
  title: 'Tour Packages',
  description: 'Tour packages for Singapore, Malaysia, Thailand, Vietnam, Dubai, Europe, USA and UK.',
};

export default function TourPackagesPage() {
  return <ServicePage service={service} />;
}
