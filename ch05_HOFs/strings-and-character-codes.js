require('./scripts.js');

// What script is a piece using?  We can fnd this from
// a character code

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));

// Consider this example, which shows some of the limitations of UTF-16.  Basically, once you use it with
//16-bit characters -- like emojis -- it breaks.

// So obvious operations on JS strings deal only with
// code and not character units.

// Two emoji characters, horse and shoe
let horseShoe = '🐴👟';
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

// A for loop knows what's up though!  It will give real
// characters and not code units.
let roseDragon = '🌹🐉';
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉
