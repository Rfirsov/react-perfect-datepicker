import { Dispatch, SetStateAction } from 'react';
import { format, getDay } from 'date-fns';
import useSelectedPeriod from '../../hooks/useSelectedPeriod';

interface DatesProps {
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
}

const Dates = ({ selectedTime, setSelectedTime }: DatesProps) => {
  const { selectedDaysToRender } = useSelectedPeriod(selectedTime);

  return (
    <div className="week">
      {selectedDaysToRender.map((day) => {
        return (
          <button
            key={format(day, 'MM/dd/yyyy')}
            className={getDay(day) === 0 ? 'weekday sunday' : 'weekday'}
            onClick={() => setSelectedTime(day)}
          >
            {day.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default Dates;
