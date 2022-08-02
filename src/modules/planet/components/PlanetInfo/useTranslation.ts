import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
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
  const terrainLabel = intl.formatMessage({
    id: 'page.planets.labels.terrain.title',
  });
  const gravityLabel = intl.formatMessage({
    id: 'page.planets.labels.gravity.title',
  });

  return useMemo(
    () => ({
      populationLabel,
      rotationLabel,
      orbitalLabel,
      diameterLabel,
      terrainLabel,
      gravityLabel,
    }),
    []
  );
}
