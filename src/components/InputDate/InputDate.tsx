import { useContext } from 'react';
import { formatDate } from 'date-fns';
import MainPageContext from '../../store/MainPageContext';

const InputDate = () => {
  const { selectedTime, setSelectedTime } = useContext(MainPageContext);
  return (
    <input
      type="text"
      readOnly
      value={formatDate(selectedTime, 'MM/dd/yyyy')}
      onChange={(e) => setSelectedTime(new Date(e.target.value))}
    />
  );
};

export default InputDate;
