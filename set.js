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

