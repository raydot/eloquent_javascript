/*
	Write a function countBs that takes a string as its only argument
	and returns a number that indicates how many uppercase "B" characters
	there are in the string.

	Next write a function called countChar that behaves like countBs except
	it takes a second argument that indicates the character that is
	to be counted.  
*/

function countBs(string) {
	let finalCount = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === "B") {
			finalCount += 1;
		}
	}
	console.log(`There are ${finalCount} B's in the string.`)
}

function countChar(string, whichChar) {
	let finalCount = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === whichChar) {
			finalCount += 1;
		}
	}
	console.log(`There are ${finalCount} ${whichChar}'s in the string.`)
}

countBs("This is a test of the B letter in the Bound String BBB");
countChar("This test is The besT TesT in the wesT!", "T");
