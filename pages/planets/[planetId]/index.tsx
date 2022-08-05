import { dehydrate, QueryClient } from '@tanstack/react-query';
import { MainContent } from '@/planet/components/MainContent';
import { getPlanet } from '@/commons/services';
import { PLANET_QUERY_KEY, ROUTES } from '@/commons/constants';
import { MainLayout } from '@/planet/components/MainLayout';
import { ReactNode } from 'react';
import { NextPageContext } from 'next';

export default function PlanetPage() {
  return <MainContent />;
}

PlanetPage.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(ctx: NextPageContext) {
  const { planetId } = ctx.query;
  if (!planetId) {
    return {
      redirect: {
        permanent: false,
        destination: ROUTES.planets,
      },
    };
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([PLANET_QUERY_KEY], () =>
    getPlanet(planetId as string)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
