const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const ehh = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // if (restOptions.body) {
  //   restOptions.body = JSON.stringify(restOptions.body);
  // }

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// const result = await ehh('POST', ENDPOINT, { name: '엄현호' });
// const result = await ehh({ url: ENDPOINT, method: 'POST', body: { name: '엄현호' } });

// console.log(result.data);

ehh.get = (url, options) => {
  return ehh({
    url,
    ...options,
  });
};

ehh.post = (url, body, options) => {
  return ehh({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

ehh.delete = (url, options) => {
  return ehh({
    method: 'DELETE',
    url,
    ...options,
  });
};

ehh.put = (url, body, options) => {
  return ehh({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

ehh.patch = (url, body, options) => {
  return ehh({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
