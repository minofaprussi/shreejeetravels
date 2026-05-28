import ServicePage from '@/components/ServicePage';
import { services } from '@/lib/siteData';

const service = services.find((item) => item.href === '/student-visa');

export const metadata = {
  title: 'Student Visa',
  description: 'Student visa support for UK, Canada, Australia, New Zealand, Singapore, Cyprus, Europe and South Korea.',
};

export default function StudentVisaPage() {
  return <ServicePage service={service} />;
}
