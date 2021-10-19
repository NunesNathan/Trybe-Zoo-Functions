const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

const animalsFunc = (param) => {
  const animal = species.find((animal) => animal.id === param);
  const result = animal.residents.sort((a, b) => b.age - a.age)[0];
  return (Object.values(result));
};

function getOldestFromFirstSpecies(id) {
  let employee = employees.find((employy) => id === employy.id);
  employee = employee.responsibleFor;
  return animalsFunc(employee[0]);
}

module.exports = getOldestFromFirstSpecies;
