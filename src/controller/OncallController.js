import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Calendar from '../models/Calendar.js';
import WeekdayWorkers from '../models/WeekdayWorkers.js';
import HolidayWorkers from '../models/HolidayWorkers.js';

class OncallController {
  #Calendar;

  #weekdayWorkers;

  #holidayWorkers;

  async reInput(func) {
    try {
      return await func();
    } catch (err) {
      Console.print(err.message);
      return this.reInput(func);
    }
  }

  async init() {
    await this.reInput(() => this.#inputMonthAndDay());
  }

  async #inputMonthAndDay() {
    const monthAndDay = await InputView.readMonthAndDay();
    this.#Calendar = new Calendar(monthAndDay);
  }
}

export default OncallController;
