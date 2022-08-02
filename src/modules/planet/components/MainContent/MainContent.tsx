import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { getPlanet } from '@/planet/services';
import { useQuery } from '@tanstack/react-query';
import { Planet } from '@/commons/types';
import { useRouter } from 'next/router';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { planetId } = router.query;

  const { data } = useQuery(
    [PLANETS_QUERY_KEY],
    () => getPlanet(planetId as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const planet = data as Planet;
  return (
    <>
      <div>{planet?.name}</div>
    </>
  );
}
