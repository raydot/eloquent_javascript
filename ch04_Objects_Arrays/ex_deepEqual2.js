/**
 * Was trying to do too many things at once with deepEqual.  Starting again with simpler goals.
 */

const deepEqual = (obj1, obj2) => {
  console.log(Object.keys(obj1));
  console.log(Object.keys(obj2));
  if (obj1 === obj2) {
    return true;
  } else {
    return false;
  }
};

// * TEST CASES * //

let obj = { here: { is: 'an' }, object: 2 };

console.log('Should return: true  Returns:', deepEqual(obj, obj));

console.log(
  'Should return: false  Returns:',
  deepEqual(obj, { here: 1, object: 2 })
);

console.log(
  'Should return: true  Returns:',
  deepEqual(obj, { here: { is: 'an' }, object: 2 })
);
