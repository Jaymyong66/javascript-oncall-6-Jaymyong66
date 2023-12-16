import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(month, days, holidays, workTable) {
    workTable.forEach((worker, index) => {
      if (holidays.includes(index + 1)) {
        Console.print(`${month}월 ${index + 1}일 ${days[index]}(휴일) ${worker}`);
        return;
      }
      Console.print(`${month}월 ${index + 1}일 ${days[index]} ${worker}`);
    });
  },
};

export default OutputView;
