import { Planet } from '@/commons/types';
import { useIntl } from 'react-intl';
import { DetailsButton } from '../DetailsButton';
import { PlanetProp } from './PlanetProp';
import { PlanetTitle } from './PlanetTitle';

interface GridCardProps {
  planet: Planet;
}

export function GridCard({ planet }: GridCardProps) {
  const { name, rotation_period, orbital_period, diameter, population } =
    planet;

  const intl = useIntl();
  const populationLabel = intl.formatMessage({
    id: 'page.planets.labels.population.title',
  });
  const rotationLabel = intl.formatMessage({
    id: 'page.planets.labels.rotation.title',
  });
  const orbitalLabel = intl.formatMessage({
    id: 'page.planets.labels.orbital.title',
  });
  const diameterLabel = intl.formatMessage({
    id: 'page.planets.labels.diameter.title',
  });

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <PlanetTitle>{name}</PlanetTitle>
      <PlanetProp>{`${populationLabel}: ${population}`}</PlanetProp>
      <PlanetProp>{`${rotationLabel}: ${rotation_period}`}</PlanetProp>
      <PlanetProp>{`${orbitalLabel}: ${orbital_period}`}</PlanetProp>
      <PlanetProp>{`${diameterLabel}: ${diameter}`}</PlanetProp>
      <DetailsButton />
    </div>
  );
}
