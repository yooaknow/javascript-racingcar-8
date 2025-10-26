import { Console } from "@woowacourse/mission-utils";

export const printExecutionHeader = () => {
    Console.print("실행 결과");
}

export const formatCarLine = (car) => {
    return `${car.name} : ${"-".repeat(car.distance)}`
};

export const printRoundResult = (cars) => {
    cars.forEach((car)=> Console.print(formatCarLine(car)));
    Console.print("");
};

export const printWinners = (cars) => {
    const max = Math.max(...cars.map((c)=> c.distance));
    const winners = car.filter((c)=> distance === max).map((c)=>c.name);
    Console.print(`최종 우승자: ${Winners.join(", ")}`);
};