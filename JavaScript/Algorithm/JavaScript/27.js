// * 숫자만 추출

// * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
// * 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
// * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// * ▣ 입력설명
// * 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

// * ▣ 출력설명
// * 첫 줄에 자연수를 출력합니다.

// * ▣ 입력예제 1 g0en2T0s8eSoft
// * ▣ 출력예제 1 208

function splitOfNumber (string) {
    return string.split('').filter(val => new Set(val) && Number(val) ).join('')
}

console.log(splitOfNumber('g0en2T0s8eSoft'))

function solutionJS27_1(string) {
  let numStr = ''
  for (let i = 0; i <string.length; i++) {
    if(!isNaN(string[i]) && string[i] !== ' ') {
      numStr += string[i]
    }
  }
}
console.log("🚀 ~ file: 27.js:23 ~ solutionJS27_1 ~ solutionJS27_1:", solutionJS27_1('g0en2T0s8eSoft'))

function solutionJS27_2(string) {
  const numsArr = string.split('')
  .reduce((acc, curr) => {
    if (!isNaN(curr)) {
      return acc + curr;
    } else {
      return acc;
    }
  }, '');
  return parseInt(numsArr, 10);
}
console.log("🚀 ~ file: 27.js:23 ~ solutionJS27_1 ~ solutionJS27_1:", solutionJS27_2('g0en2T0s8eSoft'))

function solutionJS27_3(string) {
  const numsArr = string.match(/\d/g);
  const naturalNumber = parseInt(numsArr.join(''));
  return naturalNumber;
}
console.log("🚀 ~ file: 27.js:23 ~ solutionJS27_1 ~ solutionJS27_1:", solutionJS27_3('g0en2T0s8eSoft'))
