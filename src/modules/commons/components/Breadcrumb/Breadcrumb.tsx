import Link from 'next/link';
import { Fragment } from 'react';

interface BreadcrumbItem {
  label: string;
  redirectURL?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const separator = <span>&gt;</span>;

  return (
    <nav className="flex flex-row p-8 text-lg font-bold align-middle space-x-2">
      {items.map((item, index, arr) => {
        if (index + 1 === arr.length)
          return (
            <Fragment key={`${item.label}`}>
              {separator}
              {item.label}
            </Fragment>
          );

        return (
          <Fragment key={`${item.label}`}>
            {separator}
            <span className="text-blue-400 underline">
              <Link href={item.redirectURL as string}>{item.label}</Link>
            </span>
          </Fragment>
        );
      })}
    </nav>
  );
}
