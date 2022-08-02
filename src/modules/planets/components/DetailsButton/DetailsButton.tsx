import { useIntl } from 'react-intl';

export function DetailsButton() {
  const intl = useIntl();

  const detailsButtonLabel = intl.formatMessage({
    id: 'page.planets.labels.detailsButton.title',
  });

  return (
    <a
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
