import { notFound } from 'next/navigation';
import CountryDetailPage from '@/components/CountryDetailPage';
import { getCountryPageData, getCountryStaticParams } from '@/lib/siteData';

const serviceHref = '/tourist-visa';

export function generateStaticParams() {
  return getCountryStaticParams(serviceHref);
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const page = getCountryPageData(serviceHref, country);
  if (!page) return {};
  return {
    title: page.title,
    description: `${page.country} tourist visa guidance by ShreeJee Travels with documents, eligibility, process and enquiry support.`,
  };
}

export default async function TouristVisaCountryPage({ params }) {
  const { country } = await params;
  const page = getCountryPageData(serviceHref, country);
  if (!page) notFound();
  return <CountryDetailPage page={page} />;
}
