// * 봉우리
// 지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다.
// 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
// 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명
// 봉우리의 개수를 출력하세요.
// ▣ 입력예제
// 5
// [
// 	[5, 3, 7, 2, 3],
// 	[3, 7, 1, 6, 1],
// 	[7, 2, 5, 3, 4],
// 	[4, 3, 6, 4, 1],
// 	[8, 7, 3, 5, 2],
// ];
// ▣ 출력예제
// 10

const arrayTS: Array<number[]> = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];

console.time("solutionTS24_0");
function solutionTS24_0(array: Array<number[]>):number {
	let answer = 0;
	let n = array.length;
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let flag = 1;
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if (
					nx > 0 &&
					nx < n &&
					ny >= 0 &&
					ny < n &&
					array[nx][ny] > array[i][j]
				) {
					flag = 0;
					break;
				}
			}
			if (flag) answer++;
		}
	}
	return answer;
}
console.timeEnd("solutionTS24_0");
console.log(solutionTS24_0(arrayTS));

console.time("solutionTS24_1");
function solutionTS24_1(array:number[][]):number {
	let count = 0;
	for (let i = 1; i < array.length - 1; i++) {
		for (let j = 1; j < array[i].length - 1; j++) {
			if (
				array[i][j] > array[i - 1][j] &&
				array[i][j] > array[i + 1][j] &&
				array[i][j] > array[i][j - 1] &&
				array[i][j] > array[i][j + 1]
			) {
				count++;
			}
		}
	}
	console.log(`🚀 ~ file: 24.js:80 ~ solutionTS24_1 ~ count`, count);

	return count;
}
console.timeEnd("solutionTS24_1");
console.log(solutionTS24_1(arrayTS));
function countPeaks(grid:number[][]):number {
	let peaks = 0;
	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[i].length - 1; j++) {
			if (
				grid[i][j] > grid[i - 1][j] &&
				grid[i][j] > grid[i + 1][j] &&
				grid[i][j] > grid[i][j - 1] &&
				grid[i][j] > grid[i][j + 1]
			) {
				peaks++;
			}
		}
	}
	return peaks;
}

const grid = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];
console.log(countPeaks(grid)); // should output 10
