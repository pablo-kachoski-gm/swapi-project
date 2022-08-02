import { PropsWithChildren } from 'react';

type MyButtonProps = React.HTMLProps<HTMLButtonElement> & PropsWithChildren;

export function LoadMoreButton({ children, onClick, disabled }: MyButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center 
     py-4 px-16 
     text-sm font-medium text-center text-white
     bg-blue-700 rounded-lg 
     hover:bg-blue-800 
     focus:ring-4 focus:outline-none focus:ring-blue-300
     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
     disabled:bg-gray-600 disabled:dark:hover:bg-gray-700 disabled:focus:ring-gray-800
     "
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
