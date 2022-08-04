import { dehydrate, QueryClient } from '@tanstack/react-query';
import { RESIDENT_QUERY_KEY, ROUTES } from '@/commons/constants';
import { ReactNode } from 'react';
import { NextPageContext } from 'next';
import { getResidentById } from '@/commons/services';
import { MainContent } from '@/residents/components/MainContent';
import { MainLayout } from '@/residents/components/MainLayout';

export default function ResidentPage() {
  return <MainContent />;
}

ResidentPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  const { residentId } = ctx.query;
  if (!residentId) {
    return {
      redirect: {
        permanent: false,
        destination: ROUTES.planets,
      },
    };
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([RESIDENT_QUERY_KEY], () =>
    getResidentById(residentId as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
