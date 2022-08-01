import { PropsWithChildren } from 'react';

export function PlanetProp({ children }: PropsWithChildren) {
  return (
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {children}
    </p>
  );
}
