export default function iterateThroughObject(reportWithIterator) {
  let out = '';
  reportWithIterator.forEach((element, i) => {
    if (i === (reportWithIterator.length - 1)) out += `${element}`;
    else out += `${element} | `;
  });
  return out;
}
