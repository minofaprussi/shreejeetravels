export const site = {
  name: 'ShreeJee Travels',
  phone: '+91 99999 99999',
  phoneHref: 'tel:+919999999999',
  whatsapp: 'https://wa.me/919999999999',
  email: 'info@shreejeetravels.com',
};

export const workPermitCountries = ['Bulgaria', 'Russia', 'Ukraine', 'Greece', 'Slovakia', 'Australia', 'Canada', 'New Zealand', 'UK', 'Serbia', 'Germany'];
export const studentVisaCountries = ['UK', 'Canada', 'Australia', 'New Zealand', 'Singapore', 'Cyprus', 'Europe', 'South Korea'];
export const touristVisaCountries = ['Schengen Countries', 'Australia', 'New Zealand', 'Canada', 'USA', 'UK'];
export const tourPackages = ['Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Dubai', 'Europe', 'USA', 'UK'];

export const services = [
  {
    title: 'Work Permit',
    href: '/work-permit',
    icon: 'briefcase',
    summary: 'Country-specific work permit guidance, document preparation and profile support.',
    countries: workPermitCountries,
    eyebrow: 'Career Abroad',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
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
    eyebrow: 'Study Overseas',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
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
    eyebrow: 'Travel With Confidence',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
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
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80',
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
    eyebrow: 'Curated Holidays',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
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
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    overview: 'Access convenient CSC service support from the same trusted desk that handles your travel, visa and ticketing queries.',
    documents: ['Aadhaar or valid ID', 'Mobile number', 'Required certificates', 'Photographs if needed', 'Application details'],
    benefits: ['One-stop assistance', 'Clear document guidance', 'Friendly local support', 'Fast form handling'],
  },
];

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
  ['Contact', '/contact-us'],
];
