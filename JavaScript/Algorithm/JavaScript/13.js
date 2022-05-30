/**
 * 대소문자변환
 *
 *  * 입력예제
 * "StuDy"
 *
 *  * 출력예제
 * "STUDY" or sTUdY
 */

console.time("solutionJS13_0");
function solutionJS13_0(string) {
  return string.toUpperCase();
}
console.timeEnd("solutionJS13_0"); //solutionJS13_0: 0.055ms

console.time("solutionJS13_1");
const solutionJS13_1 = (string) => string.toUpperCase();
console.timeEnd("solutionJS13_1"); //solutionJS13_1: 0.003ms

console.time("solutionJS13_2");
const solutionJS13_2 = (string) => {
  let answer = "";
  for (let str of string) {
    str === str.toLowerCase() ? (answer += str.toUpperCase()) : (answer += str.toLowerCase());
  }
  return answer;
};
console.timeEnd("solutionJS13_2"); //solutionJS13_2: 0.002ms

console.time("solutionJS13_3");
const solutionJS13_3 = (string) => {
  let answer = "";
  for (let str of string) {
    if (str === str.toLowerCase()) answer += str.toUpperCase();
    else answer += str.toLowerCase();
  }
  return answer;
};
console.timeEnd("solutionJS13_3"); //solutionJS13_3: 0.002ms

console.log(solutionJS13_0("StuDy")); // OUTPUT: STUDY
console.log(solutionJS13_1("StuDy")); // OUTPUT: STUDY
console.log(solutionJS13_2("StuDy")); // OUTPUT: sTUdY
console.log(solutionJS13_3("StuDy")); // OUTPUT: sTUdY
