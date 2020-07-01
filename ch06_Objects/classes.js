/**
 * CLASSES
 *
 * JavaScript's prototype system can be interpreted as a somewhat
 * informal take on classes.fail
 *
 * Prototypes are useful for defining properties for which all
 * instances of a class share the same value, such as methods.
 * Properties that differ per instance, such as the rabbits'
 * type property, need to be stored directly in the objects
 * themselves.
 *
 * To create an instance of a given class, the object has to der-
 * ive from the proper prototype but is also has to have, itself,
 * the properties that instances of this class are supposed to
 * have.  this is what a constructor function does.
 */

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// Rabbit prototypes
// Object.create can be used to create an object with a specific prototype:
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKRRRREEEEE!');

/**
 *  Javascript provides a way to make defining this type of function
 * easier.  If new is put in front of a function call, the function is
 * treated as a constructor.  This means an object with the right
 * prototype is automatically created, bound to this in the function,
 * and returned at the end of the function
 */

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit('weird');

// Constructors (all functions) automatically get a property named
// prototype, which holds a plan, empty object that derives from
// Object.prototype.  This can be overridden and/or properties
// added.

/**
 * By convention, names of constructors are capitalized so they can be
 * distinguished from other functions.fail
 *
 * There is a distinction between the way a prototype is associated with
 * its constructor through its prototype property and the way objects have
 * a prototype (found through Object.getPrototypeOf).  The actual proto-
 * type of a construction is Function.prototype since constructors are
 * functions.  Its prototype property holds the prototype used for instances
 * created through it.  Example:
 */

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
// true
console.log(Object.getPrototypeOf(makeRabbit) == Function.prototype);
// true
console.log(Object.getPrototypeOf(killerRabbit));
// { speak: [Function: speak]}

/**
 * CLASS NOTATION
 *
 * JS classes are constructor functions with a prototype property.
 * All of the above in one class:
 */

class RabbitClass {
  // class declaration
  constructor(type) {
    // constructor, bound to "RabbitClass"
    this.type = type;
  }
  speak(line) {
    // any number of methods
    console.log(`The ${this.type} rabbit says '${line}`);
  }
}

let newKillerRabbit = new RabbitClass('killer');
let whiteRabbit = new RabbitClass('white');

/**
 * Right now, classes only allow methods to be added to the prototype,
 * but non-function values can be created by directly manipulating
 * the prototype after defining the class.
 *
 * Like function, class can be used in both statements and expressions.
 * When used as an expression it just produces the constructor as a
 * value.  The class name can be omitted in a class expression.
 */

let object = new (class {
  getWord() {
    return 'Hiya!';
  }
})();
console.log(object.getWord());

/**
 * OVERRIDING DERIVED PROPERTIES
 *
 * When a property is added to an object, whether or not it is present
 * in the prototype the property is added to the object itself.  If there
 * already was a property with the same name in the property, this will no
 * longer affect the object.
 */

RabbitClass.prototype.teeth = 'small';
console.log(newKillerRabbit.teeth);
// small
newKillerRabbit.teeth = 'Gory teeth.  Gory, gory teeth.';
console.log(newKillerRabbit.teeth);
//'Gory teeth.  Gory, gory teeth.';
console.log(whiteRabbit.teeth);
// small
console.log(RabbitClass.prototype.teeth);
// small

/**
 * Overriding properties that exist in a prototype can be a useful thing to do,
 * as it allows for a generic prototype to take on more specific functions,
 * as needed.  For instance
 */

console.log(Array.prototype.toString == Object.prototype.toString);
// false
console.log([1, 2].toString());
// 1, 2

// Because of this difference, the object toString doesn't know about arrays,
// so prints "object" and the name of the type in square brackets:
console.log(Object.prototype.toString.call([1, 2]));
// [object Array]

/**
 * MAP (NOUN, NOT VERB)
 *
 * A map is also a name for a data structure with key/value pairs:
 */

let ages = {
  Tommy: 17,
  Lulu: 99,
  Sammy: 32,
};

console.log(`Sammy is ${ages['Sammy']} years old.`);
//32
console.log('Do we know how old Jugo is?', 'Jugo' in ages);
//false
console.log("How about toString's age?", 'toString' in ages);
// true
/**
 * Because plain object derive from Object.prototype, toString is indeed
 * there.  This is why we need to be careful about how we create objects.
 * Using plain objects out of the box can cause unexpected results.
 * Null can be used to solve this problem.
 */

console.log(
  'toString in Object.create(null)?',
  'toString' in Object.create(null)
);

/**
 * Object property names must be strings.  If a map is needed whose keys
 * can't easily be converted to strings, an object cannot be used as a map.
 *
 * Fortunately, JS has through of this via a function called Map.
 */

let agesMap = new Map();
agesMap.set('Tony', 55);
agesMap.set('Prima', 21);
agesMap.set('Bobby', 7);

console.log(`Tony is ${agesMap['Tony']} years old.`);
//32
console.log('Do we know how old Sue is?', 'Sue' in agesMap);
//false
console.log("How about toString's age?", 'toString' in agesMap);
// false

// The Map objects contains the methods set, get, and has.
// Maps are great for writing a data structure that can quickly
// update and search a large set of values.

// If there is a plain object that needs to be treated as a map, keep in
// mind that Object.keys returns only an objects own keys, and not those
// in the prototype.  As an alternative to "in", used above, one can use
// hasOwnProperty, which ignores the objects prototype.

console.log({ x: 1 }.hasOwnProperty('x'));
// true
console.log({ x: 1 }.hasOwnProperty('toString'));
// false

/**
 * POLYMORPHISM
 *
 * When the String function is called on an object, it will call the
 * toString method on that object to try to create a meaningful
 * string from it.  As mentioned about, some of the standard proto-
 * types define their own versions of toString in order to return
 * more than the not so useful "[object Object]."  This can also be done
 * as a custom job.
 */

RabbitClass.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

console.log(String(whiteRabbit));
// a white rabbit

/**
 * This is a powerful idea.  When a piece of code is written to work with
 * objects that have a certain interface -- in this case a toString method --
 * any kind of object that just happens to support this interface can be plugged
 * into the code and it will just work.
 *
 * This is called "polymorphism."  Polymorphic code can work with values of
 * different shapes, so long as they support the interface it expects.
 *
 * For instance, a for/of loop can loop over various data structures.
 *
 * Custom code can be added that does this same thing using symbols.
 */

/**
 * SYMBOLS
 *
 */
