import { useState, useEffect } from 'react';
import { lastDayOfWeek, startOfMonth, startOfWeek, eachDayOfInterval, addMonths } from 'date-fns';

interface UseSelectedPeriod {
  selectedDaysToRender: Date[];
}

const useSelectedPeriod = (selectedTime: Date): UseSelectedPeriod => {
  const [selectedDaysToRender, setSelectedDaysToRender] = useState<Date[]>([]);

  useEffect(() => {
    const start = startOfWeek(startOfMonth(selectedTime), { weekStartsOn: 1 });
    const end = lastDayOfWeek(startOfMonth(addMonths(startOfMonth(selectedTime), 1)), { weekStartsOn: 1 });
    setSelectedDaysToRender(eachDayOfInterval({ start, end }));
  }, [selectedTime]);

  return { selectedDaysToRender };
};

export default useSelectedPeriod;
