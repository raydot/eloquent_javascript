/*
	ex_Recursion.js
	A way to define whether a positive whole number is even or odd:

	*	Zero is even
	*	One is odd
	*  	For any nother number N, its evenness is the same as N-2

	Define a recursive function isEven corresponding to this descriptiom.

	It should aceept a single whole number amd return a Boolean.
*/

//this one blows the call stack at 418000

function isEven(whichNumber) {
  if (whichNumber < 0) {
    whichNumber *= -1;
  }
  if (whichNumber == 0) {
    return true;
  } else if (whichNumber == 1) {
    return false;
  } else {
    return isEven(whichNumber - 2);
  }
}

//I suspect this is much faster.  Need to write speed check!

function isEvenFast(whichNumber) {
  return !(whichNumber & 1);
}

function runBoth(whichFunc1, whichFunc2) {
  //this should call from an array, duh.
  callFunc(whichFunc1);
  callFunc(whichFunc2);
}

function callFunc() {
  // brute force, save functions calling functions for later
  let t0 = performance.now();
  isEven(10000);
  let t1 = performance.now();
  console.log(`That function call took ${t1 - t0} milliseconds.`);

  let t2 = performance.now();
  isEvenFast(10000);
  let t3 = performance.now();
  console.log(`That function call took ${t3 - t2} milliseconds.`);
  //That function call took 1.4999999984866008 milliseconds.
  //That function call took 0.09999999747378752 milliseconds.
}

function someFunc(info) {
  console.log(`Some funk ${info}`);
}
