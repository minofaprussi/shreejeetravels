import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/tourist-visa');

export const metadata = {
  title: 'Tourist Visa',
  description: 'Tourist visa consultancy for Schengen Countries, Australia, New Zealand, Canada, USA and UK.',
};

export default function TouristVisaPage() {
  return <ServicePage service={service} />;
}
