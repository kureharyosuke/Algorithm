// * 격자판 최대합
// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명 최대합을 출력합니다.
// ▣ 입력예제 1
// 5
// [
// 	[10, 13, 10, 12, 15],
// 	[12, 39, 30, 23, 11],
// 	[11, 25, 50, 53, 15],
// 	[19, 27, 29, 37, 27],
// 	[19, 13, 30, 13, 19],
// ];
// ▣ 출력예제 1 155

const arrayTS: number[][] = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];

console.time("solutionTS23_0");
function solutionTS23_0(array: number[][]): number {
	let answer = Number.MIN_SAFE_INTEGER;
	const n = array.length;
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < n; i++) {
		sum1 = 0;
		sum2 = 0;
		for (let j = 0; j < n; j++) {
			sum1 += array[i][j]; // 열누적 / 가로줄
			sum2 += array[j][i]; // 행누적 / 세로줄
		}
		answer = Math.max(answer, sum1, sum2);
	}
	sum1 = 0;
	sum2 = 0;
	for (let i = 0; i < n; i++) {
		sum1 += array[i][i];
		sum2 += array[i][n - i - 1];
	}
	answer = Math.max(answer, sum1, sum2);
	return answer;
}
console.timeEnd("solutionTS23_0"); //0.066ms

console.log(solutionTS23_0(arrayTS));

console.time("solutionTS23_1");
function solutionTS23_1(array: number[][]): number {
	const n = array.length;
	let rowSum = 0;
	let colSum = 0;
	let diagonal1 = 0;
	let diagonal2 = 0;
	let maxSum = 0;

	for (let i = 0; i < n; i++) {
		rowSum = 0;
		colSum = 0;
		for (let j = 0; j < n; j++) {
			rowSum += array[i][j];
			colSum += array[j][i];
			if (i === j) diagonal1 += array[i][j];
			if (i + j === n - 1) diagonal2 += array[i][j];
		}
		maxSum = Math.max(maxSum, rowSum, colSum);
	}
	maxSum = Math.max(maxSum, diagonal1, diagonal2);
	return maxSum;
}
console.timeEnd("solutionTS23_1"); //0.004ms

console.log(solutionTS23_1(arrayTS));

console.time("solutionTS23_2");
function solutionTS23_2(array: number[][]): number {
	let maxSum = 0;

	// row greater
	for (let i = 0; i < array.length; i++) {
		let rowSum = array[i].reduce((a, b) => a + b);
		maxSum = Math.max(maxSum, rowSum);
	}

	// column greater
	for (let i = 0; i < array.length; i++) {
		let colSum = 0;
		for (let j = 0; j < array.length; j++) {
			colSum += array[j][i];
		}
		maxSum = Math.max(maxSum, colSum);
	}

	let diagonal1Sum = 0;
	let diagonal2Sum = 0;
	for (let i = 0; i < array.length; i++) {
		diagonal1Sum += array[i][i];
		diagonal2Sum += array[i][array.length - 1 - i];
	}
	maxSum = Math.max(maxSum, diagonal1Sum, diagonal2Sum);

	return maxSum;
}
console.timeEnd("solutionTS23_2"); // 0.003ms

console.log(solutionTS23_2(arrayTS));

console.time("solutionTS23_3");
function solutionTS23_3(array: number[][]): number {
	const rowSums = array.map((row) => row.reduce((sum, num) => sum + num));

	const colSums = array[0].map((_, colIndex) =>
		array.reduce((sum, row) => sum + row[colIndex], 0),
	);

	const diag1Sum = array.reduce((sum, row, i) => sum + row[i], 0);
	const diag2Sum = array.reduce(
		(sum, row, i) => sum + row[array.length - 1 - i],
		0,
	);

	const maxSum = Math.max(...rowSums, ...colSums, diag1Sum, diag2Sum);

	return maxSum;
}
console.timeEnd("solutionTS23_3"); // 0.003ms

console.log(solutionTS23_3(arrayTS));
