import { ERROR_MESSEGE } from '../constants/messeges.js';
import DAYS from '../constants/days.js';
import MONTHS from '../constants/months.js';

class Calender {
  #month;

  #day;

  constructor(monthAndDay) {
    this.#validateMonthAndDay(monthAndDay);
    const [month, day] = monthAndDay.split(',');
    this.#month = month;
    this.#day = day;
  }

  #validateMonthAndDay(monthAndDay) {
    const splitedMonthAndDay = monthAndDay.split(',');
    if (splitedMonthAndDay.length !== 2) {
      throw new Error(ERROR_MESSEGE.INVALID_INPUT);
    }
    const months = Object.values(MONTHS).map(month => month[0]);
    if (!months.includes(Number(splitedMonthAndDay[0]))) {
      throw new Error(ERROR_MESSEGE.INVALID_MONTH);
    }
    const days = Object.values(DAYS);
    if (!days.includes(splitedMonthAndDay[1])) {
      throw new Error(ERROR_MESSEGE.INVALID_DAY);
    }
  }

  getMonthAndDay() {
    return [this.#month, this.#day];
  }
}

export default Calender;
