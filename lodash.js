const _ = require('lodash');

// map
const arr1 = [ 0, 1, 2, 3, 4 ];
const arr2 = _.map(arr1, (x) => { return x*x; });

console.log(arr1);
console.log(arr2);
