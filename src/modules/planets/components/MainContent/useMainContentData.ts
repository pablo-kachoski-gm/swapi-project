import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { getPlanetIdFromURL } from '@/commons/utils';
import { usePlanetsFilter } from '@/planets/hooks/usePlanetsFilter';
import { getPlanets } from '@/planets/services';
import { PlanetWithId } from '@/planets/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useMainContentData() {
  const { hasNextPage, isLoading, fetchNextPage, data, error, isFetching } =
    useInfiniteQuery(
      [PLANETS_QUERY_KEY],
      (props) => getPlanets(props.pageParam),
      {
        getNextPageParam: (lastPageData) => lastPageData?.next || undefined,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    );

  const planets = useMemo(
    () =>
      data?.pages.flatMap((planetPage) =>
        planetPage?.results.map<PlanetWithId>((planet) => ({
          ...planet,
          id: getPlanetIdFromURL(planet.url),
        }))
      ) || [],
    [data]
  );
  const { filteredData, filterPlanets } = usePlanetsFilter(planets);

  return useMemo(
    () => ({
      filteredData,
      filterPlanets,
      hasNextPage,
      isLoading,
      fetchNextPage,
      error,
      isFetching,
    }),
    [
      filteredData,
      filterPlanets,
      hasNextPage,
      isLoading,
      fetchNextPage,
      error,
      isFetching,
    ]
  );
}
