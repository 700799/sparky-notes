import type { Metadata } from 'next';
import './globals.css';
import { ProgressProvider } from '@/lib/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Sparky Notes — Deep Reading Guides for High School Books',
    template: '%s · Sparky Notes',
  },
  description:
    'Browse-first study guides for essential high-school books: deep literary analysis, modern-day (2026) connections, key quotes, and highlights — with rewards as you read.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <ProgressProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ProgressProvider>
      </body>
    </html>
  );
}
