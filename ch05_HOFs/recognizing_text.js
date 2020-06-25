//ES6 doesn't support import yet!
require('./scripts.js');

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

// We have a characterScript function and a way to correctly loop over characters.
// The next step is to count the characters that belong to each script.

/**
 *
 * @param {*} items
 * @param {*} groupName
 *
 * The countBy function expects a collection (anything that can be looped over)
 * and a function that computes a group name for a given element.  It returns
 * an array of objects, each of which names a group and tells you the number of
 * elements that were found within that group.
 *
 * findIndex() returns the first item for which the given function returns true.
 */
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
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

// Returns : [ { name: false, count: 2 }, { name: true, count: 3 } ]

// Using countBy(), we can write the function that tells us which scripts are used
// in a piece of text:

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter(({ name }) => name != 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
}

console.log(textScripts('英国的狗说"woofdoggie", 俄罗斯的狗说"тявтявтявтяв"'));

// Returns: 33% Han, 30% Latin, 36% Cyrillic...COOL!

/**
 * The function first counts the characters by name, using characterScript to assign
 * them a name and falling back to "none" for characters that aren't a part of any
 * script.
 */
