// DAY 12 실습 02 — 합계 함수 만들기

// 1. 1부터 n까지 더한 값을 돌려주는 함수 — 함수 선언식
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumTo(10));
console.log(sumTo(100));

// 2. 구구단 한 단을 출력하는 함수 — 함수 표현식, 매개변수 dan
const printDan = function (dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
};

printDan(8);

// 3. 점수 목록의 합계 — 화살표 함수 (배열은 DAY 13에서 자세히 봅니다)
const scores = [80, 95, 70, 55];

const sumScores = (list) => {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
};

//const total = sumScores(scores);
//console.log(`합계 ${total}점, 평균 ${total / scores.length}점`);

// 4. 조건에 맞는 것만 세기 — 60점 미만은 continue로 건너뜁니다
const countPass = (list) => {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 60) {
      continue;
    }
    count++;
  }
  return count;
};

console.log(`60점 이상 ${countPass(scores)}명`);


// 과제
function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return;
  }
  return num1 + num2;
}

const double = (n) => n * 2;

function greet(name = "회원") {
  return `${name}님, 안녕하세요`;
}

console.log(sum(10, 20));
console.log(sum("a", "b"));
console.log(double(sum(1, 2)));
console.log(greet());
console.log(greet("김오즈"));

//

let total = 0;
for (let i = 1; i < 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  total += i;
}
console.log(total);