/**
 * METHODS
 *
 * Methods are nothing more than properties that hold function values.
 * This is a simple method:
 */

let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says: '${line}'`);
};
rabbit.speak('It is alive!');

rabbit.eat = (food) => {
  console.log(`I love to eat yummy ${food}!`);
};
rabbit.eat('pizza');

/**
 * THE DREADED THIS:
 * Usually a method needs to do something with the object
 * it was called on.  When a function is called as a method
 * -- looked up as a property and immediately called, as in
 * object.method() -- the binding called this in its body
 * automatically points at the object it was called on.
 */

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: 'white', speak };
let hungryRabbit = { type: 'hungry', speak };

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak('I sure could use a carrot right now...');

// Note that these rabbits have no relation to the rabbits up above.
// hungryRabbit.eat() will fail bigly.

// This can be thought of as an extra parameter that's passed
// in a different way.  To pass it explicitly, use a function's
// 'call()' method, which takes the this value as its first
// argument and treats further arguments as normal parameters.
speak.call(hungryRabbit, 'Burp!');

// Since each function has its own this binding, the value of which
// depends on the way it is called, it's not possible to refer to
// the "this" of the wrapping scope in a regular function defined
// with the "function" keyword.

// Arrow functions do not bind their own "this", but can see the
// "this" binding of the scope around them.  Thus:

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// [0, 0.4, 0.6];

// If the argument had been passed to map using the "function"
// keyword, the code wouldn't work.
