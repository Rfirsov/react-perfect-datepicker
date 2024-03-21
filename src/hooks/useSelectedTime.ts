import { Dispatch, SetStateAction, useState } from 'react';
import { currentTime } from '../utils';

interface UseSelectedTime {
  selectedTime: Date;
  setSelectedTime: Dispatch<SetStateAction<Date>>;
}
const useSelectedTime = (): UseSelectedTime => {
  const [selectedTime, setSelectedTime] = useState(currentTime);

  return { selectedTime, setSelectedTime };
};

export default useSelectedTime;
