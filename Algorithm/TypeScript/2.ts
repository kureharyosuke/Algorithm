/**
 *
 */

function solution2(a: number, b: number, c: number) {
  let answer: string = "YES";
  let max: number;
  let sum: number = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = "No";
  return answer;
}

console.log(solution2(13, 33, 17));
