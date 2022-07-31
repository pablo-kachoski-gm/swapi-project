import { PageTitle } from '@/commons/components/PageTitle';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';

export const MainLayout = ({ children }: PropsWithChildren) => {
  const intl = useIntl();
  const pageHeadTitle = intl.formatMessage({ id: 'page.planets.head.title' });
  const pageTitle = intl.formatMessage({ id: 'page.planets.title' });

  return (
    <div className="py-4">
      <Head>
        <title>{pageHeadTitle}</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 flex flex-col justify-center align-center">
        <PageTitle>{pageTitle}</PageTitle>
        {children}
      </main>
    </div>
  );
};
