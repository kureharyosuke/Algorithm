// 데이터
var year: string = "2019";
var month: string = "04";
var day: string = "26";
var hour: string = "11";
var minute: string = "34";
var second: string = "27";

var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result); //빈칸을 채워주세요

// 출력
// 2019/04/26 11:34:27
// String.concat() 메소드 // String.concat(...strings: string[]): string
