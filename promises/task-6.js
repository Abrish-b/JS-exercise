import signUpUser from './task-4';
import uploadPhoto from './task-5';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const result = await Promise.allSettled([user, photo]).then((res) => res);
  return result;
}

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
