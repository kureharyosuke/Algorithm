/**
 * * Q. 문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 */

function isUnique(string) {
	for (let i = 0; i < string.length; i++) {
		for (let j = i + 1; j < string.length; j++) {
			if (string[i] === string[j]) return false;
		}
	}
	return true;
}

function isUnique2(string) {
	const map = new Map();
	for (char of string) {
		if (map.has(char)) return false;
		map.set(char, true);
	}
	return true;
}

console.log(isUnique(""), "true", "isUnique");
console.log(isUnique("abcd"), "true", "isUnique");
console.log(isUnique("abccd"), "false", "isUnique");
console.log(isUnique("bhjjb"), "false", "isUnique");
console.log(isUnique("mdjq"), "true", "isUnique");
console.log(isUnique("geez"), "false", "isUnique");

console.log(isUnique2(""), "true", "isUnique2");
console.log(isUnique2("abcd"), "true", "isUnique2");
console.log(isUnique2("abccd"), "false", "isUnique2");
console.log(isUnique2("bhjjb"), "false", "isUnique2");
console.log(isUnique2("mdjq"), "true", "isUnique2");
console.log(isUnique2("geez"), "false", "isUnique2");
