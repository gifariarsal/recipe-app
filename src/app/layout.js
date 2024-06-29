import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Recipe Realm',
  description: 'Recipe app for foodies who love to cook',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
