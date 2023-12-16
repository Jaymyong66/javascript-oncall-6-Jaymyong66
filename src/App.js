import OncallController from './controller/OncallController.js';

class App {
  #oncollController;

  constructor() {
    this.#oncollController = new OncallController();
  }

  async run() {
    await this.#oncollController.init();
  }
}

export default App;
