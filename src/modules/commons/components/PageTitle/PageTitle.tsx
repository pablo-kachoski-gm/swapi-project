import { PropsWithChildren } from 'react';

export function PageTitle({ children }: PropsWithChildren) {
  return <div className="text-3xl font-bold underline">{children}</div>;
}
