/**
 * Functions that operate on other functions, either by taking them as
 * arguments or by returning them, are called "higher-order functions."
 *
 * This works because functions are regular values.
 *
 * HOFs allow us to abstract over actions, not just values.
 */

// Common for loop:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Can we abstract "doing something N times" as a function?
// It's easy to write a function that calls console.log N times:
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat(3, console.log);

// But what if we want to do something other than log the numbers?
// Since "doing something" can be represented as a function, and
// functions are just values, the action can be passed as a function value:

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// We don't have to pass a predefined function to repeat.  Often, it is
// easier to create a function value on the spot instead:
let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// Functions that create new functions:

function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Functions that change other functions:
function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log('called with', args, ', returned', result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);

// Functions that provide new types of control flow.
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, 'is even');
  });
});

// There is a built-in array method, forEach, that provides something like
// a for/of loop as an HOF:

['A', 'B'].forEach((l) => console.log(l));
