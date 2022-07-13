export default function uploadPhoto(filename) {
  const prom = new Promise((resolve) => {
    resolve(`${filename} cannot be processed`);
  });
  return prom;
}
