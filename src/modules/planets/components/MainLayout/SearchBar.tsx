import { useIntl } from 'react-intl';

export const SearchBar = () => {
  const intl = useIntl();
  const searchPlaceholder = intl.formatMessage({
    id: 'page.planets.search.placeholder',
  });

  return (
    <div>
      <input type="text" placeholder={searchPlaceholder} />
    </div>
  );
};
