export default function updateStudentGradeByCity(arr, city, newGrade) {
  let ret;
  ret = arr.filter((elem) => elem.location === city);
  ret = ret.map((elem) => {
    const grade = newGrade.find((g) => elem.id === g.studentId);
    if (grade !== undefined) {
      return { ...elem, grade: grade.grade };
    }
    return { ...elem, grade: 'N/A' };
  });
  return ret;
}
