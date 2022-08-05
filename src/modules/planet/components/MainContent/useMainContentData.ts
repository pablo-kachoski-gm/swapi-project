import { PLANET_QUERY_KEY, RESIDENT_QUERY_KEY } from '@/commons/constants';
import { getPlanet, getResidentById } from '@/commons/services';
import { Resident } from '@/commons/types';
import { getResidentIdFromURL } from '@/commons/utils';
import { ResidentWithId } from '@/planet/types';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useMainContentData(planetId: string) {
  const { data: planet } = useQuery(
    [PLANET_QUERY_KEY],
    () => getPlanet(planetId),
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

  return useMemo(
    () => ({
      planet,
      residents,
    }),
    [planet, residents]
  );
}
