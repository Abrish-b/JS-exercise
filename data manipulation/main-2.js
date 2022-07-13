import getListStudents from "./task-0.js";
import getStudentsByLocation from "./task-2.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

const num = [175, 50, 25];

console.log(num.reduce((total,elem) => total - elem ));