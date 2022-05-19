/**
 * * 홀수
 *
 * * 7개의 자연수가 주어질때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하시오.
 * * 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중
 * * 홀수는 77, 41, 53, 85이고, 그 합은 256이므로 256을 반환해야 합니다.
 *
 * * 71 + 41 + 53 + 85 = 256
 *
 * * 41 < 53 < 77 < 85 이므로 최소값은 41이 된다.
 */

console.time("solutionJS6_1");
function solutionTS6_1(number: number[]): string {
  const filterd = number.filter((num) => num % 2 !== 0);
  const filterMinNum = Math.min(...filterd);
  const filterdReduce = filterd.reduce((acc, cur) => acc + cur);
  return `min number :${filterMinNum}, reduce : ${filterdReduce}`;
}
console.timeEnd("solutionTS6_1"); //solutionTS6_1: 0.055ms

console.time("solutionTS6_2");
const solutionTS6_2 = (number: number[]): string => {
  const filterd = number.filter((num) => num % 2 !== 0);
  const filterMinNum = Math.min(...filterd);
  const filterdReduce = filterd.reduce((acc, cur) => acc + cur);
  return `min number :${filterMinNum}, reduce : ${filterdReduce}`;
};
console.timeEnd("solutionTS6_2"); //solutionTS6_2: 0.003ms

console.time("solutionTS6_3");
const solutionTS6_3 = (number: number[]): string => {
  const minNumber = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  return `min number :${minNumber}, reduce : ${reduce}`;
};
console.timeEnd("solutionTS6_3"); //solutionTS6_3: 0.002ms

console.time("solutionTS6_4");
function solutionTS6_4(number: number[]): string {
  const minNumber: number = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce: number = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  return `min number :${minNumber}, reduce : ${reduce}`;
}
console.timeEnd("solutionTS6_4"); //solutionTS6_4: 0.017ms

console.time("solutionTS6_5");
const solutionTS6_5 = (number: number[]): number[] => {
  const answer: number[] = [];
  const filterd: number[] = number.filter((num) => num % 2 !== 0);
  const filterMinNum: number = Math.min(...filterd);
  const filterdReduce: number = filterd.reduce((acc, cur) => acc + cur);
  answer.push(filterMinNum, filterdReduce);
  return answer;
};
console.timeEnd("solutionTS6_5");

console.time("solutionTS6_6");
const solutionTS6_6 = (number: number[]): number[] => {
  const answer: number[] = [];
  const minNumber: number = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce: number = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  answer.push(minNumber, reduce);
  return answer;
};
console.timeEnd("solutionTS6_6"); // solutionTS6_6: 0.001ms

console.time("solutionTS6_7");
function solutionTS6_7(number: number[]) {
  const answer: number[] = [];
  let sum: number = 0;
  let min: number = Number.MAX_SAFE_INTEGER;
  for (let n of number) {
    if (n % 2 !== 0) {
      sum += n;
      if (n < min) min = n;
    }
  }
  answer.push(min, sum);
  return answer;
}
console.timeEnd("solutionTS6_7");

console.log(solutionTS6_1([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_2([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_3([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_4([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_5([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_6([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionTS6_7([12, 77, 38, 41, 53, 92, 85]));
