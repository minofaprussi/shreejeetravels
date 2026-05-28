import Link from 'next/link';
import { Icon } from '@/components/Icons';

export default function ServiceCard({ service }) {
  return (
    <Link href={service.href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-sky text-brand-blue transition group-hover:bg-brand-orange group-hover:text-white">
        <Icon name={service.icon} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
      <span className="mt-5 inline-flex items-center text-sm font-bold text-brand-orange">Explore <span className="ml-2 transition group-hover:translate-x-1">→</span></span>
    </Link>
  );
}
