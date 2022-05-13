/**
 * * 최소값 구하기
 */

console.time("timer");
function solutionJS5(...number) {
  return Math.min(...number);
}
console.timeEnd("timer"); //timer: 0.06ms

console.time("timer1");
function solutionJS5_1(numberArray) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }
  answer = min;
  return answer;
}
console.timeEnd("timer1"); //timer1: 0.003ms

console.time("timer2");
function solutionJS5_2(numberArray) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of numberArray) {
    if (num < min) {
      min = num;
    }
  }
  answer = min;
  return answer;
}
console.timeEnd("timer2"); // timer2: 0.002ms

console.time("timer3");
function solutionJS5_3(numberArray) {
  return Math.min(...numberArray);
}
console.timeEnd("timer3"); //timer3: 0.002ms

console.log(solutionJS5(5, 3, 7, 11, 2, 15, 17));
console.log(solutionJS5_1([5, 3, 7, 11, 2, 15, 17]));
console.log(solutionJS5_2([5, 3, 7, 11, 2, 15, 17]));
console.log(solutionJS5_3([5, 3, 7, 11, 2, 15, 17]));
