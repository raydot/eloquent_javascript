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

// Import scripts
require('./scripts.js');

const dominantDirection = (text) => {
  let scripts = countBy(text, (char) => {
    if (!['!', ',', ' '].includes(char)) {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : 'none';
    }
  }).filter(({ direction }) => direction != 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';
  //console.log(scripts);
  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
};

console.log(dominantDirection('Hello!'));
// ltr

// "masa' alkhayr", Arabic for "Good evening."
console.log(dominantDirection('Hey, مساء الخير'));
// rtl

// Imported functions characterScript() and countBy()
// from earlier in the chapter:

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

function countBy(items, groupName) {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  //console.log(counts);
  return counts;
}

// This also looks useful!
//let rtlScripts = SCRIPTS.filter((s) => s.direction == 'rtl');
//console.log(map(rtlScripts, (s) => s.name));

// const array = ["a", "b", "c"]
// const checkItem = (element) => element

// console.log("foo" array.some(checkItem))
//console.log(characterScript(103).direction);
