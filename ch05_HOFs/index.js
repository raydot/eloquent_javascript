require('./scripts.js')

// FILTER
function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log('\nLiving scripts:');
console.log(filter(SCRIPTS, script => script.living));

console.log('\nTop to bottom scripts:');
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

// MAP
function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

// REDUCE
// basic reduce
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log('\nSimple reduce:');
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// If the array contains at least one element you don't need a start value
console.log(reduce([1, 2, 3, 4], (a, b) => a + b));

// Use reduce to find the script with the most characters:
console.log('\nSlightly more complicated reduce: ');
function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
}));
