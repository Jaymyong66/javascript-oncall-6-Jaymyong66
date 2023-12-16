import HOLIDAYS from '../constants/holidays.js';

export default function findHolidays(selectedMonth) {
  const selectedMonthToNumber = parseInt(selectedMonth, 10);
  const holidayInfo = Object.values(HOLIDAYS).find(month => month[0].month === selectedMonthToNumber);

  let holidays = [];

  if (holidayInfo[0] && holidayInfo[0].hasOwnProperty('day')) {
    const dayValues = holidayInfo.map(holiday => holiday.day);
    holidays = [...dayValues];
  }

  return holidays;
}
