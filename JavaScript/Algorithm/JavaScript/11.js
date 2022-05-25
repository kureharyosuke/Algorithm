/**
 * 대문자 찾기
 *
 * 입력예제
 * "KoreaTimeGood"
 *
 * 출력예제
 * 3
 */

console.time("solutionJS11_0");
function solutionJS11_0(string) {
  let answer = 0;
  for (let str of string) {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) answer++; // charCodeAt(0) : 아스키코드 값 65~90 대문자
    // if (str === str.toUpperCase()) answer += 1;
  }
  return answer;
}
console.timeEnd("solutionJS11_0"); //solutionJS11_0: 0.064ms

console.time("solutionJS11_1");
const solutionJS11_1 = (string) => {
  let answer = 0;
  for (let str of string) {
    if (str === str.toUpperCase()) answer += 1;
  }
  return answer;
};
console.timeEnd("solutionJS11_1"); //solutionJS11_1: 0.062ms

console.time("solutionJS11_2");
const solutionJS11_2 = (string) => string.match(/[A-Z]/g).length;
console.timeEnd("solutionJS11_2"); //solutionJS11_2: 0.003ms

console.log(solutionJS11_0("KoreaTimeGood"));
console.log(solutionJS11_1("KoreaTimeGood")); // OUTPUT: 3
console.log(solutionJS11_2("KoreaTimeGood")); // OUTPUT: 3
