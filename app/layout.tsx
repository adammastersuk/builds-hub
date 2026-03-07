import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Builds Hub',
  description: 'Central hub for Adam Masters build projects.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
