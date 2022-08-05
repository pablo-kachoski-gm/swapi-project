import { PLANET_QUERY_KEY, RESIDENT_QUERY_KEY } from '@/commons/constants';
import { getPlanet, getResidentById } from '@/commons/services';
import { getPlanetIdFromURL } from '@/commons/utils';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useMainContentData(residentId: string) {
  const { data: resident } = useQuery(
    [RESIDENT_QUERY_KEY],
    () => getResidentById(residentId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: planet } = useQuery(
    [PLANET_QUERY_KEY],
    () => {
      const planetId = getPlanetIdFromURL(resident?.homeworld as string);
      return getPlanet(planetId as string);
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !!resident,
    }
  );

  return useMemo(
    () => ({
      planet,
      resident,
    }),
    [planet, resident]
  );
}
