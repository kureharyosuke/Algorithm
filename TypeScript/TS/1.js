"use strict";
//[문제1 : 배열의 삭제]
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
let nums = [100, 200, 300, 400, 500];
// nums.pop();
// nums.pop();
// console.log(nums);
// let nums1: number[] = nums.slice(0, 3);
// // console.log(nums.splice(3, 2)); // 400, 500
// console.log(nums1);
let numSplice = nums.splice(3, 2);
console.log(nums);
