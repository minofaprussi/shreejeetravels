import { notFound } from 'next/navigation';
import CountryDetailPage from '@/components/CountryDetailPage';
import { getCountryPageData, getCountryStaticParams } from '@/lib/siteData';

const serviceHref = '/student-visa';
const serviceType = 'student visa';

export function generateStaticParams() {
  return getCountryStaticParams(serviceHref);
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const page = getCountryPageData(country, serviceType);
  if (!page) return {};
  return {
    title: page.title,
    description: `${page.country} student visa guidance by ShreeJee Travels with documents, eligibility, process and enquiry support.`,
  };
}

export default async function StudentVisaCountryPage({ params }) {
  const { country } = await params;
  const page = getCountryPageData(country, serviceType);
  if (!page) notFound();
  return <CountryDetailPage page={page} />;
}
