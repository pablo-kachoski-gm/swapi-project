import { HTMLAttributes, PropsWithChildren, useMemo } from 'react';

type ResidentTitleProps = PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement>;

export function ResidentTitle({ children, className }: ResidentTitleProps) {
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
