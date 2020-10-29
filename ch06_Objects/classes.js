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
killerRabbit.type = "killer";
killerRabbit.speak("SKRRRREEEEE!");

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

let weirdRabbit = new Rabbit("weird");

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

let newKillerRabbit = new RabbitClass("killer");
let whiteRabbit = new RabbitClass("white");

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
    return "Hiya!";
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

RabbitClass.prototype.teeth = "small";
console.log(newKillerRabbit.teeth);
// small
newKillerRabbit.teeth = "Gory teeth.  Gory, gory teeth.";
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

console.log(`Sammy is ${ages["Sammy"]} years old.`);
//32
console.log("Do we know how old Jugo is?", "Jugo" in ages);
//false
console.log("How about toString's age?", "toString" in ages);
// true
/**
 * Because plain object derive from Object.prototype, toString is indeed
 * there.  This is why we need to be careful about how we create objects.
 * Using plain objects out of the box can cause unexpected results.
 * Null can be used to solve this problem.
 */

console.log(
  "toString in Object.create(null)?",
  "toString" in Object.create(null)
);

/**
 * Object property names must be strings.  If a map is needed whose keys
 * can't easily be converted to strings, an object cannot be used as a map.
 *
 * Fortunately, JS has through of this via a function called Map.
 */

let agesMap = new Map();
agesMap.set("Tony", 55);
agesMap.set("Prima", 21);
agesMap.set("Bobby", 7);

console.log(`Tony is ${agesMap["Tony"]} years old.`);
//32
console.log("Do we know how old Sue is?", "Sue" in agesMap);
//false
console.log("How about toString's age?", "toString" in agesMap);
// false

// The Map objects contains the methods set, get, and has.
// Maps are great for writing a data structure that can quickly
// update and search a large set of values.

// If there is a plain object that needs to be treated as a map, keep in
// mind that Object.keys returns only an objects own keys, and not those
// in the prototype.  As an alternative to "in", used above, one can use
// hasOwnProperty, which ignores the objects prototype.

console.log({ x: 1 }.hasOwnProperty("x"));
// true
console.log({ x: 1 }.hasOwnProperty("toString"));
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
 * It is possible for multiple interfaces to use the same property
 * name for different things.  For example, an interface could be
 * defined in which the toString method turns an object into a piece
 * of yarn.  No object could conform to both the traditional toString()
 * and the new interface.
 *
 * To this end, property usually strings, but can also be "symbols."
 * Symbols are unique, and you can't use the same one twice.
 */

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// false
RabbitClass.prototype[sym] = 55;
console.log(whiteRabbit[sym]);
// 55

/**
 * The string passed to Symbol is included when it's converted to a string
 * and can make it easier to recognize a symbol (like when showing it in
 * the console).  But it has no meaning beyond that.
 *
 * This makes symbols unique and usable as property names and make symbols
 * suitable for defining interfaces that can peacefully live alongside
 * other properties:
 */

const toStringSymbol = Symbol("toString");
//Array.prototype[toStringSymbol] = () => { // Interesting mistake, I thought
// I was being clever converting to an arrow function, but it returned un-
// defined because arrow functions don't bind to 'this!'
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of yellow yarn`;
};

console.log([1, 2].toString());
// 1, 2
console.log([1, 2][toStringSymbol]());
// 2 cm of yellow yarn

/**
 * It is possible to include symbol properties in object expressions and
 * classes by using square brackets around the property name.  This causes
 * the property name to be evaluated, much like the square bracket property
 * access notation, which allows reference to a binding that holds the
 * symbol.
 */

let stringObject = {
  [toStringSymbol]() {
    // square brackets property access notation
    return "a length of jute rope";
  },
};

console.log(stringObject[toStringSymbol]());
// a length of jute rope

/**
 * THE ITERATOR INTERFACE
 *
 * The object given to a for/of loop is expected to be iterable.  This means
 * it has a method named with the Symbol.iterator symbol, which is stored
 * as a property of the Symbol function.  When called, that method should return
 * an object that provides a second interface, iterator.  This has a next method
 * that returns the next result.  That result should be a object with a value
 * property provides the next value, if there is one, and a done property which
 * should be true if there are no more results and false otherwise.
 *
 * Next, value, and done are plain strings, not symbols.  Only Symbol.iterator
 * is an actual symbol.  This can be used directly in the interface:
 */

// This seems to work quite a bit like how generators work?

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
//{ value: 'O', done: false }

console.log(okIterator.next());
//{ value: 'K', done: false }

console.log(okIterator.next());
//{ value: undefined, done: true }

// Creation of an iterable data structure.  The matrix class is a 2d array:
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    // width, height, optional element function
    // I don't understand this
    this.width = width; // how does constructor get a this when it is an arrow function
    this.height = height; // Oh, not the constructor's this but the class' this.
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

// Iterator produces objects with x, y, and value properties
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

// This sets up the Matrix to be iterable.  Done separately for illustrative
// purposes only.  This would normally just be declared in the class
// itself.

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

// Now we can loop the matrix with a for/of.

let matrix = new Matrix(3, 3, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

/**
 * GETTERS, SETTERS, AND STATICS
 * Interfaces often consist mostly of methods, but it's also ok to
 * include properties that hold non-function values.  Map objects
 * have a size property that tell how many keys are stored in them.
 *
 * It's not even necessary for this object to compute and store
 * such a property directly in the instance.  Even properties that
 * are accessed directly may hide a method call.  These methods
 * are called getters, defined by writing "get" in front of the
 * method name in an object expression or class declaration.
 */

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);
console.log(varyingSize.size);

// A similar thing can be done when a property is written to, using
// a setter.
class Temperature {
  // Values only stored in celsius
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  // Allows the creation of a temp using fahrenheit
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// 30
console.log(Temperature.fromFahrenheit(100));

/**
 * The Temperature class reads and writes the temperature in either
 * Celsius or Fahrenheit, but internally it stores only Celsius and
 * automatically converts to and from Celsius in the fahrenheit
 * setter and getter.
 *
 * Sometimes it's necessary to attach properties directly to the
 * constructor, rather than the prototype.  Such methods wont have
 * access to a class instance, but can be used, for example, to
 * provide additional ways to create instances.
 *
 * Inside a class declaration, methods that have static before their
 * names are stored on the constructor.  So the temperature class allows
 * the uses of Temperature.fromFahrenheit(100) to create temperature
 * using degrees fahrenheit.
 */

// INHERITANCE
/**
 * Extending the above matrix example to create a symmetric matrix
 * using inheritance.
 */

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    // Does this mean take x,y and return undefined?
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let symMatrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(symMatrix.get(4, 1));

/**
 * The word 'extends' indicates that this class should be directly
 * based on the default 'Object' prototype but on some other class.
 * This is called the "superclass." The derived class is the "subclass."
 *
 * To initialize a SymmetricMatrix instance, the constructor calls its
 * superclass's constructor through the "super" keyword.  This is necessary
 * because if this new object is to behave (roughly) like a Matrix, it is
 * going to need the instance properties that matrices have.  To ensure
 * the matrix is symmetrical, the constructor wraps the "element" function
 * to swap the coordinates for values below the diagonal.
 *
 * The "set" method uses "super" again, but this time not to call the
 * constructor but to call a specific method from the superclass' set
 * of methods.  We are redefining "set" but we do want to use the
 * original behavior.  Because this.set refers to the *new* set method,
 * calling that wouldn't work.  Inside class methods, "super" provides a way
 * to call methods as they were defined in the superclass.
 */

// THE INSTANCEOF OPERATOR

/**
 * It is occasionally useful to know whether an object was derived from a
 * specific class:
 */

console.log("instanceof:");
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(3) instanceof Matrix);
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
console.log([1] instanceof Array);
