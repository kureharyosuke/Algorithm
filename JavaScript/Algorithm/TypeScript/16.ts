/**
 * 중복제거 문자 반환
 *
 * 입력 예제
 * ksekkset
 *
 * 출력 예제
 * kset
 *
 */
console.time("solutionTS16_0");
function solutionTS16_0(string: string): string {
  let answer: string = "";
  console.log(string.indexOf("k", 1)); // 찾는값, 인덱스 / search value , index,
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i], i, string.indexOf(string[i]));
    if (string.indexOf(string[i]) === i) answer += string[i];
  }
  return answer;
}
console.timeEnd("solutionTS16_0");

console.log(solutionTS16_0("ksekkset"));

console.time("solutionTS16_0_0");
function solutionTS16_0_0(string: string): number {
  let answer: number = 0;
  let pos: number = string.indexOf("k");
  while (pos !== -1) {
    answer++;
    pos = string.indexOf("k", pos + 1);
  }
  return answer;
}
console.timeEnd("solutionTS16_0_0");

console.log(solutionTS16_0_0("ksekkset"));
