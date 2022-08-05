import { ROUTES } from '@/commons/constants';
import { Breadcrumb } from '@/commons/components/Breadcrumb';
import { GridCard } from '@/planets/components/GridCard';
import { PlanetsGridLayout } from '@/planets/components/PlanetsGridLayout';
import { SearchBar } from '@/planets/components/SearchBar';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useMemo, useRef } from 'react';
import { LoadMoreButton } from '../LoadMoreButton';
import { useTranslation } from './useTranslation';
import { useMainContentData } from './useMainContentData';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const {
    hasNextPage,
    isFetching,
    isLoading,
    error,
    fetchNextPage,
    filterPlanets,
    filteredData,
  } = useMainContentData();

  const {
    loading,
    fetchError,
    loadMoreResults,
    noMoreResults,
    planetsBreadcrumbLabel,
  } = useTranslation();

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

  const onGridCardButtonClick = useCallback(
    (id: string) => {
      const planetURL = [ROUTES.planets, id].join('/');
      router.push(planetURL);
    },
    [router]
  );

  const breadcrumbItems = useMemo(
    () => [{ label: planetsBreadcrumbLabel }],
    [planetsBreadcrumbLabel]
  );

  if (isLoading) return <div>{loading}</div>;
  if (error) return <div>{fetchError}</div>;

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <SearchBar ref={searchRef} onChange={onSearchPlanet} />
      <PlanetsGridLayout>
        {filteredData?.map((planet) => (
          <GridCard
            key={`${planet.name}`}
            planet={planet}
            onClick={onGridCardButtonClick}
          />
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
