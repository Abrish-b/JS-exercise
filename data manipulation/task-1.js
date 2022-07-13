export default function getListStudentIds(arr) {
  let arrIndex = [];
  if (Array.isArray(arr)) arrIndex = arr.map((elem) => elem.id);
  //   Array.from(arr).forEach((element) => {
  //     if (element.id !== undefined) arrIndex.push(element.id);
  //   });
  return arrIndex;
}
