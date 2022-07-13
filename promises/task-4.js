export default function signUpUser(firstName, lastName) {
  const prom = new Promise((resolve, reject) => {
    try {
      resolve({ firstName, lastName });
    } catch (e) {
      reject(e);
    }
  });
  return prom;
}
