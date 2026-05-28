export default function CountryGrid({ items, columns = 'sm:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${columns}`}>
      {items.map((item) => (
        <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-center font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-blue hover:text-brand-blue hover:shadow-soft">
          {item}
        </div>
      ))}
    </div>
  );
}
