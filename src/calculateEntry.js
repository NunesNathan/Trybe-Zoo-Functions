const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((kid) => kid.age < 18).length;
  const adult = entrants.filter((kid) => kid.age >= 18 && kid.age < 50).length;
  const senior = entrants.filter((kid) => kid.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants[0] === undefined) {
    return 0;
  }

  const { prices } = data;
  const result = countEntrants(entrants);
  const childMoney = result.child * prices.child;
  const adultMoney = result.adult * prices.adult;
  const seniorMoney = result.senior * prices.senior;
  const total = childMoney + adultMoney + seniorMoney;
  return total;
}

module.exports = { calculateEntry, countEntrants };
