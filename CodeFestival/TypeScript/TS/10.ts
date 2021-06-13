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

// const n = prompt(); //function prompt(message?: string | undefined, _default?: string | undefined): string | null
// let tree = "";

// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += "*";
//   }
//   tree += star + "\n";
// }

// console.log(tree);
// ????????????????????????????????

// function christmasTree(height: number) {
//   let arr = [];
//   for (let i = 1; i <= height; i++) {
//     let space = Array(height - i + 1).join(" ");
//     arr.push(space + Array(2 * i).join("*") + space);
//   }
//   return arr.join("n");
// }

// function christmasTree2(height: number) {
//   var tree: string[] = [];
//   for (var i = 1; i <= height; i++) {
//     tree.push(
//       " ".repeat(height - i) +
//         "*".repeat((i - 1) * 2 + 1) +
//         " ".repeat(height - i)
//     );
//   }
//   return tree.join("n");
// }

// String.prototype.repeat = function (n) {
//   return new Array(n + 1).join(this);
// };

// for
for (let star = 1; star <= 10; star += 2) {
  console.log(" ".repeat((10 - star) / 2) + "*".repeat(star));
}
