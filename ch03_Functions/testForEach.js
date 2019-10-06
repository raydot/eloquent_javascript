/**
 * This doesn't come out of the chapter but I'm not liking the
 * way the beancounting example looks.  Trying to tidy it up with
 * forEach.  So here are some explorations on forEach.
 */

/**
 * The forEach method executes a provided function once for each array
 * element.
 */

var array1 = ["a", "b", "c"];

array1.forEach(function(element) {
  console.log(element);
});

// Or, an example with split:
const array2 = "Dave Rules!".split("");

array2.forEach(function(element) {
  console.log(element);
});

/**
 * THE SYNTAX
 * arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
 *
 * PARAMETERS:
 * callback
 *  Function to execute on each element, taking three arguments:
 *      currentValue
 *          The current element being processed in the array
 *      index (optional)
 *          The index of the current element being processed in
 *          the array
 *      array (optional)
 *          The array forEach() was called upon
 * thisArg (optional)
 *  value to use as this when executing callback
 *
 * return value : undefined
 *
 * forEach does not mutate the array on which it is called, although
 * the callback may do so.
 *
 * There is no way to stop or break a forEach() loop.  If you need this
 * behavior, forEach() is the wrong tool
 */

// Examples:
// No operation for uninitialized values (sparse arrays)
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element) {
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// Printing the contents fo an array:
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

[2, 4, , , 9].forEach(logArrayElements);

// Indexes two and three are skipped because there is no element.

// There are more examples in the text but kind of contrived.

/**
 * Flattens passed array to one-dimensional array
 *
 * @params {array} arr
 * @returns {array}
 */
function flatten(arr) {
  const result = [];

  arr.forEach(i => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9], 10];

console.log(flatten(problem));
