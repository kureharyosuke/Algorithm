/**
 * * 아홉난쟁이 중 진짜 일곱쟁이를 찾아라.
 *
 * 모두의 키가 100을 넘지 않는 자연수이며, 이 수는 일곱쟁이의 수를 나타낸다.
 * [20, 7, 23, 19, 10, 15, 25, 8, 13]
 *
 * 답은 [20, 7, 23, 19, 10, 8, 13]
 */

console.time("solutionTS8_0");
function solutionTS8_0(array: number[]): number[] {
  let answer: number[] = array;
  let sum: number = array.reduce((a, b) => a + b, 0); // 140
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - array[i] - array[j] === 100) {
        array.splice(j, 1); // 뒤에꺼부터 삭제하면 당겨진거에 문제가 안생김.
        array.splice(i, 1);
        break;
      }
    }
  }
  return answer;
}
console.timeEnd("solutionTS8_0"); //solutionTS8_0: 0.064ms

console.log(solutionTS8_0([20, 7, 23, 19, 10, 15, 25, 8, 13]).reduce((a, b) => a + b)); // 100
