/**
 * 문제 12: 게임 캐릭터 클래스 만들기
 * 다음 소스코드에게 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
 * 주어진 소스 코드를 수정해선 안됩니다.
 */

//#  여기에 class 문을 작성하시오.

class Wizard {
  constructor(health: number, mana: number, armor: number) {
    console.log("construction complete");
    // this.health = health;
    // this.mana = mana;
    // this.armor = armor;
    health;
    mana;
    armor;
  }
  attack() {
    console.log("파이어볼?");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
