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
function solutionJS6_1(number) {
  const filterd = number.filter((num) => num % 2 !== 0);
  const filterMinNum = Math.min(...filterd);
  const filterdReduce = filterd.reduce((acc, cur) => acc + cur);
  return `min number :${filterMinNum}, reduce : ${filterdReduce}`;
}
console.timeEnd("solutionJS6_1"); //solutionJS6_1: 0.055ms

console.time("solutionJS6_2");
const solutionJS6_2 = (number) => {
  const filterd = number.filter((num) => num % 2 !== 0);
  const filterMinNum = Math.min(...filterd);
  const filterdReduce = filterd.reduce((acc, cur) => acc + cur);
  return `min number :${filterMinNum}, reduce : ${filterdReduce}`;
};
console.timeEnd("solutionJS6_2"); //solutionJS6_2: 0.003ms

console.time("solutionJS6_3");
const solutionJS6_3 = (number) => {
  const minNumber = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  return `min number :${minNumber}, reduce : ${reduce}`;
};
console.timeEnd("solutionJS6_3"); //solutionJS6_3: 0.002ms

console.time("solutionJS6_4");
function solutionJS6_4(number) {
  const minNumber = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  return `min number :${minNumber}, reduce : ${reduce}`;
}
console.timeEnd("solutionJS6_4"); //solutionJS6_4: 0.017ms

console.time("solutionJS6_5");
const solutionJS6_5 = (number) => {
  const answer = [];
  const filterd = number.filter((num) => num % 2 !== 0);
  const filterMinNum = Math.min(...filterd);
  const filterdReduce = filterd.reduce((acc, cur) => acc + cur);
  answer.push(filterMinNum, filterdReduce);
  return answer;
};
console.timeEnd("solutionJS6_5");

console.time("solutionJS6_6");
const solutionJS6_6 = (number) => {
  const answer = [];
  const minNumber = Math.min(...number.filter((num) => num % 2 !== 0));
  const reduce = number.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  answer.push(minNumber, reduce);
  return answer;
};
console.timeEnd("solutionJS6_6"); // solutionJS6_6: 0.001ms

console.time("solutionJS6_7");
function solutionJS6_7(number) {
  const answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let n of number) {
    if (n % 2 !== 0) {
      sum += n;
      if (n < min) min = n;
    }
  }
  answer.push(min, sum);
  return answer;
}
console.timeEnd("solutionJS6_7");

console.log(solutionJS6_1([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_2([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_3([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_4([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_5([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_6([12, 77, 38, 41, 53, 92, 85]));
console.log(solutionJS6_7([12, 77, 38, 41, 53, 92, 85]));
