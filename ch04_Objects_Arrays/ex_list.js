	/*	Write a function arrayToList that builds up a list structure like the one shown when 
	given [1, 2, 3] as argument. Also write a listToArray function that produces an array from 
	a list. Then add a helper function prepend, which takes an element and a list and creates 
	a new list that adds the element to the front of the input list, and nth, which takes a 
	list and a number and returns the element at the given position in the list (with zero 
	referring to the first element) or undefined when there is no such element.

	If you haven’t already, also write a recursive version of nth.*/

// do I declare a global list?

// expected output: 
// Build a list from an array
	// hint: the list is recursive
	// let list = {
	//   value: 1,
	//   rest: {
	//     value: 2,
	//     rest: {
	//       value: 3,
	//       rest: null
	//     }
	//   }
	// };

//let counter = 0;


function arrayToList(whichArray) {
	

	// error check for array?


	let outList = [];

	for (let i = 0; i < whichArray.length; i++) {
		console.log(`i: ${i}`);
		if (i < (whichArray.length - 1) {
			//outList[whichArray[i]] = outList;
			//console.log(`outList: ${outList}`);
			outlist.push( )
		} else { // last element
			outList[whichArray[i]] = null;
			console.log("NULL!");
		}
	}

//	console.log(`++counter: ${++counter}`);
	return outList;
	//something is bananas here.  not sure what.  time for bed.
	//something about this I'm just not getting!
}

function listToArray(whichList) {
	// Build an array from a list

}

function prepend(whichElement, whichList) {
	// take an element and a list and add the element to the front of the list
	whichList = whichElement[whichList];

}

function nth (whichList, itemNum) {
	// take a list and a number and return the element at the given position in the list
	// zero = first element, undefined = no such element

}


console.log(`arrayToList([10, 20])): ${arrayToList([10, 20])}`);
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20