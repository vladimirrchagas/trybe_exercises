const promise = () => {
  return new Promise ((resolve, reject) => {

    const myArray = Array.from({ length: 10}, () => Math.round(Math.pow(Math.random() * 50, 2)));

    const result = myArray.reduce((acc, firstElement) => acc + firstElement);
    
    (result > 8000) ? resolve() : reject ();

  });
}

promise()
  .then(() => console.log('OK DEMAIS DA CONTA SÔ'))
  .catch(() => console.log('NOT OK'));
