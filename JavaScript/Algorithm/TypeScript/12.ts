/**
 * 대문자로 통일
 *
 * 입력예제
 * ItisTimeToStudy
 *
 * 출력예제
 * ITISTIMETOSTUDY
 */

console.time("solutionTS12_0");
function solutionTS12_0(string: string): string {
  let answer: string = "";
  for (let str of string) {
    // if (str === str.toLowerCase()) answer += str.toUpperCase();
    // else answer += str;
    str === str.toLowerCase() ? (answer += str.toUpperCase()) : (answer += str);
  }
  return answer;
}
console.timeEnd("solutionTS12_0"); //solutionTS12_0: 0.064ms

console.time("solutionTS12_1");
const solutionTS12_1 = (string: string): string => string.toUpperCase(); //toLowerCase() : 대문자를 소문자로 변환
console.timeEnd("solutionTS12_1"); //solutionTS12_1: 0.003ms

console.time("solutionTS12_2");
const solutionTS12_2 = (string: string): string => {
  let answer: string = "";
  for (let str of string) {
    answer += str.toUpperCase();
  }
  return answer;
};
console.timeEnd("solutionTS12_2"); //solutionTS12_2: 0.006ms

console.log(solutionTS12_0("ItisTimeToStudy"));
console.log(solutionTS12_1("ItisTimeToStudy")); // OUTPUT: ITISTIMETOSTUDY
console.log(solutionTS12_2("ItisTimeToStudy")); // OUTPUT: ITISTIMETOSTUDY
