import hasValuesFromArray from "./task-7.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 2,3]));
