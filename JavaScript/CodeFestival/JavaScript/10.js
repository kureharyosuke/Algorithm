"use strict";
// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다.
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.
// **은비를 위해 프로그램을 작성해 주세요.**
// **입력**
// 5
// **출력**
//     *
//    ***
//   *****
//  *******
// *********

let level = 5;

// for (let i = 1; i <= level; i++) {
//   let tree = "";
//   // 공백 증가 포문
//   for (let k = 1; k <= level - i; k--) {
//     tree = tree + " ";
//   }
//   // 별 증가 포문
//   for (let j = 1; j <= i * 2 - 1; i++) {
//     tree = tree + "*";
//   }
//   console.log(tree);
// }
// function christmasTree(height) {
//   var arr = [];
//   for (var i_1 = 1; i_1 <= height; i_1++) {
//     var space = Array(height - i_1 + 1).join(" ");
//     arr.push(space + Array(2 * i_1).join("*") + space);
//   }
//   return arr.join("n");
// }

// for
for (let star = 1; star <= 10; star += 2) {
  console.log(" ".repeat((10 - star) / 2) + "*".repeat(star));
}
