const myprom = new Promise((resolve, reject) => {
  try {
    setTimeout(resolve('okay u took ur time!'), 3000);
  } catch (e) {
    reject(`rejected with ${e}`);
  }
});

myprom.then((val) => {
  console.log(val);
}, (err) => {
  console.error(err);
});
