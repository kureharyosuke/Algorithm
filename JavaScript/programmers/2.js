/**
 * 가운데 글자 가져오기
 *
 * abcde에서는 c를 가져오고 qwer에서는 we 두 글자를 가져오는 문제입니다.
 * 보통 이런 문제는 글자를 자르면 됩니다. 인덱스를 구하면 되죠.
 *
 * TODO: substr로 문자열을 자를 수 있고, 시작 인덱스를 적절히 찾으면 됩니다. 중간점을 찾으려면 보통 s.length / 2를 내림하거나 올림하면 됩니다.
 */

function solutionJS(string) {
  return string.length % 2 === 0 ? string.substr(string.length / 2 - 1, 2) : string.substr(string.length / 2, 1);
}

console.log(solutionJS2("abcde")); // c

function solutionJS2(string) {
  return string.substr(Math.ceil(string.length / 2) - 1, string.length % 2 === 0 ? 2 : 1);
}
