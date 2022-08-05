import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();
  const planetsBreadcrumbLabel = intl.formatMessage({
    id: 'page.planets.labels.breadcrumb.title',
  });

  return useMemo(
    () => ({
      planetsBreadcrumbLabel,
    }),
    []
  );
}
