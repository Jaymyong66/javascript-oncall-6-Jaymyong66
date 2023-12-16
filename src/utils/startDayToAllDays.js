import DAYS from '../constants/days.js';

export default function startDayToAllDays(startDay, daysOfMonth) {
  const daysArray = Object.values(DAYS);
  let dayIndex = daysArray.indexOf(startDay);
  const resultDays = [];

  for (let i = 0; i < daysOfMonth; i++) {
    resultDays.push(daysArray[dayIndex]);
    dayIndex = (dayIndex + 1) % 7;
  }
  return resultDays;
}
