// * 유효한 팰린드롬

// * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.

// * ▣ 입력설명
// * 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// * ▣ 출력설명
// * 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

// * ▣ 입력예제 1
// * found7, time: study; Yduts; emit, 7Dnuof

// * ▣ 출력예제 1 YES

function solutionJS26_0() {}

function solutionJS26_1(stringA, stringB) {
  // 알파벳과 숫자만 추출해서 대소문자를 구분하지 않고 소문자로 변환한 후 새로운 문자열 생성
  const newStr = stringA.toLowerCase().split("").sort().join("");
  console.log(
    "🚀 ~ file: 26.js:29 ~ solutionJS26_1 ~ stringA.toLowerCase().split('').reverse().join(''):",
    stringA.toLowerCase().split("").reverse().join("")
  );
  console.log(
    "🚀 ~ file: 26.js:29 ~ solutionJS26_1 ~ stringA.toLowerCase().split('').reverse().join(''):",
    stringB.toLowerCase().split("").reverse().join("")
  );

  // 앞에서부터 읽는 문자열과 뒤에서부터 읽는 문자열을 비교
  return newStr === stringB.toLowerCase().split("").sort().join("")
    ? "YES"
    : "NO";
}
console.log(solutionJS26_1(strA, strB));

function solutionJS26_2(stringA, stringB) {
  const strA = stringA
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const strB = stringB
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return strA === strB ? "YES" : "NO";
}
console.log(
  "🚀 ~ file: 26.js:39 ~ solutionJS26_2 ~ solutionJS26_2:",
  solutionJS26_2(strA, strB)
);

function solutionJS26_3(string) {
  const processString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseString = processString.split("").reverse().join("");

  return processString === reverseString ? "YES" : "NO";
}
console.log(solutionJS26_1("found7, time: study; Yduts; emit, 7Dnuof"));
