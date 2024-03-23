import { Dispatch, SetStateAction } from 'react';
import Dates from '../Dates';
import Header from '../Header';
import Week from '../Week';

interface DatePickerProps {
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
}

const DatePicker = ({ selectedTime, setSelectedTime }: DatePickerProps) => {
  return (
    <div className="date-picker">
      <Header selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <Week />
      <Dates selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </div>
  );
};

export default DatePicker;
