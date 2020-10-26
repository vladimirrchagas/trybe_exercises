const promise = () => {
  return new Promise ((resolve, reject) => {

    const myArray = Array.from({ length: 10}, () => Math.round(Math.pow(Math.random() * 50, 2)));

    const result = myArray.reduce((acc, firstElement) => acc + firstElement);
    
    (result > 8000) ? resolve(result) : reject ();

  });
}

promise()
  .then((resolve) => {
    const newArray = [2, 3, 5, 10].map(number => Math.round(resolve / number));
    console.log(newArray);
    return newArray;
  })
  .then(array => {
    const newSum = array.reduce((acc, current) => acc + current, 0);
    console.log(newSum);
  })
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
