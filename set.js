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

let setC = new Set([1,2,3]);

// set filtering
console.log('setC : ',setC);
let filterA_Set = new Set([...setC].map(x => 'filter_'+x ));
console.log('filterA_Set : ', filterA_Set);

let filterB_Set = new Set([...setC].filter(x => (x % 2) == 0));
console.log('filterB_Set : ', filterB_Set);