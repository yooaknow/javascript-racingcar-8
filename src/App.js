import { getCarNames, getTryCount } from "./input.js";
import { validateCarNames, validateTryCount } from "./validate.js";
import { playAllRounds } from "./race.js";
import { printExecutionHeader, printRoundResult, printWinners } from "./output.js";
import { Console } from "@woowacourse/mission-utils";

export class App {
  async run() {
    try {
      const carNames = await getCarNames();
      validateCarNames(carNames);

      const tryCount = await getTryCount();
      validateTryCount(tryCount);

      let cars = carNames.map((name) => ({ name, distance: 0 }));

      printExecutionHeader();

      for (let i = 0; i < tryCount; i++) {
        cars = playAllRounds(cars, 1);
        printRoundResult(cars);
      }

      printWinners(cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
