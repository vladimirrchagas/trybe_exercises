const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilities1 = object => {
  const arraySkills = Object.keys(object);
  for (i in arraySkills) {
    console.log(`${arraySkills[i]}, Nível: ${object[arraySkills[i]]}`);
  }
}

habilities1(student1);

habilities1(student2);
