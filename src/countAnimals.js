const data = require('../data/zoo_data');

const { species } = data;

const voidParam = () => {
  const myObj = {};
  species.forEach((specie) => { myObj[`${specie.name}`] = Number(`${specie.residents.length}`); });
  return myObj;
};

const withSpecie = (param) => {
  const specime = species.find((specier) => specier.name === param.specie);
  return specime.residents;
};

const withSexToo = (param) => {
  let result = withSpecie(param);
  result = result.filter((findSex) => findSex.sex === param.sex);
  return result;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return voidParam();
  }
  if (animal.sex !== undefined) {
    return withSexToo(animal).length;
  }
  return withSpecie(animal).length;
}

module.exports = countAnimals;
