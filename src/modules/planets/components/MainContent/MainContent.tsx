import { PLANETS_QUERY_KEY } from '@/commons/constants';
import { GridCard } from '@/planets/components/GridCard';
import { PlanetsGridLayout } from '@/planets/components/PlanetsGridLayout';
import { getPlanets } from '@/planets/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { LoadMoreButton } from '../LoadMoreButton';

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

  const intl = useIntl();
  const loading = intl.formatMessage({
    id: 'page.planets.loading',
  });
  const fetchError = intl.formatMessage({
    id: 'page.planets.fetchError',
  });
  const loadMoreResults = intl.formatMessage({
    id: 'page.planets.button.loadMoreResults',
  });
  const noMoreResults = intl.formatMessage({
    id: 'page.planets.button.noMoreResults',
  });

  if (isLoading) return <div className="loading">{loading}</div>;
  if (error) return <div className="error">{fetchError}</div>;

  const fetchMoreData = useCallback(() => fetchNextPage(), [fetchNextPage]);
  const disabledLoadMoreButton = !hasNextPage || isFetching;

  return (
    <>
      <PlanetsGridLayout>
        {data?.pages.map((planetPage) => {
          return planetPage?.results.map((planet) => (
            <GridCard key={`${planet.name}`} planet={planet} />
          ));
        })}
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
