// * 등수 구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
// 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
// ▣ 출력설명
// 입력된 순서대로 등수를 출력한다.
// ▣ 입력예제 1
// 5
// 87 89 92 100 76
// ▣ 출력예제 1
// 4 3 2 1 5

const arr = [87, 89, 92, 100, 76];
const arr2 = [92, 92, 92, 100, 76];

console.time("solutionJS22_0");
function solutionJS22_0(array) {
	const n = array.length;
	const answer = Array.from({ length: n }, () => 1);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (array[j] > array[i]) answer[i]++;
		}
	}
	return answer;
}
console.log("solutionJS22_0", solutionJS22_0(arr));
console.log("solutionJS22_0", solutionJS22_0(arr2));
console.timeEnd("solutionJS22_0"); //6.041ms

console.time("solutionJS22_1");
function solutionJS22_1(array) {
	// ! create a copy of the scores array
	const sortedScores = [...array].sort((a, b) => b - a);
	const ranks = [];

	for (let i = 0; i < array.length; i++) {
		const rank = sortedScores.indexOf(array[i]) + 1;
		ranks.push(rank);
	}
	return ranks;
}
console.log("solutionJS22_1", solutionJS22_1(arr));
console.log("solutionJS22_1", solutionJS22_1(arr2));
console.timeEnd("solutionJS22_1"); //0.225ms

console.time("solutionJS22_2");
function solutionJS22_2(array) {
	return array.map((i) => array.filter((j) => i < j).length + 1);
}
console.log("solutionJS22_2", solutionJS22_2(arr));
console.log("solutionJS22_2", solutionJS22_2(arr2));
console.timeEnd("solutionJS22_2"); // 0.299ms

console.time("solutionJS22_3");
function solutionJS22_3(array) {
	const sortedRankings = [...array].sort((a, b) => b - a);
	const ranks = [];

	for (const [index, value] of array.entries()) {
		const rank = sortedRankings.indexOf(array[index]) + 1;
		ranks.push(rank);
	}
	return ranks;
}
console.log("solutionJS22_3", solutionJS22_3(arr));
console.log("solutionJS22_3", solutionJS22_3(arr2));
console.timeEnd("solutionJS22_3"); //0.381ms

console.time("solutionJS22_4");
function solutionJS22_4(array) {
	const sortedRankings = [...array].sort((a, b) => b - a);
	const ranks = [];

	array.forEach((value, index) => {
		const rank = sortedRankings.indexOf(array[index]) + 1;
		ranks.push(rank);
	});

	return ranks;
}
console.log("solutionJS22_4", solutionJS22_4(arr));
console.log("solutionJS22_4", solutionJS22_4(arr2));
console.timeEnd("solutionJS22_4"); // 0.337ms
