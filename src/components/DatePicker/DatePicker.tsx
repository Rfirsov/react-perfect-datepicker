import useSelectedTime from '../../hooks/useSelectedTime';
import Dates from '../Dates';
import Header from '../Header';
import Week from '../Week';

const DatePicker = () => {
  const { selectedTime, setSelectedTime } = useSelectedTime();
  return (
    <div className="date-picker">
      <Header selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <Week />
      <Dates selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </div>
  );
};

export default DatePicker;
