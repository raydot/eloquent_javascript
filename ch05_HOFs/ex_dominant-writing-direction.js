/**
 * Dominant Writing Direction
 * Write a function that computes the dominant writing direction
 * in a string of text.  Remember that each script object has a
 * direction property that can be "ltr," "rtl," or "ttb."
 *
 * The dominant direction is the direction of a majority of the
 * characters that have a script associated with them.  The
 * characterScript and countBy functions defined earlier in the
 * chapter are probably useful here.
 */

const dominantDirection = (text) => {
  // Your code here
};

console.log(dominantDirection('Hello!'));
// ltr

// "masa' alkhayr", Arabic for "Good evening."
console.log(dominantDirection('Hey, مساء الخير'));
// rtl
