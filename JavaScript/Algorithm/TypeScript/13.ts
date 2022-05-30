/**
 * 대소문자변환
 *
 *  * 입력예제
 * "StuDy"
 *
 *  * 출력예제
 * "STUDY" or sTUdY
 */

console.time("solutionTS13_0");
function solutionTS13_0(string: string): string {
  return string.toUpperCase();
}
console.timeEnd("solutionTS13_0"); //solutionTS13_0: 0.055ms

console.time("solutionTS13_1");
const solutionTS13_1 = (string: string): string => string.toUpperCase();
console.timeEnd("solutionTS13_1"); //solutionTS13_1: 0.003ms

console.time("solutionTS13_2");
const solutionTS13_2 = (string: string): string => {
  let answer: string = "";
  for (let str of string) {
    str === str.toLowerCase() ? (answer += str.toUpperCase()) : (answer += str.toLowerCase());
  }
  return answer;
};
console.timeEnd("solutionTS13_2"); //solutionTS13_2: 0.002ms

console.time("solutionTS13_3");
const solutionTS13_3 = (string: string): string => {
  let answer: string = "";
  for (let str of string) {
    if (str === str.toLowerCase()) answer += str.toUpperCase();
    else answer += str.toLowerCase();
  }
  return answer;
};
console.timeEnd("solutionTS13_3"); //solutionTS13_3: 0.002ms

console.log(solutionTS13_0("StuDy")); // OUTPUT: STUDY
console.log(solutionTS13_1("StuDy")); // OUTPUT: STUDY
console.log(solutionTS13_2("StuDy")); // OUTPUT: sTUdY
console.log(solutionTS13_3("StuDy")); // OUTPUT: sTUdY
