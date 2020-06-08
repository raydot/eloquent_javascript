/**
 * Write a function deepEqual() that takes two values and returns true
 * only if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with a
 * recursive call to deepEqual().
 *
 * To find out whether the values should be compared directly (use the ===)
 * operator for that) or have their properties compared, you can use the typeof
 * operator.  If it produces "object" for both values, you should to a deep
 * comparison.  Be sure and take into account that typeOf null also
 * produces "object."
 *
 * There are a few ways to do this that have already been suggested.
 * Lodash contains an _.isEqual() function
 * And you can stringify the return from Object.keys() and compare the results.
 *
 * I'm going to do this the way the book suggests, but probably would use Lodash
 * if this was in production.
 *
 * This is only going to work for the provided test cases.
 *
 */

const deepEqual = (obj1, obj2) => {
  if (
    typeof obj1 === 'object' &&
    obj1 !== null &&
    typeof obj2 === 'object' &&
    obj2 !== null
  ) {
    // We have two non-null objects, deep compare!
    o1Keys = Object.keys(obj1);
    o2Keys = Object.keys(obj2);
    if (true) {
    }
    // console.log('obj1.keys:', o1Keys);
    // console.log('obj1[1]:', o1Keys[1]);
    // console.log('obj2.keys:', o2Keys);
    return false;
  } else {
    // Not objects or not non-null.  Are they equal?
    if (obj1 === obj2) {
      return true;
    } else {
      return false;
    }
  }
};

/* 
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
*/

const testForEachWithValue = () => {
  testArray = [1, 3, 21, { foo: 'bar' }, 'tittle'];
  testArray.forEach((element, whichElement, arrayRehash) =>
    console.log(
      'Element',
      whichElement,
      ':',
      element,
      'Original array:',
      arrayRehash
    )
  );
};

testForEachWithValue();

const testObjectValues = () => {
  testObject = { bar: 'baz', doo: { loo: { car: 'caz' } } };
  console.log(typeof testObject);
};

testObjectValues();
