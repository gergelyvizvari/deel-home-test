import { memo, useEffect, useState } from 'react';
import Search from './search';
import List from './list';
import './index.css';

export interface TIdValueData {
  id: string | number;
  value: string;
  data?: any;
}

interface Props {
  items: TIdValueData[];
  onChange: (item: TIdValueData) => void;
  selectedItemId?: string | number;
  className?: string;
  placeholder?: string;
}

function AutoComplete({ items, selectedItemId, onChange, ...props }: Props) {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (item: TIdValueData) => {
    setSearchValue(item.value);
    setIsOpen(false);
    onChange(item);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setIsOpen(value.length > 0);
  };

  useEffect(() => {
    if (selectedItemId) {
      const selectedItem = items.find((item) => item.id === selectedItemId);
      if (selectedItem) {
        setSearchValue(selectedItem.value);
      }
    }
  }, [selectedItemId, items]);

  return (
    <div className={`autocomplete--container ${props.className}`}>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      <Search
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={props.placeholder}
      />

      {isOpen && searchValue.length > 0 && (
        <List
          items={items}
          searchValue={searchValue}
          onChange={handleChange}
          selectedItemId={selectedItemId}
        />
      )}
    </div>
  );
}

export default memo(AutoComplete);
