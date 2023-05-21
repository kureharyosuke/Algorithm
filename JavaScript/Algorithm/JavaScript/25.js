// * 회문 문자열

// * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
// * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

// * ▣ 입력설명
// * 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// * ▣ 출력설명
// * 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

// * ▣ 입력예제 1 gooG
// * ▣ 출력예제 1 YES

const str = "gooG";

console.time("solutionJS25_0");
function solutionJS25_0() {}
console.timeEnd("solutionJS25_0");

console.time("solutionJS25_1");
function solutionJS25_1(string) {
  const str = string.toLowerCase();
  return str.split("").reverse().join() === str ? "YES" : "NO";
}
console.log(solutionJS25_1(str));
console.timeEnd("solutionJS25_1");

console.time("solutionJS25_2");
const solutionJS25_2 = (string) =>
  string.toLowerCase().split().reverse().join() === string.toLowerCase()
    ? "YES"
    : "NO";
console.log(solutionJS25_2(str));
console.timeEnd("solutionJS25_2");

console.time("solutionJS25_3");
function solutionJS25_3(string) {
  // 문자열을 모두 소문자로 바꿉니다.
  const str = string.toLowerCase();

  // 문자열의 양 끝에서부터 한 글자씩 비교합니다.
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    // 문자가 다르다면 회문 문자열이 아닙니다.
    if (str[i] !== str[j]) {
      return "NO";
    }
  }

  // 모든 문자가 같다면 회문 문자열입니다.
  return "YES";
}
console.log(solutionJS25_3(str));
console.timeEnd("solutionJS25_3");

console.time("solutionJS25_4");
function solutionJS25_4(string) {
  // 문자열을 모두 소문자로 바꿉니다.
  const str = string.toLowerCase();

  // 문자열의 반만 검사합니다.
  for (let i = 0, len = Math.floor(str.length / 2); i < len; i++) {
    // 문자가 다르다면 회문 문자열이 아닙니다.
    if (str[i] !== str[str.length - 1 - i]) {
      return "NO";
    }
  }

  // 모든 문자가 같다면 회문 문자열입니다.
  return "YES";
}
console.log(solutionJS25_4(str));
console.timeEnd("solutionJS25_4");
