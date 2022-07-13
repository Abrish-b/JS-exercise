import Pricing from './task-4.js';
import Currency from './task-3.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());