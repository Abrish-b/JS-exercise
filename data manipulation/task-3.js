export default function getStudentIdsSum(arr) {
  let arrId;
  if (Array.isArray(arr)) arrId = arr.map((elem) => elem.id);
  return arrId.reduce((total, elem) => total + elem);
}
