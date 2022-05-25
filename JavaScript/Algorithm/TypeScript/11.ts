/**
 * 대문자 찾기
 *
 * 입력예제
 * "KoreaTimeGood"
 *
 * 출력예제
 * 3
 */

console.time("solutionTS11_0");
function solutionTS11_0(string: string): number {
  let answer: number = 0;
  for (let str of string) {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) answer++; // charCodeAt(0) : 아스키코드 값 65~90 대문자
    // if (str === str.toUpperCase()) answer += 1;
  }
  return answer;
}
console.timeEnd("solutionTS11_0"); //solutionTS11_0: 0.064ms

console.time("solutionTS11_1");
const solutionTS11_1 = (string: string): number => {
  let answer: number = 0;
  for (let str of string) {
    if (str === str.toUpperCase()) answer += 1;
  }
  return answer;
};
console.timeEnd("solutionTS11_1"); //solutionTS11_1: 0.062ms

console.time("solutionTS11_2");
const solutionTS11_2 = (string: string): number => string.match(/[A-Z]/g).length;
console.timeEnd("solutionTS11_2"); //solutionTS11_2: 0.003ms

console.log(solutionTS11_0("KoreaTimeGood"));
console.log(solutionTS11_1("KoreaTimeGood")); // OUTPUT: 3
console.log(solutionTS11_2("KoreaTimeGood")); // OUTPUT: 3
