import { shouldMove, playRound, playAllRounds } from "../src/race.js";


const seqRng = (...nums) => {
  let i = 0;
  return () => nums[i++ % nums.length];
};

describe("shouldMove", () => {
  test("rng 결과가 4 이상이면 true", () => {
    expect(shouldMove(() => 4)).toBe(true);
    expect(shouldMove(() => 9)).toBe(true);
  });

  test("rng 결과가 3 이하면 false", () => {
    expect(shouldMove(() => 3)).toBe(false);
    expect(shouldMove(() => 0)).toBe(false);
  });
});

describe("playRound", () => {
  test("각 차의 이동 여부가 rng에 따라 결정", () => {
    const cars = [{ name: "a", distance: 0 }, { name: "b", distance: 2 }];
   
    const rng = seqRng(4, 3);
    const next = playRound(cars, rng);
    expect(next).toEqual([
      { name: "a", distance: 1 }, 
      { name: "b", distance: 2 }  
    ]);
  });
});

describe("playAllRounds", () => {
  test("tryCount 만큼 라운드 진행", () => {
    const cars = [{ name: "a", distance: 0 }, { name: "b", distance: 0 }];

    const rng = seqRng(4, 4, 3, 9, 4, 0);
    const result = playAllRounds(cars, 3, rng);
    expect(result).toEqual([
      { name: "a", distance: 2 },
      { name: "b", distance: 2 }
    ]);
  });
});
