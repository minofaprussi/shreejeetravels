import { notFound } from 'next/navigation';
import CountryDetailPage from '@/components/CountryDetailPage';
import { getCountryPageData, getCountryStaticParams } from '@/lib/siteData';

const serviceHref = '/tour-packages';
const serviceType = 'tour packages';

export function generateStaticParams() {
  return getCountryStaticParams(serviceHref);
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const page = getCountryPageData(country, serviceType);
  if (!page) return {};
  return {
    title: page.title,
    description: `${page.country} tour package planning by ShreeJee Travels with documents, process, benefits and enquiry support.`,
  };
}

export default async function TourPackageCountryPage({ params }) {
  const { country } = await params;
  const page = getCountryPageData(country, serviceType);
  if (!page) notFound();
  return <CountryDetailPage page={page} />;
}
