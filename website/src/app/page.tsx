import { Hero } from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Temper',
  description: 'Drawer component for React.',
  openGraph: {
    title: 'Temper',
    description: 'Drawer component for React.',
    url: 'https://temper.hackermail.com',
    siteName: 'Enuk Kowalski',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Ughur',
    card: 'summary_large_image',
  },
  themeColor: '#000000',
};

export default function Home() {
  return (
    <main className="antialiased">
      <Hero />
    </main>
  );
}
