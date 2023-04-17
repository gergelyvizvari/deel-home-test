import { useEffect, useRef, useState } from 'react';
import { TIdValueData } from '..';

const filterData = async (data: any[], searchValue: string) => {
  return data.filter((item) =>
    item.value.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const useFilterItems = (items: TIdValueData[], searchValue: string) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const debouncedSearchValue = useRef(searchValue);

  useEffect(() => {
    if (!items.length) return;
    if (!searchValue) return setFilteredItems(items);

    filterData(items, searchValue).then((filterResult: any) => {
      // if the search value has changed, don't update the list
      if (debouncedSearchValue.current !== searchValue) return;
      setFilteredItems(() => filterResult);
    });

    debouncedSearchValue.current = searchValue;
  }, [searchValue, items]);

  return filteredItems;
};
