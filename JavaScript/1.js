//[문제1 : 배열의 삭제]
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

// nums.pop();
// nums.pop();
// console.log(nums);
// var nums1 = nums.slice(0, 3);
// // numslice = nums.slice(3, 2);
// console.log(nums1);

let numSplice = nums.splice(3, 2);

console.log(nums);
