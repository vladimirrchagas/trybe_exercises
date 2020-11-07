const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise ((resolve, reject) => {
    const arrayAnimalName = Animals.filter((element) => element.name === name)
    if (arrayAnimalName.length !== 0) {
      return resolve(arrayAnimalName);
    }
    return reject("Nenhum animal com esse nome!");
  })
);

const getAnimalByName =  async (name) => {
  return await findAnimalByName(name).then(name => name[0]);
}

const findAnimalByAge = (age) => (
  new Promise ((resolve, reject) => {
    const arrayAnimalAge = Animals.filter((element) => element.age === age)
    if (arrayAnimalAge.length !== 0) {
      return resolve(arrayAnimalAge);
    }
    return reject("Nenhum animal com essa idade!");
  })
);

const getAnimalByAge =  async (age) => {
  return await findAnimalByAge(age).then(age => age[0]);
}

module.exports = { getAnimalByName, getAnimalByAge };