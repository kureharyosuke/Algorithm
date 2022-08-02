/**
 *
 * * 가위바위보
 *
 * 비겼을때 D
 *
 * * 입력예제
 * 5
 * 2 3 3 1 3
 * 1 1 2 2 3
 *
 * * 출력예제
 * A
 * B
 * A
 * B
 * D
 *
 * A  B
 * 1  3
 * 2  1
 * 3  2
 *
 * 1  가위
 * 2  바위
 * 3  보
 */

function solutionJS20(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }

  return answer;
}

// a로 기준을 잡고
//       A, B, A, B, D
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solutionJS20(a, b));
