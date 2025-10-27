import { validateCarNames, validateTryCount } from "../src/validate.js";

describe("validateCarNames", () => {
  test("정상: 공백 트림 + 5자 이하", () => {
    expect(validateCarNames(["pobi", " woni ", "jun"])).toBe(true);
  });

  test("에러: 배열이 아님 또는 빈 배열", () => {
    expect(() => validateCarNames(null)).toThrow("[ERROR] 잘못된 이름 형식입니다.");
    expect(() => validateCarNames(undefined)).toThrow("[ERROR] 잘못된 이름 형식입니다.");
    expect(() => validateCarNames([])).toThrow("[ERROR] 잘못된 이름 형식입니다.");
  });

  test("에러: 빈 문자열/공백만", () => {
    expect(() => validateCarNames(["", "pobi"])).toThrow("[ERROR] 잘못된 이름 형식입니다.");
    expect(() => validateCarNames(["   "])).toThrow("[ERROR] 잘못된 이름 형식입니다.");
  });

  test("에러: 6자 이상", () => {
    expect(() => validateCarNames(["longggg"])).toThrow("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  });
});

describe("validateTryCount", () => {
  test("정상: 1 이상의 정수", () => {
    expect(() => validateTryCount(1)).not.toThrow();
    expect(() => validateTryCount(3)).not.toThrow();
  });

  test("에러: 1 미만/정수 아님/NaN", () => {
    const msg = "[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.";
    expect(() => validateTryCount(0)).toThrow(msg);
    expect(() => validateTryCount(-1)).toThrow(msg);
    expect(() => validateTryCount(1.5)).toThrow(msg);
    expect(() => validateTryCount(NaN)).toThrow(msg);
  });
});
