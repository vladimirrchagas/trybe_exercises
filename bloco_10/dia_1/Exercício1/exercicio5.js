const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const objConsolidated = {
  'object1': obj1,
  'object2': obj2,
  'object3': obj3,
}

module.exports = objConsolidated;
