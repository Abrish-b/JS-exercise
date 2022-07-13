export default function createIteratorObject(report) {
  const Arr = Object.values(report);
  const newArr = Object.values(Arr[0]);
  //   Arr.forEach((elem) => {
  //     newArr.push(Object.values(elem));
  //   });
  return Object.values(newArr).flat();
}
