const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
 */
const allLessons = Object.assign({}, {'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});

/* Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 

console.log(createReport(allLessons, 'Maria Clara'))
{
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} 

*/

const createReport = (object, professor) => {
  const newObject = {
    professor: professor,
    aulas: [],
    estudantes: 0,
  }
  const objectKeys = Object.keys(object);
  for (let index = 0; index < objectKeys.length; index += 1) {
    if (object[objectKeys[index]].professor === professor){
      newObject.aulas.push(object[objectKeys[index]].materia);
      newObject.estudantes = newObject.estudantes + object[objectKeys[index]].numeroEstudantes;
    }
  }
  return newObject;
}

console.log(createReport(allLessons, 'Maria Clara'))
