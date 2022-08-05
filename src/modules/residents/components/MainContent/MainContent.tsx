import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import {
  PLANET_QUERY_KEY,
  RESIDENT_QUERY_KEY,
  ROUTES,
} from '@/commons/constants';
import { Resident } from '@/commons/types/models';
import { getPlanet, getResidentById } from '@/commons/services';
import { ResidentInfo } from '../ResidentInfo';
import { Breadcrumb } from '@/commons/components/Breadcrumb';
import { useTranslation } from './useTranslation';
import { useMemo } from 'react';
import { getPlanetIdFromURL } from '@/commons/utils';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { residentId } = router.query;

  const { data: resident } = useQuery(
    [RESIDENT_QUERY_KEY],
    () => getResidentById(residentId as string),
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

  const { planetsBreadcrumbLabel } = useTranslation();
  const breadcrumbItems = useMemo(() => {
    const planetId = getPlanetIdFromURL(resident?.homeworld as string);

    return [
      { label: planetsBreadcrumbLabel, redirectURL: ROUTES.planets },
      {
        label: planet?.name || '',
        redirectURL: `${[ROUTES.planets, planetId].join('/')}`,
      },
      { label: resident?.name || '' },
    ];
  }, [planetsBreadcrumbLabel, planet, resident]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ResidentInfo resident={resident as Resident} />;
    </>
  );
}
