const myBoys = ['Emil', 'Tobias', 'Linus'];

const first = myBoys.shift();
myBoys.shift();
myBoys.unshift(first);

console.log(myBoys);
