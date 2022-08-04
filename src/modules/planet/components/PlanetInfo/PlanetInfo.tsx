import { Planet } from '@/commons/types';
import { PlanetProp } from './PlanetProp';
import { PlanetTitle } from './PlanetTitle';
import { useTranslation } from './useTranslation';

interface PlanetInfoProps {
  planet: Planet;
}

export function PlanetInfo({ planet }: PlanetInfoProps) {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    population,
    terrain,
    gravity,
  } = planet;

  const {
    populationLabel,
    rotationLabel,
    orbitalLabel,
    diameterLabel,
    terrainLabel,
    gravityLabel,
  } = useTranslation();

  return (
    <div className="p-16 pb-32 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <PlanetTitle className="mb-16">{name}</PlanetTitle>
      <PlanetProp>{`${populationLabel}: ${population}`}</PlanetProp>
      <PlanetProp>{`${rotationLabel}: ${rotation_period}`}</PlanetProp>
      <PlanetProp>{`${orbitalLabel}: ${orbital_period}`}</PlanetProp>
      <PlanetProp>{`${diameterLabel}: ${diameter}`}</PlanetProp>
      <PlanetProp>{`${terrainLabel}: ${terrain}`}</PlanetProp>
      <PlanetProp>{`${gravityLabel}: ${gravity}`}</PlanetProp>
    </div>
  );
}
