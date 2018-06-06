	/*	Write a function arrayToList that builds up a list structure like the one shown when 
	given [1, 2, 3] as argument. Also write a listToArray function that produces an array from 
	a list. Then add a helper function prepend, which takes an element and a list and creates 
	a new list that adds the element to the front of the input list, and nth, which takes a 
	list and a number and returns the element at the given position in the list (with zero 
	referring to the first element) or undefined when there is no such element.

	If you haven’t already, also write a recursive version of nth.*/

	/* UUGH!  I finally had to click the hint!
	Building up a list is easier when done back to front. So arrayToList could iterate over the array backwards (see the previous exercise) and, for each element, add an object to the list. You can use a local binding to hold the part of the list that was built so far and use an assignment like list = {value: X, rest: list} to add an element.

	To run over a list (in listToArray and nth), a for loop specification like this can be used:

	for (let node = list; node; node = node.rest) {}
	Can you see how that works? Every iteration of the loop, node points to the current sublist, and the body can read its value property to get the current element. At the end of an iteration, node moves to the next sublist. When that is null, we have reached the end of the list, and the loop is finished.

	The recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list and at the same time count down the index until it reaches zero, at which point it can return the value property of the node it is looking at. To get the zeroth element of a list, you simply take the value property of its head node. To get element N + 1, you take the _N_th element of the list that’s in this list’s rest property.
	*/

// do I declare a global list?
let masterList = [];

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
	let arLen = whichArray.length;
	//let arLen

	for (let i = 0; i < arLen; i++) {
		console.log(`i: ${i}`);
		if (i < (arLen - 1)) {
			//outList[whichArray[i]] = outList;
			//console.log(`outList: ${outList}`);
			outlist.push();
		} else { // last element
			outList[whichArray[i]] = null;
			//console.log("NULL!");
		}
	}

//	console.log(`++counter: ${++counter}`);
	return outList;
	//something is bananas here.  not sure what.  time for bed.
	//something about this I'm just not getting!
}

//let mainList = [];

function listToArray(whichArray) {
	// Build an array from a list
	// uno mas!

	// if you pass a list to a for loop and then pop...?
	// SCOPE YOU DUMB DUMB!
	let ic = whichArray.length;
	//let il = whichList;

	for (let i = ic; i >=0; i--) {
		mainList.pop(mainList +////)  How do you get to the elements?!
	}

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