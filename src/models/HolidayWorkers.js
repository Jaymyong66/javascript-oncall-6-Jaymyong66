import { ERROR_MESSEGE } from '../constants/messeges.js';

class HolidayWorkers {
  #holidayWorkers;

  constructor(holidayWorkers) {
    this.#validateWorkers(holidayWorkers);
    this.#holidayWorkers = holidayWorkers.split(',').map(item => item.trim());
  }

  #validateWorkers(weekdayWorkers) {
    const splitedWeekdayWorkers = weekdayWorkers.split(',');
    if (splitedWeekdayWorkers.length < 5 || splitedWeekdayWorkers.length > 35) {
      throw new Error(ERROR_MESSEGE.INVALID_WORKERS_NUMBER);
    }
    splitedWeekdayWorkers.forEach(worker => {
      if (typeof worker === 'number' || worker.length > 5 || worker.length < 1) {
        throw new Error(ERROR_MESSEGE.INVALID_WORKERS_NAME);
      }
    });
    this.#validateNameRedundant(splitedWeekdayWorkers);
  }

  #validateNameRedundant(names) {
    const usedNames = [];
    names.forEach(name => {
      if (usedNames.includes(name)) {
        throw new Error(ERROR_MESSEGE.INVALID_WORKERS_NAME);
      }
      usedNames.push(name);
    });
  }

  getHolidayWorkers() {
    return this.#holidayWorkers;
  }
}

export default HolidayWorkers;
