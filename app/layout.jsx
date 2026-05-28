import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

export const metadata = {
  title: {
    default: 'ShreeJee Travels | Travel & Visa Consultancy',
    template: '%s | ShreeJee Travels',
  },
  description: 'Premium travel, visa, work permit, student visa, tourist visa, air ticketing, tour package and CSC services consultancy.',
  keywords: ['ShreeJee Travels', 'visa consultancy', 'work permit', 'student visa', 'tourist visa', 'air ticketing', 'tour packages', 'CSC services'],
  openGraph: {
    title: 'ShreeJee Travels',
    description: 'Travel, visa, ticketing, tour package and CSC services consultancy.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
