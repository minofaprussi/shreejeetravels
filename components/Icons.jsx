export function Icon({ name, className = 'h-6 w-6' }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24', 'aria-hidden': true };

  const icons = {
    briefcase: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6V5a2 2 0 0 1 4 0v1M4 7h16v12H4zM4 11h16" /></svg>,
    graduation: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="m3 8 9-4 9 4-9 4-9-4Zm4 4v4c3 2 7 2 10 0v-4" /></svg>,
    passport: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M7 3h8l3 3v15H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 6h3m-3 4h4m-4 4h2" /></svg>,
    plane: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M2 16 22 7l-8 14-4-8-8 3Zm8-3 12-6" /></svg>,
    map: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Zm0-15v15m6-12v15" /></svg>,
    screen: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H4zM8 21h8m-4-5v5" /></svg>,
    phone: <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5C2 4.1 3.1 3 4.5 3h2.1c.5 0 1 .3 1.2.8l1 3.1c.2.5.1 1-.3 1.3L7.3 9.4a13.4 13.4 0 0 0 7.3 7.3l1.2-1.2c.4-.4.9-.5 1.4-.3l3 1c.5.2.8.7.8 1.2v2.1c0 1.4-1.1 2.5-2.5 2.5C9.4 22 2 14.6 2 5.5Z" /></svg>,
  };

  return icons[name] || icons.map;
}

export function WhatsAppIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.5 4.1 1.6 5.9L.3 24l6.6-1.7c1.7.9 3.5 1.4 5.4 1.4h.1c6.4 0 11.7-5.2 11.7-11.7 0-3.1-1.3-6-3.6-8.5Zm-8.2 18.2c-1.7 0-3.3-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.2 4.7Zm5.3-7.2c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}
