// After so many months away from this book are the exercise 4 questions any easier?
// Going to start fresh on the list problem.  So bye-bye ex_list.js

/**
 * A list
 * Objects, as generic blobs of values, can be used to build all sorts of data structures.
 * A common data structure is the list.  A list is a nested set of objects, with the first
 * object holding a reference to the second, the second to the third, etc...
 */

// "rest" means "rest of the list"
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

/**
 * A nice thing about lists is that they can share parts of their structure.  For example,
 * if two new values are created:
 *     { value: 0, rest: list}
 *     { value: -1, rest: list}
 * ...they are both independent lists, but they share the structure that makes up their last three elements.
 * The original list is also still a valid three-element list.
 *
 * Problem:
 * Write a function array ToList that builds up a list structure like the one shown when given [1, 2, 3]
 * as an argument.  I've already cheated and gained the hint that it's easiest to start at the end.
 */

const makeAList = (ia) => {
  //   let outputList = {
  //     value: inputArray.pop(),
  //     rest: null,
  //   };

  inputArray = ia;

  // Grab last value and use it to get set up:

  let outputList = {
    value: inputArray.pop(), // pop it off so it doesn't get used again.
    rest: null,
  };

  //   let i;
  //   let term = inputArray.length - 1;

  // Could do this with a while loop and pop.
  //   for (i = term; i >= 0; i--) {
  //     console.log('i:', i, ' array value:', inputArray[i]);
  //     outputList = {
  //       value: inputArray[i],
  //       rest: outputList,
  //     };
  //   }

  while (inputArray.length > 0) {
    outputList = {
      value: inputArray.pop(),
      rest: outputList,
    };
  }

  return outputList;
};

console.log(JSON.stringify(makeAList([10, 20, 30, 5, 7, 8, 12])));
