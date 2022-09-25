// Q - 문자열 두개가 주어졌을때, 이 둘이 서로 순열관계에 있는지 확인하는 메서드를 작성하라.

// input -> fn(stringA, stringB) 빈문자열 X
// output -> 순열관계확인 true, 아닐 경우 false

/**
 * hooh -> hhoo
 * oohh => hhoo
 */

function checkPermutation(strA, strB) {
  if (!strA || !strB || strA.length !== strB.length) return false;
  const sortString = (string) => string.toLowerCase().split("").sort().join("");
  return sortString(strA) === sortString(strB);
}

// 테스트 케이스
console.log(checkPermutation("a", "aab"), "false");
console.log(checkPermutation("aba", "abb"), "false");
console.log(checkPermutation("hooh", "oohh"), "true");
console.log(checkPermutation("aaabbbccc", "abcabcabc"), "true");
console.log(checkPermutation("abaa", "abba"), "false");
