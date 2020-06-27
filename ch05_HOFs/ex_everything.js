/**
 * Analogous to the some method, arrays also have an every method.
 * Every returns true when the given function returns true for
 * every element in the array.  In a way, some is a version of ||
 * that acts on arrays, while every is like &&.fail
 *
 * Implement every as a function that takes an array and a predicate
 * function as parameters.  Write two versions, one using a loop
 * and one using the some method.
 *
 * I solved these two without the hints, but the hint points out that
 * this can be solved with the application of DeMorgan's laws, which
 * state that a && b = !(!a || !b).
 */

function everyLoop(array, test) {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
}

function everySome(array, test) {
  return array.every(test) ? true : false;
}

console.log(everyLoop([1, 3, 5], (n) => n < 10));
// true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// false
console.log(everyLoop([], (n) => n < 10));
// true
