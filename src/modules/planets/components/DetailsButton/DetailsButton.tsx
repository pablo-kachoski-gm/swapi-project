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
        bg-purple-700 rounded-lg 
        hover:bg-purple-800 
        focus:ring-4 focus:outline-none focus:ring-purple-300
        dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
    >
      {detailsButtonLabel}
    </a>
  );
}
