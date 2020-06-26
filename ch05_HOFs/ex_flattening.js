/**
 * FLATTENING
 * Use the reduce method in combination with the concat method to "flatten"
 * an array of arrays into a single array that has all the elements of the
 * original arrays.
 */

const { concat, reduce } = require('./scripts');

// EXAMPLE:

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

// Your code here.

/*
const flattenArrays = (arrays) => {
  let outArray = [];
  reduce((arrays, index, outArray) => (outArray = concat(arrays[index])));
};

flattenArrays(arrays);
*/

// BRUTE FORCE: This flattens, but not using reduce.
const flattenArrays = (arrays) => {
  let outArray = [];
  for (let element of arrays) {
    outArray = outArray.concat(element);
  }
  console.log(outArray);
};

flattenArrays(arrays);

// THE ANSWER cried the finx:
const flattenArrays2 = (arrays) => {
  return arrays.reduce((outArray, nextItem) => outArray.concat(nextItem));
};

console.log('FA2:', flattenArrays2(arrays));
