// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d: {
  height: number;
  weight: number;
  temperature: number;
  eyesight: number;
} = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]);
console.log(d.weight);

/**
 * 8.ts:12:3 - error TS1117: An object literal cannot have multiple properties with the same name in strict mode.

12   weight: 84,
     ~~~~~~

8.ts:12:3 - error TS2300: Duplicate identifier 'weight'.

12   weight: 84,
     ~~~~~~

 */
