/**
 * 연필 개수 (12개 3다스)
 */
function solutionTS3(num: number): string {
  let pencil: number = Math.ceil(num / 12);
  let answer: string = pencil + "다스";
  return answer;
}

console.log(solutionTS3(25)); // OUTPUT:3

console.log(solutionTS3(178)); //OUTPUT:15
