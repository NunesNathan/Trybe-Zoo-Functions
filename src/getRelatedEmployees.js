const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const result = [];
    employees.filter((sameOfId) => sameOfId.managers.includes(managerId))
      .forEach((each) => result.push(`${each.firstName} ${each.lastName}`));
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
