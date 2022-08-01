import '@/commons/styles/globals.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { I18nFile } from '@/commons/types';
import en from '@/i18n/en.json';
import { DEFAULT_LANG } from '@/commons/constants/lang';
import { GetLayout, MyAppProps } from '@/commons/types/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('@/commons/mocks').then(({ setupMocks }) => {
    setupMocks();
  });
}

const MESSAGES: Record<string, I18nFile> = {
  en,
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => page;

function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const { locale = DEFAULT_LANG } = useRouter();
  const localeMessages = useMemo(
    () => MESSAGES[locale] || MESSAGES[DEFAULT_LANG],
    [locale]
  );

  const getLayout = Component.getLayout ?? defaultGetLayout;
  return (
    <IntlProvider locale={locale} messages={localeMessages}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </IntlProvider>
  );
}
export default MyApp;
