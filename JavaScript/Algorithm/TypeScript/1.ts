/**
 *  세 수 중 최소 값
 *
 * 100이하의 자연수 A, B, C를 입력받아, 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (*정렬을 사용하면 안됩니다.) if문으로만,
 */

function solutionTS(a: number, b: number, c: number): number {
  let answer: number;

  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solutionTS(6, 4, 11));

function solutionTS2(a: number, b: number, c: number): number {
  let answer: number;
  answer = a < b ? a : b;
  answer = c < answer ? c : answer;
  return answer;
}

console.log(solutionTS2(6, 4, 11));

function solutionTS3(...rest: number[]): number {
  return Math.min(...rest);
}

console.log(solutionTS3(6, 4, 11));

function solutionTS4(...rest: number[]): number {
  return rest.sort((a, b) => a - b)[0];
}

console.log(solutionTS4(6, 4, 11));
