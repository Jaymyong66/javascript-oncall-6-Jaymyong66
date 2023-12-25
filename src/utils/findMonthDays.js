import MONTHS from '../constants/months';

export default function findMonthDays(selectedMonth) {
  const selectedMonthToNumber = parseInt(selectedMonth, 10);
  const monthInfo = Object.values(MONTHS).find(month => month[0] === selectedMonthToNumber);

  if (monthInfo) {
    return monthInfo[1];
  }
  return -1;
}
