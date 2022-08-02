import { getPlanet } from '@/planet/services';
import { useQuery } from '@tanstack/react-query';
import { Planet } from '@/commons/types';
import { useRouter } from 'next/router';
import { PLANET_QUERY_KEY } from '@/commons/constants';
import { PlanetInfo } from '../PlanetInfo';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { planetId } = router.query;

  const { data } = useQuery(
    [PLANET_QUERY_KEY],
    () => getPlanet(planetId as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return <PlanetInfo planet={data as Planet} />;
}
