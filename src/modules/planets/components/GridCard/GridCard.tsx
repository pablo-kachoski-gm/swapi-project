import { Planet } from '@/commons/types';
import { DetailsButton } from '../DetailsButton';
import { PlanetProp } from './PlanetProp';
import { PlanetTitle } from './PlanetTitle';
import { useTranslation } from './useTranslation';

interface GridCardProps {
  planet: Planet;
}

export function GridCard({ planet }: GridCardProps) {
  const { name, rotation_period, orbital_period, diameter, population } =
    planet;

  const { populationLabel, rotationLabel, orbitalLabel, diameterLabel } =
    useTranslation();

  return (
    <div className="text-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <PlanetTitle>{name}</PlanetTitle>
      <PlanetProp>{`${populationLabel}: ${population}`}</PlanetProp>
      <PlanetProp>{`${rotationLabel}: ${rotation_period}`}</PlanetProp>
      <PlanetProp>{`${orbitalLabel}: ${orbital_period}`}</PlanetProp>
      <PlanetProp>{`${diameterLabel}: ${diameter}`}</PlanetProp>
      <DetailsButton />
    </div>
  );
}
