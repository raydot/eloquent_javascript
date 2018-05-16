
//This function will add together all of the numbers you pass it!
function infiniteAdder(...numbers) {
	let result = 0;
	for (let number of numbers) {
		result += number;
	}
	console.log(result);
}

infiniteAdder(10, 20, 30);