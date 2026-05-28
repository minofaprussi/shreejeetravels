import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/air-ticketing');

export const metadata = {
  title: 'Air Ticketing',
  description: 'Air ticketing support for all domestic and international routes at best price, with CSC services also available.',
};

export default function AirTicketingPage() {
  return <ServicePage service={service} />;
}
