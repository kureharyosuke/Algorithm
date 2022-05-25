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
function solutionJS9_0(string) {
  return string.replace(/A/g, "#"); // g: global, i: ignore case 글로벌로 전체를 찾아라
}
console.timeEnd("solutionJS9_0"); //solutionJS9_0: 0.061ms

console.time("solutionJS9_1");
const solutionJS9_1 = (string) => {
  let answer = "";
  for (let str of string) {
    if (str === "A") answer += "#";
    else answer += str;
  }
  return answer;
};
console.timeEnd("solutionJS9_1"); //solutionJS9_1: 0.003ms

console.time("solutionJS9_2");
const solutionJS9_2 = (string) => {
  return string.replace(/A/g, "#");
};
console.timeEnd("solutionJS9_2"); //solutionJS9_2: 0.002ms

console.log(solutionJS9_0("BANANA"));
console.log(solutionJS9_1("BANANA")); // B#N#N#
console.log(solutionJS9_2("BANANA")); // B#N#N#
