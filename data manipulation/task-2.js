export default function getStudentsByLocation(arr, city) {
  let ret;
  if (Array.isArray(arr)) ret = arr.filter((elem) => elem.location === city);
  return ret;
}
