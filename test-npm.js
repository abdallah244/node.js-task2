const _ = require('lodash');
const colors = require('colors');

// تجربة lodash
const numbers = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, n => n * 2);
console.log('Doubled Numbers:'.green, doubled);

// تجربة colors
console.log('Hello Book Store!'.rainbow);
