/**
 * 대문자로 통일
 *
 * 입력예제
 * ItisTimeToStudy
 *
 * 출력예제
 * ITISTIMETOSTUDY
 */

console.time("solutionJS12_0");
function solutionJS12_0(string) {
  let answer = "";
  for (let str of string) {
    // if (str === str.toLowerCase()) answer += str.toUpperCase();
    // else answer += str;
    str === str.toLowerCase() ? (answer += str.toUpperCase()) : (answer += str);
  }
  return answer;
}
console.timeEnd("solutionJS12_0"); //solutionJS12_0: 0.064ms

console.time("solutionJS12_1");
const solutionJS12_1 = (string) => string.toUpperCase(); //toLowerCase() : 대문자를 소문자로 변환
console.timeEnd("solutionJS12_1"); //solutionJS12_1: 0.003ms

console.time("solutionJS12_2");
const solutionJS12_2 = (string) => {
  let answer = "";
  for (let str of string) {
    answer += str.toUpperCase();
  }
  return answer;
};
console.timeEnd("solutionJS12_2"); //solutionJS12_2: 0.006ms

console.log(solutionJS12_0("ItisTimeToStudy"));
console.log(solutionJS12_1("ItisTimeToStudy")); // OUTPUT: ITISTIMETOSTUDY
console.log(solutionJS12_2("ItisTimeToStudy")); // OUTPUT: ITISTIMETOSTUDY
