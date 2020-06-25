/**
 * FLATTENING
 * Use the reduce method in combination with the concat method to "flatten"
 * an array of arrays into a single array that has all the elements of the
 * original arrays.
 */

const { concat } = require('./scripts');

// EXAMPLE:

let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

// Your code here.

const flattenArrays = (arrays) => {
  let outArray = [];
  const reducer = (ac, currentValue) => outArray.concat(ac);
  arrays.reduce(reducer);
  console.log(outArray);
};

flattenArrays(arrays);
