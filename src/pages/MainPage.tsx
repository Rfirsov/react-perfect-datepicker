import { formatDate } from 'date-fns';
import DatePicker from '../components/DatePicker';
import useSelectedTime from '../hooks/useSelectedTime';

const MainPage = () => {
  const { selectedTime, setSelectedTime } = useSelectedTime();
  return (
    <main className="main">
      <input
        type="text"
        readOnly
        value={formatDate(selectedTime, 'MM/dd/yyyy')}
        onChange={(e) => setSelectedTime(new Date(e.target.value))}
      />
      <DatePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </main>
  );
};

export default MainPage;
