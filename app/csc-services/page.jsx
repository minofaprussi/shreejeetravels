import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/csc-services');

export const metadata = {
  title: 'CSC Services',
  description: 'CSC services available at ShreeJee Travels along with visa, ticketing and travel consultancy.',
};

export default function CscServicesPage() {
  return <ServicePage service={service} />;
}
