interface DropDownProps {
  optionsList: string[];
  defaultOption: string | number;
}

const DropDown = ({ optionsList, defaultOption }: DropDownProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // console.log('🚀 ~ DropDown ~ value:', value);
  };

  return (
    <select value={defaultOption} onChange={handleChange}>
      {optionsList.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
