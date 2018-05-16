/*
	ex_Recursion.js
	A way to define whether a positive whole number is even or odd:

	*	Zero is even
	*	One is odd
	*  	For any nother number N, its evenness is the same as N-2

	Define a recursive function isEven corresponding to this descriptiom.

	It should aceept a single whole number amd return a Boolean.
*/

function isEven(whichNumber) {
	if (whichNumber < 0) {
		whichNumber *= -1;
	}
	if (whichNumber == 0) {
		return true;
	} else if (whichNumber == 1) {
		return false
	} else {
		return (isEven(whichNumber - 2));
	}

}