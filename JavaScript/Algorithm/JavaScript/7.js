/**
 * * 자동차 10부제 운행
 * [25, 23, 11, 47, 53, 17, 33]
 */

console.time("solutionJS7_1");
function solutionJS7_1(day, carArray) {
  let answer = 0;
  for (let car of carArray) {
    if (car % 10 === day) {
      answer += 1;
    }
  }
  return answer;
}
console.timeEnd("solutionJS7_1"); //solutionJS7_1: 0.061ms

console.log(solutionJS7_1(3, [25, 23, 11, 47, 53, 17, 33]));

console.time("solutionJS7_2");
const solutionJS7_2 = (day, carArray) => carArray.filter((car) => car % 10 === day).length;
console.timeEnd("solutionJS7_2"); // solutionJS7_2: 0.003ms

console.log(solutionJS7_2(3, [25, 23, 11, 47, 53, 17, 33]));
