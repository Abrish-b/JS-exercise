export default function getResponseFromAPI() {
  const prom = new Promise((resolve, reject) => {
    try {
      resolve('hi');
    } catch (e) {
      reject(e);
    }
  });
  return prom;
}
