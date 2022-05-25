/**
 * 문자열의 문자의 개수
 *
 * 입력예제 1
 * "COMPUTERPROGRAMMING"
 */

console.time("solutionJS10_0");
function solutionJS10_0(string, target) {
  let answer = 0;
  for (let str of string) {
    if (str === target) answer += 1;
  }
  return answer;
}
console.timeEnd("solutionJS10_0"); //solutionJS10_0: 0.064ms

console.time("solutionJS10_1");
const solutionJS10_1 = (string, target) => {
  return string.split(target).length - 1;
};
console.timeEnd("solutionJS10_1"); //solutionJS10_1: 0.004ms

console.time("solutionJS10_2");
const solutionJS10_2 = (string, target) => string.split(target).length - 1;
console.timeEnd("solutionJS10_2"); //solutionJS10_2: 0.003ms

console.time("solutionJS10_3");
const solutionJS10_3 = (string, target) => {
  let answer = 0;
  for (let str of string) {
    if (str === target) answer += 1;
  }
  return answer;
};
console.timeEnd("solutionJS10_3"); //solutionJS10_3: 0.003ms

console.log("solutionJS10_0: ", solutionJS10_0("COMPUTERPROGRAMMING", "R"));
console.log("solutionJS10_1: ", solutionJS10_1("COMPUTERPROGRAMMING", "R"));
console.log("solutionJS10_2: ", solutionJS10_2("COMPUTERPROGRAMMING", "M"));
console.log("solutionJS10_3: ", solutionJS10_3("COMPUTERPROGRAMMING", "M"));
