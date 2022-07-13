const lang = ['english', 'russian', 'amharic', 'french', 'spanish', 'portugiese'];
const tingz = {
  'lua dipa': 'pretty', Doja: 'freaky thick', sweety: 'thick and sassy', 8: true,
};
const names = ['lua dipa', 'Doja', 'sweety'];

const example = new Map([
  [1, lang[0]],
  [2, lang[1]],
  [3, lang[2]],
  [4, lang[3]],
  [5, lang[4]],
]);

example.set(7, 'hindu');

console.log(example.get(2));
console.log(example.size);
console.log(example.delete(7));
console.log(example.has(10));

example.forEach((i, j, k) => {
  console.log(i, j, k);
});

console.log(example.entries());
console.log(example.keys());
console.log(example.values());

for (const x in lang) {
  if (x !== undefined) console.log(x);
}

for (const name in tingz) {
  if (name !== undefined) console.log(name, 'is', tingz[name]);
}

names.forEach((i, j, k) => {
  console.log(i, j, k);
  // console.log(tingz[i]);
});
