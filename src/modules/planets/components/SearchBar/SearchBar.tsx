import { ChangeEvent, forwardRef, HTMLProps } from 'react';
import { useTranslation } from './useTranslation';

type SearchBarProps = HTMLProps<HTMLInputElement> & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onChange }, ref) => {
    const { searchPlaceholder } = useTranslation();
    return (
      <div>
        <input
          className="border focus:outline-none rounded-md px-2 focus:border-cyan-500 border-gray-500 border-solid"
          type="text"
          onChange={onChange}
          ref={ref}
          placeholder={searchPlaceholder}
        />
      </div>
    );
  }
);
SearchBar.displayName = 'SearchBar';
export { SearchBar };
