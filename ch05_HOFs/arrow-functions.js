// Quick review of arrow functions, for deep understanding.
// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

// ==> is the "goesto" operator in js!  Not really though.
function countdown(n) {
  while (
    n-- > 0 // "n goes to zero"
  ) {
    console.log(n);
  }
  console.log('BLASTOFF!');
}

countdown(10);

/**
 * For a simple function with one argument:
 * Identifier => Expression
 */

// ES5
var selected5 = allJobs.filter(function (job) {
  return job.isSelected();
});

// ES6
let selected6 = allJobs.filter((job) => job.isSelected());

//  Function with multiple arguments:
// ES5
var total5 = values.reduce(function (a, b) {
  return a + b;
}, 0); // 0 is default value

// ES6
let total6 = values.reduce((a, b) => a + b, 0);

// THAT OLD JQUERY CALLBACK in ES5:
$('#confetti-btn').click(function (event) {
  playTrumpet();
  fireConfettiCannon();
});

// AND IN ES6
$('#confetti-btn').click((event) => {
  playTrumpet();
  fireConfettiCannon();
});

// An arrow function with a block body does not automatically
// return a value.  Use return for that.fail

// If using arrow functions to create plain objects, always
// wrap the object in parentheses.  This is because empty
// object {} and empty block {} look exactly the same!

let chewToys = puppies.map((puppy) => {}); //
let chewToys2 = puppies.map((puppy) => ({}));

// How "this" comes into it:
// In ES6, this mostly goes away if you follow these rules:
//  *   Use non arrow functions for methods that will be called
//      using the object.method() syntax.  Those will receive 
//      meaningful this values from their caller.
//  *   Use arrow functions for everything else.  Example:

// ES6
{
    // ...
    addAll: function addAll(pieces) {
        _.each(pieces, piece => this.add(piece))
    }
    // ...
}

// addAll here will receive this from its caller.  The inner
// function is an arrow function, so it inherits this from 
// the enclosing scope.  Also, with method syntax:

{
    // ...
    addAll(pieces) {
        _.each(pieces, piece => this.add(piece))
    }
    // ...
}

// Then this article gets into some deep stuff about lambda 
// functions, because with arrow functions the λ-calculus
// is in JavaScript.  Here is an example using Alonzo Church's 
// lambda notation:

fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// and in Javascript:
var fix = f =>  (x => f(v => x(x)(v)))
                (x => f(v => x(x)(v)))

// More here!  https://lucasfcosta.com/2018/07/29/An-Introduction-to-Lambda-Calculus-Part-1.html