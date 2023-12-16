import DAYS from '../constants/days.js';

export default function startDayToAllDays(startDay, daysOfMonth) {
  const daysArray = Object.values(DAYS);
  let dayIndex = daysArray.indexOf(startDay);

  const resultDays = [];

  for (let i = 0; i < daysOfMonth; i++) {
    // dayIndex를 이용하여 요일을 계산하고 결과 배열에 추가
    resultDays.push(daysArray[dayIndex]);

    // 다음 요일로 이동 (일주일은 7일이므로 나머지 연산 사용)
    dayIndex = (dayIndex + 1) % 7;
  }
  return resultDays;
}
