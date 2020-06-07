// After so many months away from this book are the exercise 4 questions any easier?
// Going to start fresh on the list problem.  So bye-bye ex_list.js
// Look through document versions in Git for revsions and the like.

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
 * Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3]
 * as an argument.  I've already cheated and gained the hint that it's easiest to start at the end.
 */

const arrayToList = (ia) => {
  let inputArray = ia;

  // Grab last value and use it to get set up:
  let outputList = {
    value: inputArray.pop(),
    rest: null,
  };

  while (inputArray.length > 0) {
    outputList = {
      value: inputArray.pop(),
      rest: outputList,
    };
  }

  return outputList;
};

// test it
//console.log(JSON.stringify(arrayToList([10, 20, 30, 5, 7, 8, 12])));

/**
 * Also write a listToArray function that produces an array from a list.
 * Seems to me that needs to be independent of the array values (duh)
 * This version is recursive!
 */
let outputArray = [];
const listToArray = (inputList) => {
  if (inputList.rest === null) {
    outputArray.push(inputList.value);
  } else {
    outputArray.push(inputList.value);
    listToArray(inputList.rest);
  }

  return outputArray;
};

/**
 * The "hint" point out the following can be used as the for loop for
 * listToArray and nth, but I like my solution better!
 *
 * for (let node = list; node; node = node.rest) {}
 */

// Test list:
const testList = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: {
        value: 5,
        rest: {
          value: 7,
          rest: {
            value: 8,
            rest: {
              value: 12,
              rest: null,
            },
          },
        },
      },
    },
  },
};

// console.log(listToArray(testList));

/**
 * Add a helper function prepend, which takes an element and a list and
 * creates a new list that adds the element to the front of the list.
 */

const prepend = (element, list) => {
  newList = {
    value: element,
    rest: list,
  };

  return newList;
};

// console.log('prepend: ', JSON.stringify(prepend('sally', testList)));

/**
 * Add a helper function called nth, which takes a list and a number
 * and returns the element at the given position of the list.
 * The first element is located at 0.  nth should be recursive.
 */

const nth = (list, number) => {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    // we've gone to the end without finding the value
    return undefined;
  } else {
    return nth(list.rest, number - 1);
  }
};

console.log('nth:', nth(testList, 70));

// Test array:
const testArray = arrayToList([
  'alpha',
  'bravo',
  'charlie',
  'delta',
  'echo',
  'foxtrot',
]);

// Create list from array, and then convert back to array
//console.log(listToArray(testArray));

/**
 * As JSON data, a list would look something like this:
{
    "value": 10,
	"rest": {
		"value": 20,
		"rest": {
			"value": 30,
			"rest": {
				"value": 5,
				"rest": {
					"value": 7,
					"rest": {
						"value": 8,
						"rest": {
							"value": 12,
							"rest": null
						}
					}
				}
			}
		}
	}
}
 */
