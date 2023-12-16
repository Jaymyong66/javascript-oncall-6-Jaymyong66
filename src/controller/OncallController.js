import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Calendar from '../models/Calendar.js';
import WeekdayWorkers from '../models/WeekdayWorkers.js';
import HolidayWorkers from '../models/HolidayWorkers.js';
import workTableGenerate from '../services/workTableGenerater.js';

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
    await this.reInput(() => this.#inputWorkers());
    await this.#makeWorkTable();
  }

  async #inputMonthAndDay() {
    const monthAndDay = await InputView.readMonthAndDay();
    this.#Calendar = new Calendar(monthAndDay);
  }

  async #inputWorkers() {
    const weekdayWorkers = await InputView.readWeekdayWorkers();
    this.#weekdayWorkers = new WeekdayWorkers(weekdayWorkers);

    const holidayWorkers = await InputView.readHolidayWorkers();
    this.#holidayWorkers = new HolidayWorkers(holidayWorkers);
  }

  async #makeWorkTable() {
    const monthAndDay = this.#Calendar.getMonthAndDay();
    const weekdayWorkers = this.#weekdayWorkers.getWeekdayWorkers();
    const holidayWorkers = this.#holidayWorkers.getHolidayWorkers();
    const workTable = workTableGenerate(monthAndDay, weekdayWorkers, holidayWorkers);
    Console.print(workTable);
  }
}

export default OncallController;
