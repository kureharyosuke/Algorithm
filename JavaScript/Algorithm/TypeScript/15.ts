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
 * function solutionTS15_3(str) {
 *  const mid = Math.floor(str.length / 2);
 *  return str.length % 2 === 1 ? str.substr(mid, 1) : str.substr(mid - 1, 2);
 * }
 *
 */

console.time("solutionTS15_0");
// const start = performance.now();

function solutionTS15_0(str: string): string {
  let answer: string;
  let mid: number = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substring(mid, mid + 1); // index 번호
  else answer = answer = str.substring(mid - 1, mid + 1);
  return answer;
}

// const end = performance.now();
// console.log(`${end - start}ms`);
console.timeEnd("solutionTS15_0");

console.log(solutionTS15_0("study"), "solutionTS15_0");
console.log(solutionTS15_0("good"), "solutionTS15_0");

// const start1 = performance.now();
console.time("solutionTS15_1");

function solutionTS15_1(str: string): string {
  const mid: number = Math.floor(str.length / 2);
  return str.length % 2 === 1
    ? str.substring(mid, mid + 1)
    : str.substring(mid - 1, mid + 1);
}

console.timeEnd("solutionTS15_1");

console.log(solutionTS15_1("study"), "solutionTS15_1");
console.log(solutionTS15_1("good"), "solutionTS15_1");

console.time("solutionTS15_2");
// const start = performance.now();

function solutionTS15_2(str: string): string {
  let answer: string;
  let mid: number = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substr(mid, 1); // index 번호
  else answer = answer = str.substr(mid - 1, 2);
  return answer;
}

// const end = performance.now();
// console.log(`${end - start}ms`);
console.timeEnd("solutionTS15_2");

console.log(solutionTS15_2("study"), "solutionTS15_2");
console.log(solutionTS15_2("good"), "solutionTS15_2");

// const start1 = performance.now();
console.time("solutionTS15_3");

function solutionTS15_3(str: string): string {
  const mid: number = Math.floor(str.length / 2);
  return str.length % 2 === 1 ? str.substr(mid, 1) : str.substr(mid - 1, 2);
}

console.timeEnd("solutionTS15_3");

console.log(solutionTS15_3("study"), "solutionTS15_3");
console.log(solutionTS15_3("good"), "solutionTS15_3");
