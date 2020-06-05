// The Lycanthrope's Log
// let journal = [];

// Using a fuller dataset...
require('./journal.js');

// function to add things to the journal
function addEntry(events, squirrel) {
  JOURNAL.push({ events, squirrel });
}

// let's go ahead and add those things
addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(
  [
    'work',
    'ice cream',
    'cauliflower',
    'lasagna',
    'touched tree',
    'brushed teeth',
  ],
  false
);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

// This is the function that computes the phi coefficient from the array.  (see the book for the math formula)
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(`phi:`, phi([76, 9, 4, 1]));

/**  To extract a two-by-two table for a specific event from
 * 	the journal, we must loop over all the entries and tally
 * 	how many times the event occurs in relation to squirrel
 * 	transformations.
 */

function tableFor(event, journal) {
  const table = [0, 0, 0, 0];

  // old for-loopy way
  //   for (let i = 0; i < journal.length; i++) {
  //     let entry = journal[i],
  //       index = 0;
  //     if (entry.events.includes(event)) index += 1;
  //     if (entry.squirrel) index += 2;
  //     table[index] += 1;
  //   } // for

  // new way:
  for (let entry of journal) {
    index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

// we need to compute a correlation for every type of event that occurs in the data set.  To do that, we first need to find every type of event.

// by going over all the events and adding those that aren't already in there to the events array, the function collects every type of event.

function journalEvents(journal) {
  // O(N^2)!  Can we do better?
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events)
      if (!events.includes(event)) {
        events.push(event);
      }
  }
  return events;
}

// console.log(tableFor("pizza", JOURNAL));
// console.log(journalEvents(JOURNAL));

// Using all of the above we can see all of the correlations.
for (let event of journalEvents(JOURNAL)) {
  //console.log(event + ":", phi(tableFor(event, JOURNAL)));
  // Let's do some filtering:
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ':', correlation);
  }
}

// This seems to indicate the strongest correlations are eating peanuts and brushing teeth.
// Let's filter some more:
for (let entry of JOURNAL) {
  if (
    entry.events.includes('peanuts') &&
    !entry.events.includes('brushed teeth')
  ) {
    entry.events.push('peanut teeth');
  }
}

console.log(`correlation:`, phi(tableFor('peanut teeth', JOURNAL)));
