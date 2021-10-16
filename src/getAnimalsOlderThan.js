const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.some((race) => (race.name === animal)
    && (race.residents.every((eachAnimal) => eachAnimal.age >= age)));
}

module.exports = getAnimalsOlderThan;
