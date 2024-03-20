import { addMonths, getYear, getMonth } from 'date-fns';
import DropDown from '../DropDown';
import { MONTHS_LIST, YEARS_LIST } from '../../constants';
import useSelectedTime from '../../hooks/useSelectedTime';

const Header = () => {
  const { selectedTime, setSelectedTime } = useSelectedTime();

  const prevPeriod = (): void => setSelectedTime(addMonths(selectedTime, -1));

  const nextPeriod = (): void => setSelectedTime(addMonths(selectedTime, 1));

  return (
    <div className="header">
      <button onClick={prevPeriod}>&#60;</button>
      <DropDown optionsList={MONTHS_LIST} defaultOption={MONTHS_LIST[getMonth(selectedTime)]} />
      <DropDown optionsList={YEARS_LIST} defaultOption={getYear(selectedTime)} />
      <button onClick={nextPeriod}>&#62;</button>
    </div>
  );
};

export default Header;
