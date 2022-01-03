import {Add} from './modules/add.js';
import {Sub} from './modules/sub.js';
import {Multiply} from './modules/multiply.js';
import {Divide} from './modules/divide.js';

console.log("Sum is: " + new Add(10,10).add());
console.log("Dif is: " + new Sub(10,10).sub());
console.log("Pro is: " + new Multiply(10,10).multiply());
console.log("Div is: " + new Divide(10,10).divide());