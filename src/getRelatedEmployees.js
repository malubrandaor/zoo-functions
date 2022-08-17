const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // parte 1
  return employees.some((mngr) => mngr.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // parte 2
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const emps = employees.filter((mngr) => mngr.managers.includes(managerId));

  return emps.map((trabalhadores) => `${trabalhadores.firstName} ${trabalhadores.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
