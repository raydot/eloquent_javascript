/**
 * INHERITANCE
 *
 * Let's start with the idea of a symmetrical matrix:
 *
 * 5 7 8 3 1
 * 7 6 3 8 5    Every value of x, y, is the same as
 * 8 3 1 2 7    every value of y, x
 * 3 8 2 9 1
 * 1 5 7 1 2
 *
 * Let's say we need to enforce that the matrix is and
 * remains symmetrical.  We already have a Matrix class
 * from classes.js.
 */

// Creation of an iterable data structure.  The matrix class is a 2d array:
class Matrix {
  // width, height, optional element function
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
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

// Set up the Matrix to be iterable.
Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

/**
 * JavaScript's prototype system makes it possible to create a
 * new class, much like the old class but with new definitions
 * for some of its properties.  The prototype for the new class
 * derives from the old prototype, but adds new definitions.
 *
 * In OOP terms, this is called inheritance.
 */

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x > y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    // redefining set...sorta
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
console.log(matrix.get(2, 3));

/**
 * It is occasionally useful to know whether an object was derived
 * from a specific class.  For this, JavaScript provides a binary
 * operator called instanceOf
 */

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// true
console.log(new SymmetricMatrix(2) instanceof Matrix);
//true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// false
console.log([1] instanceof Array);
// true
