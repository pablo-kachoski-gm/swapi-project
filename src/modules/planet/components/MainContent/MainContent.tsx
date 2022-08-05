import { Planet } from '@/commons/types';
import { useRouter } from 'next/router';
import { ROUTES } from '@/commons/constants';
import { PlanetInfo } from '../PlanetInfo';
import { useCallback, useMemo } from 'react';
import { PlanetResidentsGridLayout } from '../PlanetResidentsGridLayout';
import { GridCard } from '../GridCard';
import { Breadcrumb } from '@/commons/components/Breadcrumb';
import { useTranslation } from './useTranslation';
import { useMainContentData } from './useMainContentData';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { planetId } = router.query;
  const { residents, planet } = useMainContentData(planetId as string);

  const onGridCardButtonClick = useCallback(
    (id: string) => {
      const residentURL = [router.asPath, ROUTES.resident, id].join('/');
      router.push(residentURL);
    },
    [router]
  );

  const { planetsBreadcrumbLabel } = useTranslation();
  const breadcrumbItems = useMemo(
    () => [
      { label: planetsBreadcrumbLabel, redirectURL: ROUTES.planets },
      { label: planet?.name || '' },
    ],
    [planetsBreadcrumbLabel, planet?.name]
  );

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
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
    </>
  );
}
