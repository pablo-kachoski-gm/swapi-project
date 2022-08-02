import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();

  const detailsButtonLabel = intl.formatMessage({
    id: 'page.planets.labels.detailsButton.title',
  });

  return useMemo(() => ({ detailsButtonLabel }), []);
}
