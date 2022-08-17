const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (membroStaff) =>
      membroStaff.firstName === employeeName ||
      membroStaff.lastName === employeeName
  );
}

module.exports = getEmployeeByName;
