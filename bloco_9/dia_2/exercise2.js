const promise = () => {
  return new Promise ((resolve, reject) => {
    const array = [];

    for (index = 0; index < 10; index += 1) {
      array.push(Math.pow(Math.random() * 50, 2));
    }

    const result = array.reduce((acc, firstElement) => acc + firstElement);
    
    if (result < 8000) {
      reject ('Number less than 8000.')
    }

    resolve(result);
  });
}

promise()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
