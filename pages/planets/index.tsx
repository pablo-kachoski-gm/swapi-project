import { dehydrate, QueryClient } from '@tanstack/react-query';
import { MainContent } from '@/planets/components/MainContent';
import { getPlanets } from '@/planets/services';
import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { MainLayout } from '@/planets/components/MainLayout';
import { ReactNode } from 'react';

export default function PlanetsPage() {
  return <MainContent />;
}

PlanetsPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery([PLANETS_QUERY_KEY], (props) =>
    getPlanets(props?.pageParam)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
