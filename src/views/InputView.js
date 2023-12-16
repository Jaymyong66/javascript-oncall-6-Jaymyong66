import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSEGE } from '../constants/messeges.js';

const InputView = {
  async readMonthAndDay() {
    const input = await Console.readLineAsync(INPUT_MESSEGE.INPUT_MONTH_AND_DAY);
    return input;
  },

  async readWeekdayWorkers() {
    const input = await Console.readLineAsync(INPUT_MESSEGE.INPUT_WEEKDAY_WORKERS);
    return input;
  },

  async readHolidayWorkers() {
    const input = await Console.readLineAsync(INPUT_MESSEGE.INPUT_HOLIDAY_WORKERS);
    return input;
  },
};

export default InputView;
