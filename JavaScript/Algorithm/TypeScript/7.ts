/**
 * * 자동차 10부제 운행
 * [25, 23, 11, 47, 53, 17, 33]
 */

console.time("solutionTS7_1");
function solutionTS7_1(day: number, carArray: number[]): number {
  let answer = 0;
  for (let car of carArray) {
    if (car % 10 === day) {
      answer += 1;
    }
  }
  return answer;
}
console.timeEnd("solutionTS7_1"); //solutionTS7_1: 0.061ms

console.log(solutionTS7_1(3, [25, 23, 11, 47, 53, 17, 33]));

console.time("solutionTS7_2");
const solutionTS7_2 = (day: number, carArray: number[]): number => carArray.filter((car) => car % 10 === day).length;
console.timeEnd("solutionTS7_2"); // solutionTS7_2: 0.003ms

console.log(solutionTS7_2(3, [25, 23, 11, 47, 53, 17, 33]));
