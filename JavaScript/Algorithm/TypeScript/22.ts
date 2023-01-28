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

const arrTS: number[] = [87, 89, 92, 100, 76];
const arrTS2: number[] = [92, 92, 92, 100, 76];

function solutionTS22_0(array: number[]): number[] {
	let n = array.length;
	let answer = Array.from({ length: n }, () => 1);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (array[j] > array[i]) answer[i]++;
		}
	}
	return answer;
}

function solutionTS22_1(array: number[]): number[] {
	// ! create a copy of the scores array
	const sortedScores = [...array].sort((a, b) => b - a);
	const ranks: number[] = [];

	for (let i = 0; i < array.length; i++) {
		const rank = sortedScores.indexOf(array[i]) + 1;
		ranks.push(rank);
	}
	return ranks;
}

function solutionTS22_2(array) {
	return array.map((i) => array.filter((j) => i < j).length + 1);
}
