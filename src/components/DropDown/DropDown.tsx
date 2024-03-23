import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { setMonth, setYear } from 'date-fns';
import { START_YEAR_OF_COUNT } from '../../constants';

interface DropDownProps {
  type: 'month' | 'year';
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
  optionsList: ValueTitleMonth[] | ValueTitleYear[];
  defaultOption: number;
}

const DropDown = ({ type, selectedTime, setSelectedTime, optionsList, defaultOption }: DropDownProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);

    if (type === 'month') setSelectedTime(setMonth(selectedTime, value));

    if (type === 'year') setSelectedTime(setYear(selectedTime, value + START_YEAR_OF_COUNT));
  };

  return (
    <select value={defaultOption} onChange={handleChange}>
      {optionsList.map(({ value, title }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
