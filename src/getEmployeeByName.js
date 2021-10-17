const data = require('../data/zoo_data');
function getEmployeeByName(employeeName) {
  const { employees } = data;
  const result = employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
  if (result === undefined) {
    return {};
  }
  return result;
}

module.exports = getEmployeeByName;
