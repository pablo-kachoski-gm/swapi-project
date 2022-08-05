import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();
  const loading = intl.formatMessage({
    id: 'page.planets.loading',
  });
  const fetchError = intl.formatMessage({
    id: 'page.planets.fetchError',
  });
  const loadMoreResults = intl.formatMessage({
    id: 'page.planets.button.loadMoreResults',
  });
  const noMoreResults = intl.formatMessage({
    id: 'page.planets.button.noMoreResults',
  });
  const planetsBreadcrumbLabel = intl.formatMessage({
    id: 'page.planets.labels.breadcrumb.title',
  });

  return useMemo(
    () => ({
      loading,
      fetchError,
      loadMoreResults,
      noMoreResults,
      planetsBreadcrumbLabel,
    }),
    []
  );
}
