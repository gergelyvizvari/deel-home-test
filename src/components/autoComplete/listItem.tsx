import { TIdValueData } from '.';

enum THighlight {
  YES = '0',
  NO = '1',
}

const generateHighlightMap = (str: string, find: string) => {
  const lowerCasedParts = str.toLowerCase().split(find.toLowerCase());
  return lowerCasedParts
    .map((part) => THighlight.NO.repeat(part.length))
    .join(THighlight.YES.repeat(find.length));
};

interface Props {
  item: TIdValueData;
  searchValue: string;
  isActive?: boolean;
  onClick: (item: TIdValueData) => void;
}

export default function ListItem({ item, searchValue, isActive, onClick }: Props) {
  const highlightMap = generateHighlightMap(item.value, searchValue);

  const handleClick = () => {
    onClick(item);
  };

  return (
    <li className={`${isActive ? 'active' : ''} listItem`} onClick={handleClick}>
      {[...item.value].map((char, index) => {
        const isHighlighted = highlightMap[index] === THighlight.YES;
        return (
          <span key={index} className={isHighlighted ? 'highlighted' : ''}>
            {char}
          </span>
        );
      })}
    </li>
  );
}
