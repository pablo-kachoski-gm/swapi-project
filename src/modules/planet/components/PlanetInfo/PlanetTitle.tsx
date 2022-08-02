import { HTMLAttributes, PropsWithChildren, useMemo } from 'react';

type PlanetTitleProps = PropsWithChildren & HTMLAttributes<HTMLHeadingElement>;

export function PlanetTitle({ children, className }: PlanetTitleProps) {
  const mergedClasses = useMemo(
    () =>
      [
        'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white',
        className,
      ].join(' '),
    [className]
  );
  return <h5 className={mergedClasses}>{children}</h5>;
}
