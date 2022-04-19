/**
 * * 2022년 a월 b일은 무슨 요일일까요?
 * TODO: new Date에서 month가 0부터 시작(1월이 0이고, 12월이 11)한다
 */

function solutionJS1(year, month, date) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(year, month - 1, date).getDay()];
}

console.log(solutionJS1(2022, 4, 19));

console.log(solutionJS1(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()));
