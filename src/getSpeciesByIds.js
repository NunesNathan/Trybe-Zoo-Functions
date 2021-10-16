const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((race) => ids.some((id) => race.id === id));
}

module.exports = getSpeciesByIds;
