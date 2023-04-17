import { useEffect, useRef, useState } from 'react';

import { useFilterItems } from './hooks/autocomplete';
import ListItem from './listItem';
import { TIdValueData } from '.';

interface Props {
  items: TIdValueData[];
  searchValue: string;
  selectedItemId?: string | number;
  onChange: (item: TIdValueData) => void;
}

export default function List({ items, searchValue, onChange, selectedItemId }: Props) {
  const filteredItems = useFilterItems(items, searchValue);

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <ul className="autocomplete--list">
      {filteredItems.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          searchValue={searchValue}
          onClick={onChange}
          isActive={selectedItemId === item.id}
        />
      ))}
    </ul>
  );
}
