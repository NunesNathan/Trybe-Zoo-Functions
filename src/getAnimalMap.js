const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const { species } = data;
  const solveCallback = (shortLocate) => species
    .filter((specie) => specie.location === shortLocate).map((index) => index.name);
  const NE = solveCallback('NE');
  const NW = solveCallback('NW');
  const SE = solveCallback('SE');
  const SW = solveCallback('SW');
  const key = { NE, NW, SE, SW };

  return key;
}

getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
