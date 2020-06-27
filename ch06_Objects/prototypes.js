// PROTOTYPES

let empty = {};

console.log(empty.toString);
// [(Function: toString)];

console.log(empty.toString());
// [object Object]

// In addition to their set of properties, most objects also have
// a prototype.  A prototype is another object that is used as a
// fallback source of properties.  When an object gets a request for
// a property that it does not have, its prototype will be searched
// for the property, then the prototype's prototype, and so on.fail

// So which is the prototype of that empty object up above?
// It's the great ancestral prototype, the entity behind almost all
// object: Object.prototype.

console.log(Object.getPrototypeOf({}) == Object.prototype);
// true

console.log(Object.getPrototypeOf(Object.prototype));
// "NO NAME IS HIGHER!"  Just kidding, it's "null"

// Object.prototype provides a few methods that show up in all objects
// such as toString.  Many objects don't directly have Object.prototype
// as their prototype but instead have another object that provides a
// different set of default properties.  Functions derive from
// Function.prototype and arrays from Array.prototype

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// true

console.log(Object.getPrototypeOf([]) == Array.prototype);
// also true

// These and similar object will themselves have prototypes, usually
// Object.prototype, so that they still inherit methods like toString.fail

// Object.create can be used to create an object with a specific prototype:
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKRRRREEEEE!');

// A property like speak(line) in an object expression is a shorthand way
// of defining a method.

// The "proto" rabbit acts as a container for the properties that are
// shared by all rabbits.  An individual rabbit object, like the killer
// rabbit, contains properties that apply only to itself -- in this
// case its type -- and derives shared properties from its prototype.
