// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }

// Good start, but inflexible!  What if there are more animals?

// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "Pigs");
// }

// Better, but still awkward!  Instead of picking out the repeated part, let's try to
// pick out a single concept:

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 112);

// The function is more generalized!
