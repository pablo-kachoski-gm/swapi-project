import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { GridCard } from '@/planets/components/GridCard';
import { PlanetsGridLayout } from '@/planets/components/PlanetsGridLayout';
import { SearchBar } from '@/planets/components/SearchBar';
import { usePlanetsFilter } from '@/planets/hooks/usePlanetsFilter';
import { getPlanets } from '@/planets/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { LoadMoreButton } from '../LoadMoreButton';
import { useTranslation } from './useTranslation';

export function MainContent(): JSX.Element {
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

  const { loading, fetchError, loadMoreResults, noMoreResults } =
    useTranslation();

  const planets = useMemo(
    () => data?.pages.flatMap((planetPage) => planetPage?.results) || [],
    [data]
  );
  const { filteredData, filterPlanets } = usePlanetsFilter(planets);

  const disabledLoadMoreButton = !hasNextPage || isFetching;

  const onSearchPlanet = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => filterPlanets(event.target.value),
    [filterPlanets]
  );

  const searchRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const fetchMoreData = useCallback(() => {
    fetchNextPage();
    searchRef.current.value = '';
  }, [fetchNextPage]);

  if (isLoading) return <div className="loading">{loading}</div>;
  if (error) return <div className="error">{fetchError}</div>;

  return (
    <>
      <SearchBar ref={searchRef} onChange={onSearchPlanet} />
      <PlanetsGridLayout>
        {filteredData?.map((planet) => (
          <GridCard key={`${planet.name}`} planet={planet} />
        ))}
      </PlanetsGridLayout>
      <div className="flex justify-center p-4">
        <LoadMoreButton
          onClick={fetchMoreData}
          disabled={disabledLoadMoreButton}
        >
          {isFetching ? loading : hasNextPage ? loadMoreResults : noMoreResults}
        </LoadMoreButton>
      </div>
    </>
  );
}
