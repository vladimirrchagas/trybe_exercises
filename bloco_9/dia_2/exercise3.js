const promise = () => {
  return new Promise ((resolve, reject) => {

    const myArray = Array.from({ length: 10}, () => Math.round(Math.pow(Math.random() * 50, 2)));

    const result = myArray.reduce((acc, firstElement) => acc + firstElement);
    
    (result > 8000) ? resolve(result) : reject ();

  });
}

promise()
  .then((resolve) => 
    console.log([2, 3, 5, 10].map(number => Math.round(resolve / number))
    ))
  .catch(() => console.log('NOT OK'));
