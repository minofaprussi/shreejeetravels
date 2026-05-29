import { site } from '@/lib/siteData';

const icons = {
  Facebook: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5V6.75c0-.58.47-.75.8-.75H17V2.25L13.97 2C10.6 2 9.83 4.02 9.83 5.32V8.5H7v3.75h2.83V22H14v-9.75h2.83l.42-3.75H14Z" />
    </svg>
  ),
  Instagram: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="16" height="16" x="4" y="4" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  ),
  YouTube: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.58 7.18a2.7 2.7 0 0 0-1.9-1.9C18 4.83 12 4.83 12 4.83s-6 0-7.68.45a2.7 2.7 0 0 0-1.9 1.9A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .42 4.82 2.7 2.7 0 0 0 1.9 1.9c1.68.45 7.68.45 7.68.45s6 0 7.68-.45a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.42-4.82ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.98H3.31V20h3.63V8.98ZM5.13 4A2.1 2.1 0 1 0 5.1 8.2 2.1 2.1 0 0 0 5.13 4ZM20.69 13.67c0-3.37-1.8-4.94-4.2-4.94a3.62 3.62 0 0 0-3.27 1.8V8.98H9.74V20h3.63v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.79 1.65 1.79 2.93V20h3.63l-.16-6.33Z" />
    </svg>
  ),
};

const hoverClasses = {
  Facebook: 'hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white',
  Instagram: 'hover:border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 hover:text-white',
  YouTube: 'hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white',
  LinkedIn: 'hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white',
};

export default function SocialLinks({ className = '', iconClassName = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {site.socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.name} - ${site.name}`}
          title={link.name}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-current/20 bg-white/10 text-current shadow-sm transition duration-200 hover:-translate-y-0.5 ${hoverClasses[link.name]} ${iconClassName}`}
        >
          {icons[link.name]}
        </a>
      ))}
    </div>
  );
}
