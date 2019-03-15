import { createArrayOfLength } from './general_util';

export const createTowersArray = (n) => {
  const output = {};
  (createArrayOfLength(3)).forEach(i => {
    output[i] = i === 0 ? createArrayOfLength(n) : []
  });
  return output;
}