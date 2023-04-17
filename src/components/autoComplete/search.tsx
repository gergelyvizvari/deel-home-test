interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function Search({ value, placeholder, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="autocomplete--search">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
