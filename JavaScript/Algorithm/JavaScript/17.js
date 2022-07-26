/**
 *
 * #입력설명
 * 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
 * 두 번째 줄부터 개의 문자열이 주어진다.
 * 문자열의 길이는 100을 넘지않습니다.
 *
 * #출력설명
 * 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
 *
 * 입력예제
 * 5 // 5개의 문자열이 입력한다.
 * good
 * time
 * good
 * student
 *
 * 출력 예제
 * good
 * time
 * student
 *
 */

let stringArray = ["good", "time", "good", "time", "student"];

console.time("solutionJS17_0");
function solutionJS17_0(stringArray) {
  let answer;
  answer = stringArray.filter((value, index) => {
    if (stringArray.indexOf(value) === index) return true;
  });
  return answer;
}
console.log("solutionJS17_0", solutionJS17_0(stringArray));

console.timeEnd("solutionJS17_0");

console.time("solutionJS17_1");

const solutionJS17_1 = (stringArray) => {
  return stringArray.filter((val, idx) => stringArray.indexOf(val) === idx);
};
console.log("solutionJS17_1", solutionJS17_1(stringArray));
console.timeEnd("solutionJS17_1");

console.time("solutionJS17_2");
function solutionJS17_2(stringArray) {
  let answer = new Set([...stringArray]);
  return [...answer];
}

console.log("solutionJS17_2", solutionJS17_2(stringArray));

console.timeEnd("solutionJS17_2");

console.time("solutionJS17_3");

const solutionJS17_3 = (stringArray) => {
  const setArray = new Set([...stringArray]);
  return [...setArray];
};
console.log("solutionJS17_3", solutionJS17_3(stringArray));
console.timeEnd("solutionJS17_3");

// solutionJS17_0 [ 'good', 'time', 'student' ]
// solutionJS17_0: 5.239ms
// solutionJS17_1 [ 'good', 'time', 'student' ]
// solutionJS17_1: 0.197ms
// solutionJS17_2 [ 'good', 'time', 'student' ]
// solutionJS17_2: 0.183ms
// solutionJS17_3 [ 'good', 'time', 'student' ]
// solutionJS17_3: 0.163ms
