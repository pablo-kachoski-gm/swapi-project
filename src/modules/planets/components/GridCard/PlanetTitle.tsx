import { PropsWithChildren } from 'react';

export function PlanetTitle({ children }: PropsWithChildren) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}
