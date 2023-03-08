const data = require('../data/zoo_data');

function mapeamento() {
  const localidades = { NE: [], NW: [], SE: [], SW: [] };
  return data.species.reduce((a, animal) => {
    a[animal.location].push(animal.name);
    return a;
  }, localidades);
}

function animais(especie, random, sex) {
  const { residents } = data.species.find((specie) => specie.name === animal);

  if (random && sex) {
    return residents.filter((habitante) => habitante.sex === sex)
      .map((habitante) => habitante.name).sort();
  }
  if (sex) {
    return residents.filter((habitante) => habitante.sex === sex)
      .map((habitante) => habitante.name);
  }
  if (random) {
    return residents.map((habitante) => habitante.name).sort();
  }
  return residents.map((habitante) => habitante.name);
}

function getAnimalMap(options) {

  const funcionamento = mapas();

  if (!options) return funcionamento;

  const { nomes, random, sex } = options;

  if (nomes) {
    Object.keys(funcionamento).forEach((loc) => {
      funcionamento[loc] = funcionamento[loc].map((animal) => {
        const newAni = {};
        newAni[animal] = residentes(animal, random, sex);
        return newAni;
      });
    });
    return funcionamento;
  }
  if (sex) return funcionamento;
  if (random) return funcionamento;
}

module.exports = getAnimalMap;
