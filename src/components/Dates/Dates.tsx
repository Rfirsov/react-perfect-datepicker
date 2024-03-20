import { eachDayOfInterval, format, getDay } from 'date-fns';
import useSelectedTime from '../../hooks/useSelectedTime';
const Dates = () => {
  const { selectedTime, start, end } = useSelectedTime();
  console.log('🚀 ~ Dates ~ selectedTime:', selectedTime);

  // const [selectedDaysToRender, setSelectedDaysToRender] = useState<Date[]>([]);

  const selectedDaysToRender = eachDayOfInterval({ start, end });
  console.log('🚀 ~ Dates ~ start:', start);
  return (
    <div className="week">
      {selectedDaysToRender.map((day) => {
        return (
          <button
            key={format(day, 'MM/dd/yyyy')}
            className={getDay(day) === 0 ? 'weekday sunday' : 'weekday'}
            onClick={() => console.log(format(day, 'MM/dd/yyyy'))}
          >
            {day.getDate()}
          </button>
        );
      })}
    </div>
  );
};

export default Dates;
