/**
 * 문자열의 문자의 개수
 *
 * 입력예제 1
 * "COMPUTERPROGRAMMING"
 */

console.time("solutionTS10_0");
function solutionTS10_0(string: string, target: string): number {
  let answer: number = 0;
  for (let str of string) {
    if (str === target) answer += 1;
  }
  return answer;
}
console.timeEnd("solutionTS10_0"); //solutionTS10_0: 0.064ms

console.time("solutionTS10_1");
const solutionTS10_1 = (string: string, target: string): number => {
  return string.split(target).length - 1;
};
console.timeEnd("solutionTS10_1"); //solutionTS10_1: 0.004ms

console.time("solutionTS10_2");
const solutionTS10_2 = (string: string, target: string): number => string.split(target).length - 1;
console.timeEnd("solutionTS10_2"); //solutionTS10_2: 0.003ms

console.log("solutionTS10_0: ", solutionTS10_0("COMPUTERPROGRAMMING", "R"));
console.log("solutionTS10_1: ", solutionTS10_1("COMPUTERPROGRAMMING", "R"));
console.log("solutionTS10_2: ", solutionTS10_2("COMPUTERPROGRAMMING", "M"));
