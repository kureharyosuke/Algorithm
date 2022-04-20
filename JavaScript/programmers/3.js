/**
 * * 같은 숫자는 싫어
 * ! [1,1,3,3,0,1,1]이면 [1,3,0]로 연속되는 중복을 제거하는 문제죠.
 *
 * TODO: 이런 문제는 필연적으로 반복문이 최소 한 번은 들어가게 됩니다.
 * TODO: 사람이라면 어떻게 중복을 제거할 지를 생각해봐도 좋을 것 같습니다.
 * TODO: 저라면 지금 숫자랑 다음 숫자랑 같으면 그 숫자는 없애는 방식을 택하겠습니다.
 * 1, 1, 3, 3, 0, 1, 1
 */

function solutionJS1(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(solutionJS1([1, 1, 3, 3, 0, 1, 1])); //[ 1, 3, 0 ]

function solutionJS2(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

console.log(solutionJS2([1, 1, 3, 3, 0, 1, 1])); //[ 1, 3, 0 ]

function solutionJS3(array) {
  return array.filter((value, index) => value !== array[index - 1]);
}

console.log(solutionJS3([1, 1, 3, 3, 0, 1, 1])); //[ 1, 3, 0, 1 ]

/*
 * 같은 숫자는 싫어
 * ! [1,1,3,3,0,1,1]이면 [1,3,0]로 연속되는 중복을 제거하는 문제죠.
 *
 * TODO: 이런 문제는 필연적으로 반복문이 최소 한 번은 들어가게 됩니다.
 * TODO: 사람이라면 어떻게 중복을 제거할 지를 생각해봐도 좋을 것 같습니다.
 * TODO: 저라면 지금 숫자랑 다음 숫자랑 같으면 그 숫자는 없애는 방식을 택하겠습니다.
 * 1, 1, 3, 3, 0, 1, 1
 */

function solutionJS4(array) {
  return array.filter((value, index) => value !== array[index + 1]);
}

console.log(solutionJS4([1, 1, 3, 3, 0, 1, 1])); //[ 1, 3, 0, 1 ]
