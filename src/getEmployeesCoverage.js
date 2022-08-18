const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// obtive ajuda para o desenvolvimento deste codigo 


function Empregados(emp) {
  const empID = emp.id;
  const nComp = `${emp.firstName} ${emp.lastName}`;
  const nAnimal = emp.responsibleFor.map((anilID) => species
    .find((animal) => animal.id === aniID).name);
  const localizacao = nAnimal.map((nome) => species
    .find((animal) => animal.name === nome).location);

  return {
    id: empID,
    fullName: nComp,
    species: nAnimal,
    locations: localizacao,
  };
}

function getEmployeesCoverage(parametro) {
  if (!p) {
    return employees.map((emp) => Empregados(emp));
  }
  const { name, id } = p;
  let resultado;
  if (name) {
    resultado = (objeto) => objeto.firstName === name || objeto.lastName === name;
  } if (id) {
    resultado = (objeto) => objeto.id === id;
  }
  const emp = employees.find(resultado);
  if (!emp) {
    throw new Error('Informações inválidas');
  }
  return Empregados(employee);
}

module.exports = getEmployeesCoverage;
