import { useContext } from 'react';
import { addMonths, getYear, getMonth } from 'date-fns';
import DropDown from '../DropDown';
import { MONTHS_LIST, START_YEAR_OF_COUNT, YEARS_LIST } from '../../constants';
import MainPageContext from '../../store/MainPageContext';

const Header = () => {
  const { selectedTime, setSelectedTime } = useContext(MainPageContext);
  const mounthValue = Object.values(MONTHS_LIST)[getMonth(selectedTime)].value;
  const yearValue = Object.values(YEARS_LIST)[getYear(selectedTime) - START_YEAR_OF_COUNT].value;

  const prevPeriod = (): void => setSelectedTime(addMonths(selectedTime, -1));

  const nextPeriod = (): void => setSelectedTime(addMonths(selectedTime, 1));

  return (
    <div className="header">
      <button onClick={prevPeriod}>&#60;</button>
      <DropDown type="month" optionsList={MONTHS_LIST} defaultOption={mounthValue} />
      <DropDown type="year" optionsList={YEARS_LIST} defaultOption={yearValue} />
      <button onClick={nextPeriod}>&#62;</button>
    </div>
  );
};

export default Header;
