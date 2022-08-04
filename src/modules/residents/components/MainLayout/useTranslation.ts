import { useMemo } from 'react';
import { useIntl } from 'react-intl';

export function useTranslation() {
  const intl = useIntl();
  const pageHeadTitle = intl.formatMessage({ id: 'page.resident.head.title' });
  const pageTitle = intl.formatMessage({ id: 'page.resident.title' });

  return useMemo(() => ({ pageHeadTitle, pageTitle }), []);
}
