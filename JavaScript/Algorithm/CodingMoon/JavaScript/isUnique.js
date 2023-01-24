/**
 * * Q. 문자열이 주어졌을 때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라.
 */

function isUniqueJS(string) {
	for (let i = 0; i < string.length; i++) {
		for (let j = i + 1; j < string.length; j++) {
			if (string[i] === string[j]) return false;
		}
	}
	return true;
}

function isUniqueJS2(string) {
	const map = new Map();
	for (char of string) {
		if (map.has(char)) return false;
		map.set(char, true);
	}
	return true;
}

console.log(isUniqueJS(""), "true", "isUniqueJS");
console.log(isUniqueJS("abcd"), "true", "isUniqueJS");
console.log(isUniqueJS("abccd"), "false", "isUniqueJS");
console.log(isUniqueJS("bhjjb"), "false", "isUniqueJS");
console.log(isUniqueJS("mdjq"), "true", "isUniqueJS");
console.log(isUniqueJS("geez"), "false", "isUniqueJS");

console.log(isUniqueJS2(""), "true", "isUniqueJS2");
console.log(isUniqueJS2("abcd"), "true", "isUniqueJS2");
console.log(isUniqueJS2("abccd"), "false", "isUniqueJS2");
console.log(isUniqueJS2("bhjjb"), "false", "isUniqueJS2");
console.log(isUniqueJS2("mdjq"), "true", "isUniqueJS2");
console.log(isUniqueJS2("geez"), "false", "isUniqueJS2");
