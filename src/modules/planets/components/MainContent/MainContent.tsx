import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { GridCard } from '@/planets/components/GridCard';
import { PlanetsGridLayout } from '@/planets/components/PlanetsGridLayout';
import { getPlanets } from '@/planets/services';
import { useQuery } from '@tanstack/react-query';

export function MainContent(): JSX.Element {
  const { data } = useQuery([PLANETS_QUERY_KEY], getPlanets, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const planets = data?.results;
  return (
    <PlanetsGridLayout>
      {planets?.map((planet) => (
        <GridCard key={`${planet.name}`} planet={planet} />
      ))}
    </PlanetsGridLayout>
  );
}
