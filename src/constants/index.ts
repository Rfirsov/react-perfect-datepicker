import { getCurrentYear } from '../utils';

export const START_YEAR_OF_COUNT = 1924;

export const MONTHS_LIST: ValueTitleMonth[] = [
  { value: 0, title: 'January' },
  { value: 1, title: 'February' },
  { value: 2, title: 'March' },
  { value: 3, title: 'April' },
  { value: 4, title: 'May' },
  { value: 5, title: 'June' },
  { value: 6, title: 'July' },
  { value: 7, title: 'August' },
  { value: 8, title: 'September' },
  { value: 9, title: 'October' },
  { value: 10, title: 'November' },
  { value: 11, title: 'December' }
];

export const WEEK_LIST = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const YEARS_LIST: ValueTitleYear[] = Array.from({ length: 201 }, (_, i) => {
  return { value: i, title: `${getCurrentYear - 100 + i}` };
});
