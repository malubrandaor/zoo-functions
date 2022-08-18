const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // if e reduce
  if (!animal) {
    return species.reduce((spe, quantidade) =>
      Object.assign(spe, { [quantidade.name]: quantidade.residents.length }), {});
  }
  const lista = species.find(
    (quantidade) => quantidade.name === animal.specie,
  ).residents;

  if (!animal.sex) {
    return lista.length;
  }
  return lista.filter((todos) => todos.sex === animal.sex).length;
}

module.exports = countAnimals;
