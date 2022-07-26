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

let stringArray: string[] = ["good", "time", "good", "time", "student"];

console.time("solutionTS17_0");
function solutionTS17_0(stringArray: string[]): string[] {
  let answer: string[];
  answer = stringArray.filter((value, index) => {
    if (stringArray.indexOf(value) === index) return true;
  });
  return answer;
}
console.log("solutionTS17_0", solutionTS17_0(stringArray));

console.timeEnd("solutionTS17_0");

console.time("solutionTS17_1");

const solutionTS17_1 = (stringArray: string[]): string[] => {
  return stringArray.filter((val, idx) => stringArray.indexOf(val) === idx);
};
console.log("solutionTS17_1", solutionTS17_1(stringArray));
console.timeEnd("solutionTS17_1");

console.time("solutionTS17_2");
function solutionTS17_2(stringArray: string[]): string[] {
  let answer: Set<string> = new Set([...stringArray]);
  return [...answer];
}

console.log("solutionTS17_2", solutionTS17_2(stringArray));
console.timeEnd("solutionTS17_2");

console.time("solutionTS17_3");

const solutionTS17_3 = (stringArray: string[]): string[] => {
  const setArray: Set<string> = new Set([...stringArray]);
  return [...setArray];
};
console.log("solutionTS17_3", solutionTS17_3(stringArray));
console.timeEnd("solutionTS17_3");

// solutionTS17_0 [ 'good', 'time', 'student' ]
// solutionTS17_0: 5.239ms
// solutionTS17_1 [ 'good', 'time', 'student' ]
// solutionTS17_1: 0.197ms
// solutionTS17_2 [ 'good', 'time', 'student' ]
// solutionTS17_2: 0.183ms
// solutionTS17_3 [ 'good', 'time', 'student' ]
// solutionTS17_3: 0.163ms
