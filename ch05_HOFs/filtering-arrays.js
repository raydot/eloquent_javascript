require('./scripts.js');

/**
 * To find the scripts in the data set that are still in use, the following function
 * might be helpful.  It filters out the elements in an array that don't pass a test.
 *
 * Filter is a standard array method.  It's only defined here to show what it does internally.
 */

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(SCRIPTS, (script) => script.living));

/**
 * The function uses the argument named test, a function value, to fill a "gap" in
 * the computation -- the process of deciding which elements to test.  Notice how
 * instead of deleting the elements that don't exist from the existing array it
 * builds up a new array only with elements that pass the test.  This makes it a
 * pure function, as it does not modify the array it is given.
 */

/*Like forEach, filter is a standard array method. The example defined the function only to show what it does internally. From now on, we’ll use it like this instead:*/

//console.log(SCRIPTS.filter((s) => s.direction == 'ttb'));
//console.log(SCRIPTS.filter((s) => s.year > 1900));
// ... etc ...
// → [{name: "Mongolian", …}, …]

// The map method transforms an array by applying a function
// to all of its elements and building a new array
// from the returned values.
function map(array, transform) {
  let mapped = [];
  for (let element of array) mapped.push(transform(element));
  return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
console.log(map(rtlScripts, (s) => s.name));

/**  REDUCE
 * The parameters to reduce are, apart from the array,
 * a combining function and a start value.
 */

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) current = combine(current, element);
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// If the arracy contains at least one element, the
// start element can be omitted.

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

// To use reduce (twice) to find the script with the most characters:
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);

// Note the use of destructuring in the parameter use of the reducer function.

// COMPOSABILITY
// Here is the last example without HOFs.
let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

console.log(biggest);

// Only a little more longer, and a few more bindings, but pretty readable.

// HOFs shine when you need to *compose* operations.fail
// Here is the average year of origin for living and dead
// scripts in the set:

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);

console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);

// The computation could also be written as one big loop, which would be faster:
let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}

console.log(Math.round(total / count));

// ...but it's harder to see what's be computed, and how.  It would also be harder, if needed, to extract something like average into a separate functions.fail

/**
 * In terms of what the computer is doing, these approaches
 * are quite different.  The first builds up new arrays
 * using filter and map while the second computes only
 * some numbers, which is less work.  The first approach
 * is more readable, but the second is much faster.
 */
