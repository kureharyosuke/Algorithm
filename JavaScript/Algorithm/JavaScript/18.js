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

let numberArray = [7, 3, 9, 5, 6, 12];

console.time("solutionJS18_0");
function solutionJS18_0(numberArray) {
  let answer = [];
  answer.push(numberArray[0]);
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > numberArray[i - 1]) answer.push(numberArray[i]);
  }
  return answer;
}
console.log("solutionJS18_0", solutionJS18_0(numberArray));
console.timeEnd("solutionJS18_0");

console.time("solutionJS18_1");
function solutionJS18_1(numberArray, setNumber) {
  const answer = [];
  for (const number of numberArray) {
    if (number >= setNumber) answer.push(number);
  }
  return answer;
}
console.log("solutionJS18_1", solutionJS18_1(numberArray, 6));
console.timeEnd("solutionJS18_1");

console.time("solutionJS18_2");
function solutionJS18_2(numberArray, setNumber) {
  return numberArray.filter((num, index) => num >= setNumber);
}
console.log("solutionJS18_2", solutionJS18_2(numberArray, 6));
console.timeEnd("solutionJS18_2");
