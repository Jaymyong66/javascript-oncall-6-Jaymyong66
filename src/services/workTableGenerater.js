import MONTHS from '../constants/months.js';
import DAYS from '../constants/days.js';
import findHolidays from '../utils/findHolidays.js';

function findMonthDays(selectedMonth) {
  const selectedMonthToNumber = parseInt(selectedMonth, 10);
  const monthInfo = Object.values(MONTHS).find(month => month[0] === selectedMonthToNumber);

  if (monthInfo) {
    return monthInfo[1];
  }
  return -1;
}

export default function workTableGenerate(monthAndDay, weekdayWorkers, holidayWorkers) {
  const workTable = [];
  const selectedMonth = monthAndDay[0];
  const startDay = monthAndDay[1];

  const monthDays = findMonthDays(selectedMonth);

  const daysArray = Object.values(DAYS);
  const weekdays = daysArray.slice(0, 5);
  const weekends = daysArray.slice(5, 7);
  const holidays = findHolidays(selectedMonth);

  let dayIndex = 0; // 요일 인덱스
  let monthIndex = 1; // 일자 인덱스
  let weekdayWorkersIndex = 0;
  let holidayWorkersIndex = 0;

  dayIndex = daysArray.indexOf(startDay);

  const redundantPerson = [];

  while (workTable.length < monthDays) {
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
