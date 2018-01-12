/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  let result = cb(arr[0]);
  return result;
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  let result = cb(arr.length);
  return result;
};


const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  let lastItem = cb(arr.slice(-1)[0]);
  return lastItem;
  };

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
 let result = cb (x + y)
 return result;
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let solution = cb(x * y);
  return solution;
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i=0; i < list.length; i++)
  if ( item === list[i]) {
      cb(true);
  } else  cb(false);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
