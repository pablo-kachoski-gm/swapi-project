import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { getPlanets } from '@/planets/services';
import { useQuery } from '@tanstack/react-query';

export function MainContent(): JSX.Element {
  const { data } = useQuery([PLANETS_QUERY_KEY], getPlanets, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const planets = data?.results;

  return (
    <ul>
      {planets?.map((planet) => (
        <li key={`${planet.name}`}>{planet.name}</li>
      ))}
    </ul>
  );
}
