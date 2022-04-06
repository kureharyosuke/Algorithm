/**
 *  세 수 중 최소 값
 *
 * 100이하의 자연수 A, B, C를 입력받아, 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (*정렬을 사용하면 안됩니다.) if문으로만,
 */

function solution(a: number, b: number, c: number): number {
  let answer: number;

  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solution(6, 4, 11));
