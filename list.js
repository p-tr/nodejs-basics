// Array

let b = [ 0, 1, 2, 3, 4, 5 ];

// copie par valeur (premier niveau de profondeur)
// ne marche pas si les items sont eux-même des objets (copie des références)
let c = [ ...b ];

c[2] = 100;

console.log(b); // -> avant console.log(c)
console.log(c); // -> après console.log(b)

// Assignation déstructurée
let collection = [ 'a', 'b', 'c', 'd', 0, 1, 2, 3 ];
let [ ca, cb, cc, cd ] = collection;

let obj = { ca, cb, cc, cd };

let { obja, objb } = obj;

console.log(obj);

// Map

let m = new Map();

m.set('toto', 'titi');
console.log(m.get('toto'));
console.log(m.get('titi'));
//m.has(key) => demande si la clé existe
console.log(m);

// Set

let s = new Set();
s.add('TOTO');
s.add('TITI');

//
