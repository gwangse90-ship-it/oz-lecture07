// 실습

/**
 * 
 * 
 * const readline = require("readline");
const rl = readline.createInterface(
  {input: process.stdin,
    output: process.stdout,
  });

rl.question("단수를 입력하세요 : ", function(dan)
{
  for(var i = 1; i < 10; i++)
  {console.log(dan + " * " + i + " = " + dan * i);}
}
rl.close();
 * 
 */

// 배열의 데이터 동적 추가

// console.log('===== 초기 배열 데이터 ====')
// let arr = ["자바", "C언어", "파이썬"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// console.log('===== 초기 배열 데이터 추가 ====')

// arr.push('ASP.net');
// arr.push('c#.net');

// console.log();
// console.log('==== 배열의 출력 ====')

// console.log('배열의 길이 : ' +arr.length);
// for(let i = 0; i <arr.length; i++){
//   console.log(arr[i])
// }

//while 월 구하기

// let i = 1;
// while(i < 13){
//   console.log(i + '월');
//   i++;
// }