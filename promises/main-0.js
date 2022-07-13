import getResponseFromAPI from "./task-0.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
