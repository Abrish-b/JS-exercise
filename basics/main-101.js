import createEmployeesObject from "./task-11.js";
import createReportObject from './task-12.js';
import createIteratorObject from './task100.js';
import iterateThroughObject from './task101.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));