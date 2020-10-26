const promise = () => {
  return new Promise ((resolve, reject) => {
    const array = [];

    for (index = 0; index < 10; index += 1) {
      array.push(Math.round(Math.pow(Math.random() * 50, 2)));
    }

    const result = array.reduce((acc, firstElement) => acc + firstElement);
    
    if (result < 8000) {
      reject ('Number less than 8000.')
    }

    const resultVector = [];
    
    resultVector.push(Math.round(result / 2));
    resultVector.push(Math.round(result / 3));
    resultVector.push(Math.round(result / 5));
    resultVector.push(Math.round(result / 10));

    resolve(resultVector);
  });
}

promise()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
