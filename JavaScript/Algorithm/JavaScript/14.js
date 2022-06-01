/**
 * 가장 긴 문자열
 *
 * 입력 예제
 * ['teacher', 'time', 'student', 'beautiful', 'good']
 *
 * 출력 예제
 * beautiful
 *
 * * solutionJS14_4
 * array.sort((a, b) => b.length - a.length)[0]
 */

console.time("solutionJS14_0");
function solutionJS14_0(array) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let arr of array) {
    if (arr.length > max) {
      max = arr.length;
      answer = arr;
    }
  }
  return answer;
}
console.timeEnd("solutionJS14_0");

console.time("solutionJS14_1");
const solutionJS14_1 = (array) => {
  return array.reduce((acc, cur) => (acc.length > cur.length ? acc : cur));
};
console.timeEnd("solutionJS14_1"); //solutionJS14_1: 0.054ms

console.time("solutionJS14_2");
const solutionJS14_2 = (array) => {
  for (const arr of array) {
    arr.length > array[0].length ? (array[0] = arr) : null;
  }
  return array[0];
};
console.timeEnd("solutionJS14_2"); //solutionJS14_2: 0.003ms

console.time("solutionJS14_3");
const solutionJS14_3 = (array) => {
  let answer = "";
  for (let arr of array) {
    if (arr.length > answer.length) answer = arr;
  }
  return answer;
};
console.timeEnd("solutionJS14_3"); //solutionJS14_3: 0.006ms

console.time("solutionJS14_4");
const solutionJS14_4 = (array) => {
  return array.sort((a, b) => b.length - a.length)[0];
};
console.timeEnd("solutionJS14_4"); //solutionJS14_4: 0.002ms

console.log(solutionJS14_0(["teacher", "time", "student", "beautiful", "good"])); // OUTPUT: beautiful
console.log(solutionJS14_1(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionJS14_2(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionJS14_3(["teacher", "time", "student", "beautiful", "good"]));
console.log(solutionJS14_4(["teacher", "time", "student", "beautiful", "good"]));
