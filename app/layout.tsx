import { Metadata } from 'next';
import { shareTechMono } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | National Pokédex',
    default: 'National Pokédex',
  },
  description: 'A one-stop app for instant access to Pokémon data and insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='size-full overflow-hidden'>
      <body className={`${shareTechMono.className} antialiased`}>{children}</body>
    </html>
  );
}
