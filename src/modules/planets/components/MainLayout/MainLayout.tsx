import { PageTitle } from '@/commons/components/PageTitle';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { useTranslation } from './useTranslation';

export const MainLayout = ({ children }: PropsWithChildren) => {
  const { pageHeadTitle, pageTitle } = useTranslation();

  return (
    <div>
      <Head>
        <title>{pageHeadTitle}</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-16 py-4 flex flex-col align-center space-y-4">
        <PageTitle>{pageTitle}</PageTitle>
        {children}
      </main>
    </div>
  );
};
