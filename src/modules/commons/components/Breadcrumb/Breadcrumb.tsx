import Link from 'next/link';

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
            <>
              {separator}
              {item.label}
            </>
          );

        return (
          <>
            {separator}
            <span className="text-blue-400 underline">
              <Link key={`${item.label}`} href={item.redirectURL as string}>
                {item.label}
              </Link>
            </span>
          </>
        );
      })}
    </nav>
  );
}
