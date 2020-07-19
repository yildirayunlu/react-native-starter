import { create } from 'apisauce';

// TODO: Move .env file
const baseURL =
  'https://my-json-server.typicode.com/yildirayunlu/demo-rest-api';

export const Api = create({
  baseURL,
  headers: { Accept: 'application/json' },
});
