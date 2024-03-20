import { useState } from 'react';
import { lastDayOfWeek, startOfMonth, startOfWeek, addMonths } from 'date-fns';
import { currentTime } from '../utils';

const useSelectedTime = () => {
  const [selectedTime, setSelectedTime] = useState(currentTime);
  console.log("🚀 ~ useSelectedTime ~ selectedTime:", selectedTime)

  const start = startOfWeek(startOfMonth(selectedTime), { weekStartsOn: 1 });
  const end = lastDayOfWeek(startOfMonth(addMonths(startOfMonth(selectedTime), 1)), { weekStartsOn: 1 });

  return { selectedTime, setSelectedTime, start, end };
};

export default useSelectedTime;
