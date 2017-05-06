let map = new Map();

// basic
map.set('foo', 123); // key : foo , value : 123
console.log(map.get('foo')); // getter foo

console.log(map.has('foo')); // is foo? true

map.delete('foo'); // delete foo

console.log(map.has('foo')); // is foo? false