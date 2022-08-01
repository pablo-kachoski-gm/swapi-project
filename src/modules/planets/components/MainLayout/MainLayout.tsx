import { PageTitle } from '@/commons/components/PageTitle';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { SearchBar } from './SearchBar';

export const MainLayout = ({ children }: PropsWithChildren) => {
  const intl = useIntl();
  const pageHeadTitle = intl.formatMessage({ id: 'page.planets.head.title' });
  const pageTitle = intl.formatMessage({ id: 'page.planets.title' });

  return (
    <div>
      <Head>
        <title>{pageHeadTitle}</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 py-4 flex flex-col align-center space-y-4">
        <PageTitle>{pageTitle}</PageTitle>
        <SearchBar />
        {children}
      </main>
    </div>
  );
};
