import { useContext, ChangeEvent } from 'react';
import { setMonth, setYear } from 'date-fns';
import { START_YEAR_OF_COUNT } from '../../constants';
import MainPageContext from '../../store/MainPageContext';

interface DropDownProps {
  type: 'month' | 'year';
  optionsList: ValueTitleMonth[] | ValueTitleYear[];
  defaultOption: number;
}

const DropDown = ({ type, optionsList, defaultOption }: DropDownProps) => {
  const { selectedTime, setSelectedTime } = useContext(MainPageContext);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
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
