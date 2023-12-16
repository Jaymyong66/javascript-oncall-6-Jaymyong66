import { ERROR_MESSEGE } from '../constants/messeges.js';

class WeekdayWorkers {
  #weekdayWorkers;

  constructor(weekdayWorkers) {
    this.#validateWeekdayWorkers(weekdayWorkers);
    this.#weekdayWorkers = weekdayWorkers.split(',').map(item => item.trim());
  }

  #validateWeekdayWorkers(weekdayWorkers) {
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

  getWeekdayWorkers() {
    return this.#weekdayWorkers;
  }
}

export default WeekdayWorkers;
