/**
 *
 */

function solutionTS2(a: number, b: number, c: number): string {
	let answer: string = "YES";
	let max: number;
	let total: number = a + b + c;

	if (a > b) max = a;
	// 1. 13 > 33 false
	else max = b;
	// 2. max = 33
	if (c > max) max = c;
	// 3. 17 > 33 = false
	if (total - max <= max) answer = "No";

	return answer;
}

console.log(solutionTS2(13, 33, 17)); // OUTPUT: NO

function solutionTS2_1(...numbers: number[]): number {
	return Math.min(...numbers);
}
