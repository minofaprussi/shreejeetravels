export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow ? <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-orange">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-600">{text}</p> : null}
    </div>
  );
}
