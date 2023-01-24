// Q - 문자열 두개가 주어졌을때, 이 둘이 서로 순열관계에 있는지 확인하는 메서드를 작성하라.

// input -> fn(stringA, stringB) 빈문자열 X
// output -> 순열관계확인 true, 아닐 경우 false

/**
 * hooh -> hhoo
 * oohh => hhoo
 */

function checkPermutationTS(strA: string, strB: string): boolean {
	if (strA?.length !== strB?.length) return false;
	const sortString = (string) => string.toLowerCase().split("").sort().join("");
	return sortString(strA) === sortString(strB);
}

// 테스트 케이스
console.log(checkPermutationTS("a", "aab"), "false");
console.log(checkPermutationTS("aba", "abb"), "false");
console.log(checkPermutationTS("hooh", "oohh"), "true");
console.log(checkPermutationTS("aaabbbccc", "abcabcabc"), "true");
console.log(checkPermutationTS("abaa", "abba"), "false");

function checkPermutationHashTS(strA: string, strB: string): boolean {
	if (strA.length !== strB.length) return false;
	const counts: Map<string, number> = new Map();
	for (const char of strA) {
		counts.set(char, counts.has(char) ? (counts.get(char) as number) + 1 : 1);
	}
	for (const char of strB) {
		if (counts.get(char) && (counts.get(char) as number) !== 0) {
			counts.set(char, (counts.get(char) as number) - 1);
		} else {
			return false;
		}
	}
	return true;
}

// 테스트 케이스2
console.log(checkPermutationHashTS("a", "aab"), "false");
console.log(checkPermutationHashTS("aba", "abb"), "false");
console.log(checkPermutationHashTS("hooh", "oohh"), "true");
console.log(checkPermutationHashTS("aaabbbccc", "abcabcabc"), "true");
console.log(checkPermutationHashTS("abaa", "abba"), "false");
