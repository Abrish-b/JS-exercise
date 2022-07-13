import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const output = {};
  const upload = uploadPhoto();
  const user = createUser();
  const result = await Promise.allSettled([upload, user]);
  if (result[0].status.includes('fulfilled') && result[1].status.includes('fulfilled')) {
    output.photo = result[1].value;
    output.user = result[0].value;
  } else {
    output.photo = null;
    output.user = null;
  }
  return output;
}
