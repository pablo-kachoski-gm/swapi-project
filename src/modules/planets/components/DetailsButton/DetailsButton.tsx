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
        bg-green-700 rounded-lg 
        hover:bg-green-800 
        focus:ring-4 focus:outline-none focus:ring-green-300
        dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {detailsButtonLabel}
    </a>
  );
}
