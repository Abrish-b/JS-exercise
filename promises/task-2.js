export default function handleResponseFromAPI(promise) {
  promise.then((res) => {
    console.log('Got a response from the API');
    return res;
  }, (err) => {
    console.log('Got a response from the API');
    return err;
  });
}
