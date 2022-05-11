/**
 * 나누어 떨어지는 숫자 배열
 * [5,9,7,10]과 5가 주어지면 [5, 10]을 리턴해야 합니다. 아무것도 없으면 [-1]을 리턴합니다.
 * 역시나 filter로 쉽게 필터링할 수 있습니다. 근데 [-1]을 리턴해야하는 조항 때문에 한 줄로 못 끝내서 짜증이 나네요(한 줄로 하면 코드가 너무 지저분해집니다)
 */

function solutionJS(arr, divisor) {
  return arr.filter(function (num) {
    return num % divisor === 0;
  });
}

console.log(solutionJS([5, 9, 7, 10], 5)); //[ 5, 10 ]

function solutionJS1(arr, divisor) {
  return arr.filter((num) => num % divisor === 0);
}

console.log(solutionJS1([5, 9, 7, 10], 5)); //[ 5, 10 ]
