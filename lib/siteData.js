export const site = {
  name: 'ShreeJee Travels',
  phone: '9501726555',
  phoneHref: 'tel:9501726555',
  phones: ['9501726555', '9501626555', '9501026555', '9501584555', '0181-4510555'],
  landline: '0181-4510555',
  landlineHref: 'tel:01814510555',
  whatsappNumber: '9501726555',
  whatsappMessage: 'Hello ShreeJee Travels, I want to enquire about your services.',
  whatsapp: 'https://wa.me/919501726555?text=Hello%20ShreeJee%20Travels%2C%20I%20want%20to%20enquire%20about%20your%20services.',
  email: 'shreejeetraveljalandhar@gmail.com',
  emailHref: 'mailto:shreejeetraveljalandhar@gmail.com',
  siteMap: 'https://share.google/jwrtfakjz3I4w1pmu',
  socialLinks: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61585035246204',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sjtravels.jalandhar?igsh=bmh4MWkyc21ueXM0',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@ShreeJeeTravel',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/shree-jee-travels/about/?viewAsMember=true',
    },
  ],
  approvals: [
    {
      title: 'Approved by Ministry of External Affairs, India',
      label: 'License No',
      number: 'B-3229/PUN/PER/100/5/11227/2025',
    },
    {
      title: 'Approved by Punjab Government',
      label: 'License No',
      number: '1910/MC-6/MA-2/JAL FN:2231',
    },
    {
      title: 'GST Registered',
      label: 'GST No',
      number: '03DLTPS8494F1ZA',
    },
  ],
};

export const workPermitCountries = ['Bulgaria', 'Russia', 'Ukraine', 'Greece', 'Slovakia', 'Australia', 'Canada', 'New Zealand', 'UK', 'Serbia', 'Germany'];
export const studentVisaCountries = ['UK', 'Canada', 'Australia', 'New Zealand', 'Singapore', 'Cyprus', 'Europe', 'South Korea'];
export const touristVisaCountries = ['Schengen Countries', 'Australia', 'New Zealand', 'Canada', 'USA', 'UK'];
export const tourPackages = ['Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Dubai', 'Europe', 'USA', 'UK'];

export const tourPackageImages = {
  Singapore: '/images/singapore.jpg',
  Malaysia: '/images/malaysia.jpg',
  Thailand: '/images/thailand.jpg',
  Vietnam: '/images/vietnam.jpg',
  Dubai: '/images/dubai.jpg',
  Europe: '/images/europe.jpg',
  USA: '/images/usa.jpg',
  UK: '/images/uk.jpg',
};

export const galleryImages = [
  { title: 'Visa consultation', image: '/images/visa-consultation.jpg' },
  { title: 'Airport travel', image: '/images/airport-travel.jpg' },
  { title: 'Singapore skyline', image: '/images/singapore.jpg' },
  { title: 'Dubai travel', image: '/images/dubai.jpg' },
  { title: 'Europe vacation', image: '/images/europe.jpg' },
  { title: 'Student abroad', image: '/images/student-visa.jpg' },
  { title: 'Family holiday', image: '/images/family-holiday.jpg' },
  { title: 'Passport documents', image: '/images/passport-documents.jpg' },
  { title: 'Airplane window', image: '/images/airplane-window.jpg' },
];

export function slugify(value) {
  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/^-+|-+$/g, '');
}

export const services = [
  {
    title: 'Work Permit',
    href: '/work-permit',
    icon: 'briefcase',
    summary: 'Country-specific work permit guidance, document preparation and profile support.',
    countries: workPermitCountries,
    countryPageType: 'work permit',
    eyebrow: 'Career Abroad',
    image: '/images/work-permit.jpg',
    overview: 'Plan your overseas career with structured work permit consulting for documentation, eligibility checks and interview readiness.',
    documents: ['Passport', 'Resume / CV', 'Education certificates', 'Experience letters', 'Photographs', 'Police clearance if applicable', 'Medical records if required'],
    benefits: ['Country-specific checklists', 'Employer document coordination', 'Profile-first guidance', 'Transparent process updates'],
  },
  {
    title: 'Student Visa',
    href: '/student-visa',
    icon: 'graduation',
    summary: 'Study abroad support for destination selection, documents, SOPs and visa files.',
    countries: studentVisaCountries,
    countryPageType: 'student visa',
    eyebrow: 'Study Overseas',
    image: '/images/student-visa.jpg',
    overview: 'Move from course planning to visa file preparation with practical guidance for admissions, finance documents and SOP readiness.',
    documents: ['Passport', 'Academic transcripts', 'Offer letter', 'SOP', 'Financial documents', 'English test score if required', 'Photographs'],
    benefits: ['Course and country direction', 'SOP support', 'Financial document checklist', 'Pre-departure direction'],
  },
  {
    title: 'Tourist Visa',
    href: '/tourist-visa',
    icon: 'passport',
    summary: 'Short-stay visa file preparation for holidays, events and family visits.',
    countries: touristVisaCountries,
    countryPageType: 'tourist visa',
    eyebrow: 'Travel With Confidence',
    image: '/images/tourist-visa.jpg',
    overview: 'Prepare a clear tourist visa file with itinerary, financial, employment and travel-purpose documentation guidance.',
    documents: ['Passport', 'Photographs', 'Bank statements', 'ITR / income proof', 'Employment or business proof', 'Travel itinerary', 'Hotel and flight details'],
    benefits: ['Purpose-based file planning', 'Itinerary assistance', 'Appointment guidance', 'Travel-ready support'],
  },
  {
    title: 'Air Ticketing',
    href: '/air-ticketing',
    icon: 'plane',
    summary: 'All domestic and international routes available at best price.',
    countries: ['Domestic Flights', 'International Flights', 'Student Fares', 'Family Travel', 'Group Travel', 'Multi-city Routes'],
    eyebrow: 'Best Route Options',
    image: '/images/air-ticketing.jpg',
    overview: 'Compare smart fare options for all routes, including domestic, international, student, family and group travel needs.',
    documents: ['Passenger name as per ID', 'Travel dates', 'Destination details', 'Passport for international routes', 'Visa status if applicable', 'Contact details'],
    benefits: ['All routes available', 'Best-price options', 'Fast support', 'CSC Services also available'],
  },
  {
    title: 'Tour Packages',
    href: '/tour-packages',
    icon: 'map',
    summary: 'Curated holiday packages for Asia, Dubai, Europe, USA and UK.',
    countries: tourPackages,
    countryPageType: 'tour package',
    eyebrow: 'Curated Holidays',
    image: '/images/tour-packages.jpg',
    overview: 'Explore ready-to-customize holidays with hotels, transfers, sightseeing, air ticketing and visa support add-ons.',
    documents: ['Passport', 'Travel dates', 'Guest details', 'Budget range', 'Destination preference', 'Visa documents if required'],
    benefits: ['Popular destinations', 'Hotel and transfer planning', 'Sightseeing options', 'Family-friendly itineraries'],
  },
  {
    title: 'CSC Services',
    href: '/csc-services',
    icon: 'screen',
    summary: 'Digital citizen services available alongside travel and visa consultancy.',
    countries: ['Digital Applications', 'Document Assistance', 'Government Forms', 'Utility Services', 'Online Certificates', 'Local Support'],
    eyebrow: 'Digital Services Desk',
    image: '/images/csc-services.jpg',
    overview: 'Access convenient CSC service support from the same trusted desk that handles your travel, visa and ticketing queries.',
    documents: ['Aadhaar or valid ID', 'Mobile number', 'Required certificates', 'Photographs if needed', 'Application details'],
    benefits: ['One-stop assistance', 'Clear document guidance', 'Friendly local support', 'Fast form handling'],
  },
];

export const countryPageServices = services.filter((service) => service.countryPageType);

export function getServiceByHref(href) {
  return services.find((service) => service.href === href);
}

export function getCountryStaticParams(serviceHref) {
  const service = getServiceByHref(serviceHref);
  return (service?.countries || []).map((country) => ({ country: slugify(country) }));
}

export function getCountryPageData(countryOrServiceHref, typeOrCountrySlug) {
  const serviceTypeToHref = {
    'work permit': '/work-permit',
    'student visa': '/student-visa',
    'tourist visa': '/tourist-visa',
    'tour package': '/tour-packages',
    'tour packages': '/tour-packages',
  };

  const isLegacyRouteCall = countryOrServiceHref.startsWith('/');
  const serviceHref = isLegacyRouteCall
    ? countryOrServiceHref
    : serviceTypeToHref[typeOrCountrySlug?.toLowerCase()];
  const countrySlug = isLegacyRouteCall ? typeOrCountrySlug : slugify(countryOrServiceHref);
  const service = getServiceByHref(serviceHref);
  const country = service?.countries.find((item) => slugify(item) === countrySlug);

  if (!service || !country) {
    return null;
  }

  const isTourPackage = service.href === '/tour-packages';
  const image = isTourPackage ? tourPackageImages[country] || service.image : service.image;
  const serviceType = service.countryPageType;

  return {
    country,
    service,
    image,
    title: `${country} ${service.title}`,
    serviceType,
    overview: isTourPackage
      ? `Discover ${country} with ShreeJee Travels through a carefully planned tour package covering destination guidance, stay options, transfers, sightseeing and travel support.`
      : `Get focused ${serviceType} guidance for ${country} with document planning, eligibility review, process support and clear next steps from ShreeJee Travels.`,
    eligibility: isTourPackage
      ? ['Families planning leisure holidays', 'Couples and honeymoon travellers', 'Student and friend groups', 'Business travellers extending for leisure', 'Clients needing tickets, visa support and package planning together']
      : ['Applicants with a valid passport', 'Clients with a clear travel, study or career purpose', 'Applicants who can provide financial and identity documents', 'Families, students, workers or visitors matching destination requirements', 'Clients ready to follow a document checklist before submission'],
    documents: isTourPackage
      ? ['Passport', 'Travel dates', 'Guest names as per ID', 'Budget range', 'Hotel category preference', 'Visa documents if required', 'Contact details']
      : service.documents,
    process: ['Profile discussion', 'Document checklist', 'File or itinerary preparation', 'Review and correction', 'Submission or travel support'],
    benefits: isTourPackage
      ? ['Destination-specific package planning', 'Air ticket and visa add-ons available', 'Hotel, transfer and sightseeing coordination', 'Responsive support before travel']
      : service.benefits,
    relatedServices: services.filter((item) => item.href !== service.href).slice(0, 3),
  };
}

export const testimonials = [
  { name: 'Rahul Patel', service: 'Canada Student Visa', rating: 5, text: 'ShreeJee Travels helped me prepare a clean visa file and explained every document clearly. The whole process felt organized.' },
  { name: 'Priya Sharma', service: 'Dubai Tour Package', rating: 5, text: 'Our Dubai holiday was planned beautifully with hotel, transfers and sightseeing sorted in advance. Support was quick throughout.' },
  { name: 'Amit Joshi', service: 'Europe Work Permit', rating: 5, text: 'I received practical guidance for my work permit documents and interview preparation. Their follow-up made everything manageable.' },
  { name: 'Neha Mehta', service: 'UK Tourist Visa', rating: 5, text: 'The team reviewed my travel history, itinerary and financial documents in detail. My family visa file was handled professionally.' },
  { name: 'Sandeep Singh', service: 'Air Ticketing', rating: 5, text: 'They found a better fare on a tight travel date and shared multiple route options quickly. Simple and transparent service.' },
  { name: 'Kiran Desai', service: 'Australia Student Visa', rating: 5, text: 'From course direction to SOP review, the team stayed patient and clear. I always knew what step was next.' },
];

export const navLinks = [
  ['Home', '/'],
  ['About', '/about-us'],
  ['Work Permit', '/work-permit'],
  ['Student Visa', '/student-visa'],
  ['Tourist Visa', '/tourist-visa'],
  ['Tickets', '/air-ticketing'],
  ['Packages', '/tour-packages'],
  ['CSC', '/csc-services'],
  ['Testimonials', '/testimonials'],
  ['Gallery', '/gallery'],
  ['Privacy', '/privacy-policy'],
  ['Contact', '/contact-us'],
];
