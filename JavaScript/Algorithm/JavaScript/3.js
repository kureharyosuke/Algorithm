/**
 * 연필 개수 (12개 3다스)
 */
function solutionJS3(num) {
  let pencil = Math.ceil(num / 12);
  let answer = pencil + "다스";
  return answer;
}

console.log(solutionJS3(25)); // OUTPUT:3

console.log(solutionJS3(178)); //OUTPUT:15
