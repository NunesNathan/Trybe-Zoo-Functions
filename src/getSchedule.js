const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const arrayAnimals = (param) => {
  const arrA = [];
  species.forEach((specie) => {
    if (specie.availability.includes(param)) {
      arrA.push(specie.name);
    }
  });
  return arrA;
};

const makeObj = (param) => {
  const myobj = {};
  (Object.entries(hours).forEach((hour) => {
    if (param === 'Monday') {
      myobj.officeHour = 'CLOSED';
      myobj.exhibition = 'The zoo will be closed!';
    } else if (hour[0] === param) {
      myobj.officeHour = `Open from ${hour[1].open}am until ${hour[1].close}pm`;
      myobj.exhibition = arrayAnimals(param);
    }
  }));
  return myobj;
};

const hoursOn = () => {
  const result = (Object.entries(hours).map((day) => day[0])
    .map((nday) => ({ nday }))).reduce((acc, obj) => {
    acc[obj.nday] = makeObj(obj.nday);
    return acc;
  }, {});
  return result;
};

const searchAnimals = () => {
  const result = [];
  species.forEach((animal) => result.push(animal.name));
  return result;
};

const week = hoursOn();
const animalsList = searchAnimals();

function getSchedule(scheduleTarget) {
  let result = {};
  if (Object.entries(week).find((day) => day[0] === scheduleTarget)) {
    result[`${scheduleTarget}`] = week[`${scheduleTarget}`];
    return result;
  } if (animalsList.includes(scheduleTarget)) {
    species.forEach((animal) => {
      if (animal.name === scheduleTarget) {
        result = animal.availability;
      }
    });
    return result;
  }
  return week;
}

module.exports = getSchedule;
