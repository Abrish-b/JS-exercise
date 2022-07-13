import listOfStudents from "./task-9.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
