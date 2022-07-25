/**
 * 중간 문자 반환
 *
 * 입력 예제
 * study
 *
 * 출력 예제
 * u
 *
 * 입력 예제
 * good
 *
 * 출력 예제
 * oo
 *
 * function solutionJS15_3(str) {
 *  const mid = Math.floor(str.length / 2);
 *  return str.length % 2 === 1 ? str.substr(mid, 1) : str.substr(mid - 1, 2);
 * }
 *
 */

console.time("solutionJS15_0");
// const start = performance.now();

function solutionJS15_0(str) {
  let answer;
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substring(mid, mid + 1); // index 번호
  else answer = answer = str.substring(mid - 1, mid + 1);
  return answer;
}

// const end = performance.now();
// console.log(`${end - start}ms`);
console.timeEnd("solutionJS15_0");

console.log(solutionJS15_0("study"), "solutionJS15_0");
console.log(solutionJS15_0("good"), "solutionJS15_0");

// const start1 = performance.now();
console.time("solutionJS15_1");

function solutionJS15_1(str) {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 1
    ? str.substring(mid, mid + 1)
    : str.substring(mid - 1, mid + 1);
}

console.timeEnd("solutionJS15_1");

console.log(solutionJS15_1("study"), "solutionJS15_1");
console.log(solutionJS15_1("good"), "solutionJS15_1");

console.time("solutionJS15_2");
// const start = performance.now();

function solutionJS15_2(str) {
  let answer;
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substr(mid, 1); // index 번호
  else answer = answer = str.substr(mid - 1, 2);
  return answer;
}

// const end = performance.now();
// console.log(`${end - start}ms`);
console.timeEnd("solutionJS15_2");

console.log(solutionJS15_2("study"), "solutionJS15_2");
console.log(solutionJS15_2("good"), "solutionJS15_2");

// const start1 = performance.now();
console.time("solutionJS15_3");

function solutionJS15_3(str) {
  const mid = Math.floor(str.length / 2);
  return str.length % 2 === 1 ? str.substr(mid, 1) : str.substr(mid - 1, 2);
}

console.timeEnd("solutionJS15_3");

console.log(solutionJS15_3("study"), "solutionJS15_3");
console.log(solutionJS15_3("good"), "solutionJS15_3");
