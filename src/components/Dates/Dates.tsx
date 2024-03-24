import { useContext } from 'react';
import { formatDate, getDay } from 'date-fns';
import useSelectedPeriod from '../../hooks/useSelectedPeriod';
import MainPageContext from '../../store/MainPageContext';

const Dates = () => {
  const { selectedTime, setSelectedTime } = useContext(MainPageContext);
  const { selectedDaysToRender } = useSelectedPeriod(selectedTime);

  return (
    <div className="week">
      {selectedDaysToRender.map((day) => {
        return (
          <button
            key={formatDate(day, 'MM/dd/yyyy')}
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
