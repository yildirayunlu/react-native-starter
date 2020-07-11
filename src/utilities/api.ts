import { create } from 'apisauce';

const baseURL = 'https://reqres.in/api/';

export const Api = create({
  baseURL,
  headers: { Accept: 'application/json' },
});
