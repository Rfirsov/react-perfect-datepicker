import Dates from '../Dates';
import Header from '../Header';
import Week from '../Week';

const DatePicker = () => {
  return (
    <div className="date-picker">
      <Header />
      <Week />
      <Dates />
    </div>
  );
};

export default DatePicker;
