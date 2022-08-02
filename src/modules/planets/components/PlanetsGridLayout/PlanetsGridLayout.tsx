import { PropsWithChildren } from 'react';

export function PlanetsGridLayout({ children }: PropsWithChildren) {
  return <ul className="grid grid-cols-5 gap-16">{children}</ul>;
}
