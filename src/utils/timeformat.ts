import { getYear } from "date-fns";

export const currentTime = new Date();

export const getCurrentYear = getYear(currentTime);
// export const getCurrentMonth = getMonth(currentTime);
// export const currentDay = currentTime.getDate();
// export const currentWeekDay = currentTime.getDay();
