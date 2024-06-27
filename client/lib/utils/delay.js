import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';

const first = getNode('.first');
const second = getNode('.second');

// 아래에는 spread syntax, type check, if, mixin, hoisting, Promise 를 사용하고 있음.

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류 발생',
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

async function delayA(data) {
  const p = new Promise((rs, rj) => {
    setTimeout(() => {
      rs(data);
    }, 2000);
  });

  const result = p;

  return result;
}

// const name = await delayA('지연'); // await을 async안에서만 썼어야했는데 2022 부터 모듈 최상위에서도 실행할 수 있게 되었다. await 혼자
// console.log(name);

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172');
  insertLast(
    document.body,
    `<img src ="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

// getData();
