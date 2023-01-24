/**
 * * Q. 문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 */

function isUniqueTS(string: string): boolean {
	for (let i = 0; i < string.length; i++) {
		for (let j = i + 1; j < string.length; i++) {
			if (string[i] === string[j]) return false;
		}
	}
	return true;
}

function isUniqueTS2(string: string): boolean {
	const map: Map<string, boolean> = new Map();
	for (const char of string) {
		if (map.has(char)) return false;
		map.set(char, true);
	}
	return true;
}
