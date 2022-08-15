/**
 *
 * 점수계산
 *
 * 시험문제의 채점 결과 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
 *
 *
 * * 입력예제
 * 10
 * 1 0 1 1 1 0 0 1 1 0
 *
 * * 출력예제
 * 10
 */

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.time("solutionJS21_0");
function solutionJS21_0(arr) {
  let answer = 0;
  let cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }

  return answer;
}
console.timeEnd("solutionJS21_0");

console.log("solutionJS21_0", solutionJS21_0(arr));

console.time("solutionJS21_1");
function solutionJS21_1(arr) {
  let answer = 0;
  let cnt = 0;
  arr.forEach((val) => {
    if (val === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  });
  return answer;
}
console.timeEnd("solutionJS21_1");

console.log("solutionJS21_1", solutionJS21_1(arr));

// solutionJS21_0: 0.054ms
// solutionJS21_0 10
// solutionJS21_1: 0.003ms
// solutionJS21_1 10
