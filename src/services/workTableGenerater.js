import DAYS from '../constants/days.js';
import findHolidays from '../utils/findHolidays.js';
import findMonthDays from '../utils/findMonthDays.js';

export default function workTableGenerate(monthAndDay, weekdayWorkers, holidayWorkers) {
  const workTable = [];
  const selectedMonthDays = findMonthDays(monthAndDay[0]);

  const daysArray = Object.values(DAYS);
  const weekdays = daysArray.slice(0, 5);
  const weekends = daysArray.slice(5, 7);
  const holidays = findHolidays(monthAndDay[0]);

  let dayIndex = daysArray.indexOf(monthAndDay[1]); // 요일 인덱스
  let monthIndex = 1; // 일자 인덱스
  let weekdayWorkersIndex = 0;
  let holidayWorkersIndex = 0;

  const redundantPerson = [];

  while (workTable.length < selectedMonthDays) {
    dayIndex %= 7;
    holidayWorkersIndex %= holidayWorkers.length;
    weekdayWorkersIndex %= weekdayWorkers.length;
    if (redundantPerson.length !== 0) {
      workTable.push(redundantPerson.shift());
      dayIndex += 1;
      monthIndex += 1;
      continue;
    }

    if (holidays.includes(monthIndex)) {
      const current = holidayWorkers[holidayWorkersIndex];
      if (workTable[workTable.length - 1] === current) {
        redundantPerson.push(current);
        workTable.push(holidayWorkers[holidayWorkersIndex + 1]);
        holidayWorkersIndex += 2;
        dayIndex += 1;
        monthIndex += 1;
        continue;
      }
      workTable.push(holidayWorkers[holidayWorkersIndex]);
      holidayWorkersIndex += 1;
      dayIndex += 1;
      monthIndex += 1;
      continue;
    }

    if (weekdays.includes(daysArray[dayIndex])) {
      const current = weekdayWorkers[weekdayWorkersIndex];
      if (workTable[workTable.length - 1] === current) {
        redundantPerson.push(current);
        workTable.push(weekdayWorkers[weekdayWorkersIndex + 1]);
        weekdayWorkersIndex += 2;
        dayIndex += 1;
        monthIndex += 1;
        continue;
      }
      workTable.push(weekdayWorkers[weekdayWorkersIndex]);
      weekdayWorkersIndex += 1;
      dayIndex += 1;
      monthIndex += 1;
      continue;
    }

    if (weekends.includes(daysArray[dayIndex])) {
      const current = holidayWorkers[holidayWorkersIndex];
      if (workTable[workTable.length - 1] === current) {
        redundantPerson.push(current);
        workTable.push(holidayWorkers[holidayWorkersIndex + 1]);
        holidayWorkersIndex += 2;
        dayIndex += 1;
        monthIndex += 1;
        continue;
      }
      workTable.push(holidayWorkers[holidayWorkersIndex]);
      holidayWorkersIndex += 1;
      dayIndex += 1;
      monthIndex += 1;
      continue;
    }
  }
  return workTable;
}
