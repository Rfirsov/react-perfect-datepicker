import { getCurrentYear } from '../utils';

export const MONTHS_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const WEEK_LIST = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const YEARS_LIST = Array.from({ length: 201 }, (_, i) => (getCurrentYear - 100 + i).toString());
