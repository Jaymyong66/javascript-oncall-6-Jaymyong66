const INPUT_MESSEGE = Object.freeze({
  INPUT_MONTH_AND_DAY: `비상 근무를 배정할 월과 시작 요일을 입력하세요>`,
  INPUT_WEEKDAY_WORKERS: `평일 비상 근무 순번대로 사원 닉네임을 입력하세요>`,
  INPUT_HOLIDAY_WORKERS: `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>`,
});

const ERROR_MESSEGE = Object.freeze({
  INVALID_INPUT: `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`,
  INVALID_MONTH: `[ERROR] 유효하지 않은 월입니다. 다시 입력해 주세요.`,
  INVALID_DAY: `[ERROR] 유효하지 않은 요일입니다. 다시 입력해 주세요.`,
  INVALID_WORKERS_NUMBER: `[ERROR] 비상근무자의 수는 최소 5명, 최대 35명이어야합니다. 다시 입력해 주세요.`,
  INVALID_WORKERS_NAME: `[ERROR] 유효하지 않은 닉네임입니다. 다시 입력해 주세요.`,
});

const OUTPUT_MESSEGE = Object.freeze({
  INVALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  INVALID_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
});

export { INPUT_MESSEGE, ERROR_MESSEGE, OUTPUT_MESSEGE };
