import { Random } from "@woowacourse/mission-utils";

export const shouldMove = (rng = () => Random.pickNumberInRange(0, 9)) => {
  return rng() >= 4;
};

export const playRound = (cars, rng = () => Random.pickNumberInRange(0, 9)) => {
  return cars.map((car) => {
    if (shouldMove(rng)) {
      return { ...car, distance: car.distance + 1 };
    }
    return { ...car };
  });
};



export const playAllRounds = (cars, tryCount, rng = () => Random.pickNumberInRange(0, 9)) => {
  let state = cars;
  for (let i = 0; i < tryCount; i += 1) {
    state = playRound(state, rng);
  }
  return state;
};