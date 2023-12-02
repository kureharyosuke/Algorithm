// * 가장 짧은 문자거리

// * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

// * ▣ 입력설명
// * 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// * ▣ 출력설명
// * 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

// * ▣ 입력예제 1 teachermode e
// * ▣ 출력예제 1 10121012210

function shortestDistanceDP(s, t) {
  const result = new Array(s.length).fill(Infinity);
  let prev = -Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      prev = i;
    }
    result[i] = Math.min(result[i], i - prev);
  }

  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      prev = i;
    }
    result[i] = Math.min(result[i], prev - i);
  }

  return result.join("");
}

console.log(shortestDistanceDP("teachermode", "e")); // 출력: 10121012210
// 브루트 포스(Brute Force) 방법:

// 문자열 s를 순회하면서 각 문자와 문자 t와의 거리를 계산합니다.
// 모든 문자와의 거리를 비교하여 최소 거리를 찾습니다.
// 시간 복잡도: O(n^2) (n은 문자열 s의 길이)

// 동적 계획법(Dynamic Programming) 방법:

// 문자열 s를 순회하면서 각 문자와 문자 t와의 거리를 계산하여 배열에 저장합니다.
// 저장된 거리 배열을 이용하여 최소 거리를 계산합니다.
// 시간 복잡도: O(n) (n은 문자열 s의 길이)

// 투 포인터(Two Pointers) 방법:

// 문자열 s를 순회하면서 문자 t와 일치하는 위치를 찾습니다.
// 두 개의 포인터를 사용하여 최소 거리를 계산합니다.
// 시간 복잡도: O(n) (n은 문자열 s의 길이)

// 슬라이딩 윈도우(Sliding Window) 방법:

// 문자열 s를 순회하면서 문자 t와 일치하는 위치를 찾습니다.
// 윈도우를 이동시키면서 최소 거리를 계산합니다.
// 시간 복잡도: O(n) (n은 문자열 s의 길이)

// 해시 맵(Hash Map) 방법:

// 문자열 s를 순회하면서 각 문자와 문자 t와의 거리를 해시 맵에 저장합니다.
// 저장된 거리를 이용하여 최소 거리를 계산합니다.
// 시간 복잡도: O(n) (n은 문자열 s의 길이)
