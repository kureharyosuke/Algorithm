/**
 *
 * 보이는 학생 (키)
 *
 * #입력설명
 * 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
 *
 * #출력설명
 * 선생님이 볼 수 있는 최대학생수를 출력한다.
 *
 * 입력예제
 *
 * 8 / 사람수?
 * 130 135 148 140 145 150 150 153 / 키?
 *
 * 출력 예제
 *
 * 5
 *
 */

const array: number[] = [130, 135, 148, 140, 145, 150, 150, 153, 156, 167];

console.time("solutionTS19_0");
function solutionTS19_0(arr: number[]): number {
	let answer = 1;
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			answer++;
			max = arr[i];
		}
	}
	return answer;
}
console.timeEnd("solutionTS19_0");

console.log("solutionTS19_0", solutionTS19_0(array));

console.time("solutionTS19_1");
function solutionTS19_1(arr: number[]): number {
	let answer = 1;
	let max = arr[0];
	arr.filter((val, idx) => {
		if (arr[idx] > max) {
			answer++;
			max = val;
		}
	});
	return answer;
}
console.timeEnd("solutionTS19_1");

console.log("solutionTS19_1", solutionTS19_1(array));

// solutionTS19_0: 0.053ms
// solutionTS19_0 5
// solutionTS19_1: 0.003ms
// solutionTS19_1 5
