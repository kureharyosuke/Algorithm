/**
 *
 * 큰수 출력하기
 *
 * #입력설명
 * 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
 *
 * #출력설명
 * 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 *
 * 입력예제
 * 6
 * 7 3 9 5 6 12
 *
 * 출력 예제
 *
 * 7 9 6 12
 *
 */

const numberArray: number[] = [7, 3, 9, 5, 6, 12];

console.time("solutionJS18_0");
function solutionTS18_0(numberArray: number[]): number[] {
  let answer: number[] = [];
  answer.push(numberArray[0]);
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > numberArray[i - 1]) answer.push(numberArray[i]);
  }
  return answer;
}
console.log("solutionTS18_0", solutionTS18_0(numberArray));
console.timeEnd("solutionTS18_0");

console.time("solutionTS18_1");
function solutionTS18_1(numberArray: number[], setNumber: number): number[] {
  const answer: number[] = [];
  for (const number of numberArray) {
    if (number >= setNumber) answer.push(number);
  }
  return answer;
}
console.log("solutionTS18_1", solutionTS18_1(numberArray, 6));
console.timeEnd("solutionTS18_1");

console.time("solutionTS18_2");
function solutionTS18_2(numberArray: number[], setNumber: number): number[] {
  return numberArray.filter((num) => num >= setNumber);
}
console.log("solutionTS18_2", solutionTS18_2(numberArray, 6));
console.timeEnd("solutionTS18_2");
