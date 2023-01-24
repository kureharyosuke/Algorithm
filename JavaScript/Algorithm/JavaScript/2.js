function solution(a, b, c) {
	let answer = "Yes";

	if (a < b) answer = a;
	else answer = b;
	if (c < answer) answer = c;

	return answer;
}

console.log(solution(6, 7, 11)); // OUTPUT: YES
