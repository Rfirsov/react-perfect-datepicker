import { getYear } from 'date-fns';

export const currentTime = new Date();
export const getCurrentYear = getYear(currentTime);
