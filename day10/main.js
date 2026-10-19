// DAY 10 실습 01 — 콘솔과 파일에서 변수 다뤄 보기
console.log("main.js가 연결됐습니다");

console.log("1. 첫 번째 줄");
console.log("2. 두 번째 줄");
// console.log("주석은 실행되지 않습니다.");
console.log("3. 세 번째 줄");

// let은 다시 담을 수 있다(재할당 가능)
let price = 200;
console.log(price);

price = 300;
console.log(price);

let score;
console.log(score);
score = 100;
console.log(score);

let lever = 1;

let userName = ("김오즈");
console.log(userName);
let _count = 0;
let $price = 12000;
let user2 = "이코딩";

let city = "서울";
city = "부산";
console.log("도시 :", city);

// const 다시 담을 수 업다 (상수)
const birthYear = 1998;
console.log("태어난 해 :", birthYear);

// birthYear = 2000; // 재할당 불가
// let city = "대구"; // 재선언 불가

let a = "안녕하세요.\n오늘은 날씨가 좋네요.\n배도 부르고요.";
let b = `안녕하세요.
오늘은 날씨가 좋네요.
배도 부르고요.`;

// boolean type
let isMember = true;
let hasCoupon = false;
console.log(typeof isMember); //boolean
console.log("회원인가요?", isMember);
console.log("쿠폰이 있나요?", hasCoupon);

console.log(10 < 20); // true
console.log(10 > 20); // false

const userScore = 80;
const passScore = 60;
let isPass = userScore > passScore;
//let isPass = 80 > 60;
console.log("합격했나요?", isPass);