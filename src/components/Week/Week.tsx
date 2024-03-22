import { memo } from 'react';
import { WEEK_LIST } from '../../constants';

const Week = () => {
  return (
    <div className="week-title">
      {WEEK_LIST.map((day) => (
        <span key={day}>{day.substring(0, 2)}</span>
      ))}
    </div>
  );
};

export default memo(Week);
