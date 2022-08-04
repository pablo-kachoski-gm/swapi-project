import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();
  const birthLabel = intl.formatMessage({
    id: 'page.planet.labels.birth.title',
  });
  const genderLabel = intl.formatMessage({
    id: 'page.planet.labels.gender.title',
  });
  const hairLabel = intl.formatMessage({
    id: 'page.planet.labels.hair.title',
  });
  const eyeColorLabel = intl.formatMessage({
    id: 'page.planet.labels.eyeColor.title',
  });

  return useMemo(
    () => ({ birthLabel, genderLabel, hairLabel, eyeColorLabel }),
    []
  );
}
