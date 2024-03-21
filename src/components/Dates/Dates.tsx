import { format, getDay } from 'date-fns';
import useSelectedPeriod from '../../hooks/useSelectedPeriod';

interface DatesProps {
  selectedTime: Date;
}

const Dates = ({ selectedTime }: DatesProps) => {
  const { selectedDaysToRender } = useSelectedPeriod(selectedTime);

  console.log('render Dates');

  return (
    <div className="week">
      {selectedDaysToRender.map((day) => {
        return (
          <button
            key={format(day, 'MM/dd/yyyy')}
            className={getDay(day) === 0 ? 'weekday sunday' : 'weekday'}
            onClick={() => {
              console.log(format(day, 'MM/dd/yyyy'));
            }}
          >
            {day.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default Dates;
