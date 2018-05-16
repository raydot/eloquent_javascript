//The Lycanthrope's Log
//let journal = [];

// Using a fuller dataset...
require('./journal.js');

// function to add things to the journal
function addEntry(events, squirrel) {
	JOURNAL.push({events, squirrel});
}


// let's go ahead and add those things
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// This is the function that computes the phi coefficient from the array.  (see the book for the math formula)
function phi(table) {
	return (table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt(	(table[2] + table[3]) *
					(table[0] + table[1]) *
					(table[1] + table[3]) *
					(table[0] + table[2]));

}

//console.log(phi([76, 9, 4, 1]));