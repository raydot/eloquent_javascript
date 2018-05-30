/*	
	Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(whichArray){ //this works!
	let newArray = [];
	console.log(`whichArray: ${whichArray}`);
	for (let i = whichArray.length - 1; i >= 0; i--) {
		newArray.push(whichArray[i]);
	}
	return newArray;
}

function reverseArrayInPlace(whichArray){  //this works!
	let stopPoint = whichArray.length / 2;
	let relLength = whichArray.length;
	for (let i = 0; i < stopPoint; i++) {
		let temp = whichArray[i];
		whichArray[i] = whichArray[--relLength];
		whichArray[relLength] = temp;
	}
	return whichArray;
}

// TEST CASES
console.log(`reverse array: ${reverseArray(["A", "B", "C"])}`);
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
arrayValue = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]