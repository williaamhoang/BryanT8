import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Steam Clone',
  description: 'A Steam-like website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
