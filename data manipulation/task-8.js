export default function cleanSet(set, startString) {
  const ret = [];
  set.forEach((val) => {
    if (startString !== '' && val.startsWith(startString)) {
      ret.push(val.replace(startString, ''));
    }
  });
  return ret.join('-');
}
