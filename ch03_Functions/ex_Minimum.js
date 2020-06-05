/*	"Minimum"
	Write a function min that takes two arguments and returns their minimum.
*/

// function retMin(thingOne, thingTwo) {
//   if (thingOne < thingTwo) {
//     return thingOne;
//   }

//   return thingTwo;
// }

// Not sure when this was originally written but I can certainly
// improve
const retMin = (thingOne, thingTwo) => {
  return thingOne < thingTwo ? thingOne : thingTwo;
};

console.log(retMin(0, 10));
console.log(retMin(0, -10));
