import { useIntl } from 'react-intl';

export function DetailsButton() {
  const intl = useIntl();

  const detailsButtonLabel = intl.formatMessage({
    id: 'page.planets.labels.detailsButton.title',
  });

  return (
    <a
      href="#"
      className="inline-flex items-center 
        py-2 px-3 
        text-sm font-medium text-center text-white
        bg-blue-700 rounded-lg 
        hover:bg-blue-800 
        focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {detailsButtonLabel}
    </a>
  );
}
