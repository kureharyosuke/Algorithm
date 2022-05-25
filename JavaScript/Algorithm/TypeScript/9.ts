/**
 * A를 #으로
 *
 * 입력 예제 1
 * BANANA
 *
 * 출력 예제 1
 * B#N#N#
 */

console.time("solutionJS9_0");
function solutionTS9_0(string: string): string {
  return string.replace(/A/g, "#");
}
console.timeEnd("solutionTS9_0"); //solutionTS9_0: 0.061ms

console.time("solutionTS9_1");
const solutionTS9_1 = (string: string): string => {
  let answer = "";
  for (let str of string) {
    if (str === "A") answer += "#";
    else answer += str;
  }
  return answer;
};
console.timeEnd("solutionTS9_1"); //solutionTS9_1: 0.003ms

console.time("solutionTS9_2");
const solutionTS9_2 = (string: string): string => {
  return string.replace(/A/g, "#");
};
console.timeEnd("solutionTS9_2"); //solutionTS9_2: 0.002ms

console.log(solutionTS9_0("BANANA"));
console.log(solutionTS9_1("BANANA")); // B#N#N#
console.log(solutionTS9_2("BANANA")); // B#N#N#
