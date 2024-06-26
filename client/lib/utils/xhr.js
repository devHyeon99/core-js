const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};

// [readyState]
// 0 : uninitialized
// 1 : loding
// 2 : loaded
// 3 : interactive
// 4 : complete

// 객체 합성

function xhr({
  method = 'GET',
  url = '',
  body = null,
  onsuccess = null,
  onfail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  // const { method = 'GET', url = '', body = null, onsuccess = null, onfail = null } = options;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    // 4번 상태일때 값을 가져오면된다.
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        onsuccess(data);
      } else {
        onfail('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

/* const options = {
  method: 'POST',
  url: ENDPOINT,
  body: user,
  onsuccess() {},
  onfail() {},
};
 */

/* xhr({
  url: ENDPOINT,
  body: user,
  onsuccess(data) {
    console.log(data);
  },
  onfail() {},
}); */

xhr.get = (url, onsuccess, onfail) => {
  xhr({
    url,
    onsuccess,
    onfail,
  });
};

xhr.post = (url, body, onsuccess, onfail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onsuccess,
    onfail,
  });
};

xhr.put = (url, body, onsuccess, onfail) => {
  xhr({
    method: 'PUT',
    body,
    url,
    onsuccess,
    onfail,
  });
};

xhr.delete = (url, onsuccess, onfail) => {
  xhr({
    method: 'DELETE',
    url,
    onsuccess,
    onfail,
  });
};

/* -------------------------------------------------------------------------- */
/*                               xhr Promise 방식                               */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: ENDPOINT,
  body: user,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, headers, errorMessage } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // const { method, url, body, headers, errorMessage } = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          //성공
          resolve(JSON.parse(xhr.response));
        } else {
          // 실패
          reject({ message: '알 수 없는 오류 발생' });
        }
      }
    });
  });
}

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });
