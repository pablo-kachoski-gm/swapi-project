import { PlanetWithId } from '@/planets/types';
import { DetailsButton } from '../DetailsButton';
import { PlanetProp } from './PlanetProp';
import { PlanetTitle } from './PlanetTitle';
import { useTranslation } from './useTranslation';
import { useCallback } from 'react';

interface GridCardProps {
  planet: PlanetWithId;
  onClick: (id: string) => void;
}

export function GridCard({ planet, onClick }: GridCardProps) {
  const { id, name, rotation_period, orbital_period, diameter, population } =
    planet;

  const { populationLabel, rotationLabel, orbitalLabel, diameterLabel } =
    useTranslation();

  const onDetailsClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <div className="text-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <PlanetTitle>{name}</PlanetTitle>
      <PlanetProp>{`${populationLabel}: ${population}`}</PlanetProp>
      <PlanetProp>{`${rotationLabel}: ${rotation_period}`}</PlanetProp>
      <PlanetProp>{`${orbitalLabel}: ${orbital_period}`}</PlanetProp>
      <PlanetProp>{`${diameterLabel}: ${diameter}`}</PlanetProp>
      <DetailsButton onClick={onDetailsClick} />
    </div>
  );
}
