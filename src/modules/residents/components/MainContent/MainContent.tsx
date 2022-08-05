import { useRouter } from 'next/router';
import { ROUTES } from '@/commons/constants';
import { Resident } from '@/commons/types/models';
import { ResidentInfo } from '../ResidentInfo';
import { Breadcrumb } from '@/commons/components/Breadcrumb';
import { useTranslation } from './useTranslation';
import { useMemo } from 'react';
import { getPlanetIdFromURL } from '@/commons/utils';
import { useMainContentData } from './useMainContentData';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { residentId } = router.query;
  const { resident, planet } = useMainContentData(residentId as string);
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
