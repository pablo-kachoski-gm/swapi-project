import { ROUTES } from '@/commons/constants';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <></>;
};

const DEFAULT_ROUTE = ROUTES.planets;

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: DEFAULT_ROUTE,
    },
  };
}

export default Home;
