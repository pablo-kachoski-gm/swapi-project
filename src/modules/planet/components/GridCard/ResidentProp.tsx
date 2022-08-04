import { PropsWithChildren } from 'react';

export function ResidentProp({ children }: PropsWithChildren) {
  return (
    <p className="mb-3 font-normal text-sky-50 dark:text-sky-50">{children}</p>
  );
}
