import { PropsWithChildren } from 'react';

export function PlanetResidentsGridLayout({ children }: PropsWithChildren) {
  return <ul className="grid grid-cols-3 gap-32">{children}</ul>;
}
