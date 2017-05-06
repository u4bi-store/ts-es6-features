let set = new Set();

set.add('red');

console.log(set);
console.log(set.has('red'));

set.delete('red');
console.log(set);
console.log(set.has('red'));


// set setup
let setA = new Set(['red', 'green', 'blue']);
let setB = new Set().add('red').add('green').add('blue');
console.log(setA, setB);

// set iterating
for(let x of setB) console.log(x);
// set spread
console.log(...setB);