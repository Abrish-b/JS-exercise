import guardrail from './task-9.js';
import divideFunction from './task-8.js';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
