/**
 * 가장 긴 문자열
 *
 * 입력 예제
 * ['teacher', 'time', 'student', 'beautiful', 'good']
 *
 * 출력 예제
 * beautiful
 *
 * * solutionTS14_4
 * array.sort((a, b) => b.length - a.length)[0]
 */

console.time("solutionTS14_0");
function solutionTS14_0(array: string[]): string {
  let answer: string;
  let max = Number.MIN_SAFE_INTEGER;
  for (let arr of array) {
    if (arr.length > max) {
      max = arr.length;
      answer = arr;
    }
  }
  return answer;
}
console.timeEnd("solutionTS14_0");

console.time("solutionTS14_1");
const solutionTS14_1 = (array: string[]): string => {
  return array.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
};
console.timeEnd("solutionTS14_1"); //solutionTS14_1: 0.054ms

console.time("solutionTS14_2");
const solutionTS14_2 = (array: string[]): string => {
  for (const arr of array) {
    arr.length > array[0].length ? (array[0] = arr) : null;
  }
  return array[0];
};
console.timeEnd("solutionTS14_2"); //solutionTS14_2: 0.003ms

console.time("solutionTS14_3");
const solutionTS14_3 = (array: string[]): string => {
  let answer: string = "";
  for (let arr of array) {
    if (arr.length > answer.length) answer = arr;
  }
  return answer;
};
console.timeEnd("solutionTS14_3"); //solutionTS14_3: 0.006ms

console.time("solutionTS14_4");
const solutionTS14_4 = (array: string[]): string => {
  return array.sort((a, b) => b.length - a.length)[0];
};
console.timeEnd("solutionTS14_4"); //solutionTS14_4: 0.002ms

console.log(solutionTS14_0(["teacher", "time", "student", "beautiful", "good"])); // OUTPUT: beautiful
console.log(solutionTS14_1(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionTS14_2(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionTS14_3(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionTS14_4(["teacher", "time", "student", "beautiful", "good"]));
