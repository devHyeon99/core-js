/* const success = (url) => {
  console.log(url + '성공');
};

function movePage(url, success, fail) {
  if (url === 'www.naver.com') success(url);
  else fail();
}

movePage('www.naver.com', success, function () {
  console.log('실패');
});
 */

const { isArgumentsObject } = require('util/types');

/* // higher - order function 고차함수
function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}

console.log(map([1, 2, 3], (item) => item / 2));

// 함수를 인수로 받아 처리함. 함수를 리턴함.

function greater(n) {
  return function (m) {
    return n > m;
  };
}

const g = (n) => (m) => n > m; */

/* const MASTER = (function () {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();
 */

// rest parameter ( 유사 배열을 진짜 배열로 바꾸는 작업이 많다. )
let calcAllMoney = (...rest) => {
  let total = 0;
  // for (let i = 0; i < rest.legnth; i++) {
  //   total += i;
  // }

  // for (let i of rest) {
  //   total += i;
  // }

  // rest.forEach((value) => (total += value));

  total = rest.reduce((acc, val) => acc + val, 0);

  return total;
};

const result = calcAllMoney(1000, 5000, 4500, 13000);
console.log(result);

function solution(my_string) {
  return my_string
    .split('')
    .filter((item) => !isNaN(item))
    .map((item) => parseInt(item))
    .sort((a, b) => a - b);
}
