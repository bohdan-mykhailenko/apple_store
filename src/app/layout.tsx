import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from '@/redux/provider';

const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  keywords: ['Next', 'React'],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const keywordsString =
    metadata.keywords && Array.isArray(metadata.keywords)
      ? metadata.keywords.join(', ')
      : '';
  const titleString = metadata.title as string;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description!} />
        <meta name="keywords" content={keywordsString} />
        <title>{titleString}</title>
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
