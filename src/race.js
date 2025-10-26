import { Random } from "@woowacourse/mission-utils";

export const shouldMove = () => {
    const randomNumber = Random.pickNumberInRange(0,9);
    return randomNumber >= 4;
}

export const playRound = (cars) => {
  return cars.map((car) => {
    const moved = shouldMove();
    const newCar = { ...car, distance: car.distance + (moved ? 1 : 0) };
    return newCar;
  });
};


export const playAllRounds = (cars, tryCount) => {
    let state = cars;
    for (let i = 0; i< tryCount; i++) {
        state = playRound(state);
    }
    return state
}
