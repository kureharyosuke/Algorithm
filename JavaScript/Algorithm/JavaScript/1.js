// * 3개의 수중에 최소값

function solution(a, b, c) {
  let answer;

  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solution(2, 5, 1));

function solution2(a, b, c) {
  let answer;
  a < b ? (answer = a) : (answer = b);
  c < answer ? (answer = c) : (answer = answer);
  return answer;
}

console.log(solution2(2, 5, 1));

function solution3(...args) {
  return Math.min(...args);
}

console.log(solution2(2, 5, 1));
