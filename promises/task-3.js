import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const pic = uploadPhoto();
  const user = createUser();
  Promise.all([pic, user]).then((val) => {
    console.log(val[0].body, val[1].firstName, val[1].lastName);
  });
}
