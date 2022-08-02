import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();
  const searchPlaceholder = intl.formatMessage({
    id: 'page.planets.search.placeholder',
  });

  return useMemo(() => ({ searchPlaceholder }), []);
}
