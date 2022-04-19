/**
 * * 2022년 a월 b일은 무슨 요일일까요?
 * TODO: new Date에서 month가 0부터 시작(1월이 0이고, 12월이 11)한다
 */

function solutionTS1(year: number, month: number, date: number): string {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(2016, month - 1, date).getDay()];
}
