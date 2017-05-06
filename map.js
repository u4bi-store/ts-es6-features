let map = new Map();

// basic
map.set('foo', 123); // key : foo , value : 123
console.log(map.get('foo')); // getter foo

console.log(map.has('foo')); // is foo? true

map.delete('foo'); // delete foo

console.log(map.has('foo')); // is foo? false

map.set('a', true);
map.set('b', false);

console.log(map.size); // map size of 2

map.clear(); // clear map

console.log(map.size); // size 0

let goodMap = new Map([
    ['a', 'abc'],
    ['b', 1],
    ['c', 2],
    ['d', 3],
    ['e', 4.32],
    ['f', true]
]);

console.log(goodMap); // goodMap array setup

let godMap = new Map()
    .set('af', 1)
    .set('bf', 3)
    .set('cf', 23.2)
    .set('df', true);

console.log(godMap); // chainable map godMap array setup

let soulMap = new Map();

const GOOD_KEY = {};
const LOAD_KEY = {};
const GOD = {};

soulMap.set(GOOD_KEY, 'hello');
soulMap.set(LOAD_KEY, 'world');
soulMap.set(GOD, godMap);

console.log(soulMap.get(GOOD_KEY), soulMap.get(LOAD_KEY), soulMap.get(GOD));

console.log(soulMap);