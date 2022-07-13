export default function returnHowManyArguments(...args) {
  let amount = 0;
  for (const arg in args) {
    if (arg !== undefined) amount += 1;
  }
  return amount;
}
