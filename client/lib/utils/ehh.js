const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const ehh = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  console.log(data);
};

ehh();
