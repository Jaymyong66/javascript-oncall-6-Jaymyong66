import { Console } from '@woowacourse/mission-utils';
import MONTHS from '../constants/months.js';
import DAYS from '../constants/days.js';
import HOLIDAYS from '../constants/holidays.js';

function findMonthDays(selectedMonth) {
  const selectedMonthToNumber = parseInt(selectedMonth, 10);
  const monthInfo = Object.values(MONTHS).find(month => month[0] === selectedMonthToNumber);

  if (monthInfo) {
    return monthInfo[1];
  }
  return -1;
}

function findHolidays(selectedMonth) {
  const selectedMonthToNumber = parseInt(selectedMonth, 10);
  const holidayInfo = Object.values(HOLIDAYS).find(month => month[0].month === selectedMonthToNumber);

  let holidays = [];

  if (holidayInfo[0] && holidayInfo[0].hasOwnProperty('day')) {
    const dayValues = holidayInfo.map(holiday => holiday.day);
    holidays = [...dayValues];
  }

  return holidays;
}

export default function workTableGenerate(monthAndDay, weekdayWorkers, holidayWorkers) {
  const workTable = [];
  const selectedMonth = monthAndDay[0];
  const startDay = monthAndDay[1];

  const monthDays = findMonthDays(selectedMonth);

  const daysArray = Object.values(DAYS);
  const weekdays = daysArray.slice(0, 5);
  const weekends = daysArray.slice(5, 7);
  const holidays = findHolidays(selectedMonth); // 공휴일 날짜들

  let dayIndex = 0; // 요일 인덱스
  let monthIndex = 1; // 일자 인덱스
  let weekdayWorkersIndex = 0;
  let holidayWorkersIndex = 0;

  dayIndex = daysArray.indexOf(startDay);

  const redundantPerson = [];

  while (workTable.length < monthDays) {
    dayIndex %= 7;
    // Console.print(`dayIndex :${dayIndex}`);

    holidayWorkersIndex %= holidayWorkers.length;
    weekdayWorkersIndex %= weekdayWorkers.length;

    // Console.print(`일자: ${monthIndex}일`);

    if (redundantPerson.length !== 0) {
      // Console.print(`전${redundantPerson}`);
      workTable.push(redundantPerson.shift());
      // Console.print(`후${redundantPerson}`);
      dayIndex += 1; // 요일 증가
      monthIndex += 1; // 일자 증가
      continue;
    }

    if (holidays.includes(monthIndex)) {
      workTable.push(holidayWorkers[holidayWorkersIndex]);
      holidayWorkersIndex += 1;
      dayIndex += 1; // 요일 증가
      monthIndex += 1; // 일자 증가
      continue;
    }

    if (weekdays.includes(daysArray[dayIndex])) {
      // Console.print('평일');
      // Console.print(dayIndex);
      const current = weekdayWorkers[weekdayWorkersIndex];
      if (workTable[workTable.length - 1] === current) {
        // 이전에 담은 사람과 같은 사람이면
        redundantPerson.push(current);
        workTable.push(weekdayWorkers[weekdayWorkersIndex + 1]);
        weekdayWorkersIndex += 2;
        dayIndex += 1; // 요일 증가
        monthIndex += 1; // 일자 증가
        continue;
      }
      workTable.push(weekdayWorkers[weekdayWorkersIndex]);
      // Console.print(weekdayWorkers[weekdayWorkersIndex]);
      weekdayWorkersIndex += 1;
      dayIndex += 1; // 요일 증가
      monthIndex += 1; // 일자 증가
      continue;
    }

    if (weekends.includes(daysArray[dayIndex])) {
      // Console.print('주말');
      // Console.print(dayIndex);
      const current = holidayWorkers[holidayWorkersIndex];
      if (workTable[workTable.length - 1] === current) {
        // 이전에 담은 사람과 같은 사람이면
        redundantPerson.push(current);
        // Console.print(`redundantPerson${current}`);
        workTable.push(holidayWorkers[holidayWorkersIndex + 1]);
        holidayWorkersIndex += 2;
        dayIndex += 1; // 요일 증가
        monthIndex += 1; // 일자 증가
        continue;
      }
      workTable.push(holidayWorkers[holidayWorkersIndex]);
      holidayWorkersIndex += 1;
      dayIndex += 1; // 요일 증가
      monthIndex += 1; // 일자 증가
      continue;
    }
  }
  // Console.print(workTable);
  return workTable;
}

// workTableGenerate(
//   ['10', '월'],
//   ['평일1', '평일2', '평일3', '평일4', '평일5'],
//   ['휴일1', '휴일2', '휴일3', '휴일4', '휴일5'],
// );

// workTableGenerate(['2', '월'], ['평일1', '평일2', '평일3', '평일4', '평일5'], ['평일5', '휴일2', '휴일3']);
