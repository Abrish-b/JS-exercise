export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx in array) {
    if (array[idx] !== undefined) newArr[idx] = appendString + array[idx];
  }

  return newArr;
}
