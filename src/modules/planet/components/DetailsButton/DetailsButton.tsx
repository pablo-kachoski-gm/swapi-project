import { HTMLProps } from 'react';
import { useTranslation } from './useTranslation';

export function DetailsButton(props: HTMLProps<HTMLAnchorElement>) {
  const { detailsButtonLabel } = useTranslation();
  return (
    <a
      {...props}
      className="inline-flex items-center 
        py-2 px-3 
        text-sm font-medium text-center text-white
        bg-amber-700 rounded-lg 
        hover:bg-amber-800 
        focus:ring-4 focus:outline-none focus:ring-amber-300
        dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
    >
      {detailsButtonLabel}
    </a>
  );
}
