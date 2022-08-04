import { getPlanet } from '@/planet/services';
import { useQueries, useQuery } from '@tanstack/react-query';
import { Planet } from '@/commons/types';
import { useRouter } from 'next/router';
import {
  PLANET_QUERY_KEY,
  RESIDENT_QUERY_KEY,
  ROUTES,
} from '@/commons/constants';
import { PlanetInfo } from '../PlanetInfo';
import { Resident } from '@/commons/types/models';
import { getResidentIdFromURL } from './utils';
import { useCallback, useMemo } from 'react';
import { ResidentWithId } from '@/planet/types';
import { PlanetResidentsGridLayout } from '../PlanetResidentsGridLayout';
import { GridCard } from '../GridCard';
import { getResidentById } from '@/commons/services';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { planetId } = router.query;

  const { data: planet } = useQuery(
    [PLANET_QUERY_KEY],
    () => getPlanet(planetId as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const residentQueries = useQueries({
    queries: planet!.residents.map((residentURL) => {
      const residentId = getResidentIdFromURL(residentURL);
      return {
        queryKey: [RESIDENT_QUERY_KEY, residentId],
        queryFn: () => getResidentById(residentId),
        enabled: !!planet,
      };
    }),
  });

  const residents = useMemo(
    () =>
      residentQueries
        ?.filter(({ isSuccess }) => isSuccess)
        .map<ResidentWithId>(({ data }) => {
          const resident = data as Resident;
          return {
            ...resident,
            id: getResidentIdFromURL(resident?.url as string),
          };
        }),
    [residentQueries]
  );

  const onGridCardButtonClick = useCallback(
    (id: string) => {
      const residentURL = [router.asPath, ROUTES.resident, id].join('/');
      router.push(residentURL);
    },
    [router]
  );

  return (
    <div className="flex flex-row justify-between">
      <PlanetInfo planet={planet as Planet} />
      <PlanetResidentsGridLayout>
        {residents?.map((resident) => (
          <GridCard
            key={`${resident.name}`}
            resident={resident}
            onClick={onGridCardButtonClick}
          />
        ))}
      </PlanetResidentsGridLayout>
    </div>
  );
}
