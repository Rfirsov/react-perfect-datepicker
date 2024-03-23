import { Dispatch, SetStateAction } from 'react';
import { addMonths, getYear, getMonth } from 'date-fns';
import DropDown from '../DropDown';
import { MONTHS_LIST, START_YEAR_OF_COUNT, YEARS_LIST } from '../../constants';

interface HeaderProps {
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
}

const Header = ({ selectedTime, setSelectedTime }: HeaderProps) => {
  const mounthValue = Object.values(MONTHS_LIST)[getMonth(selectedTime)].value;
  const yearValue = Object.values(YEARS_LIST)[getYear(selectedTime) - START_YEAR_OF_COUNT].value;

  const prevPeriod = (): void => setSelectedTime(addMonths(selectedTime, -1));

  const nextPeriod = (): void => setSelectedTime(addMonths(selectedTime, 1));

  return (
    <div className="header">
      <button onClick={prevPeriod}>&#60;</button>
      <DropDown
        type="month"
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        optionsList={MONTHS_LIST}
        defaultOption={mounthValue}
      />
      <DropDown
        type="year"
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        optionsList={YEARS_LIST}
        defaultOption={yearValue}
      />
      <button onClick={nextPeriod}>&#62;</button>
    </div>
  );
};

export default Header;
