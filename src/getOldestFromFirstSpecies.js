const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
// Carol Lima 24 B e Isabela Costa 24 A me ajudaram nesta construção
function getOldestFromFirstSpecies(id) {
  const aniID = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];

  const ordem = species.find((animal) => animal.id === aniID).residents
    .reduce((oldest, youngOne) => {
      if (youngOne.age > oldest.age) {
        return youngOne;
      }
      return oldest;
    });
  return [ordem.name, ordem.sex, ordem.age];
}

module.exports = getOldestFromFirstSpecies;
