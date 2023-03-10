const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // parte 1
  const guests = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((visitante) => {
    if (visitante.age < 18) {
      guests.child += 1;
    } else if (visitante.age >= 18 && visitante.age < 50) {
      guests.adult += 1;
    } else {
      guests.senior += 1;
    }
  });
  return guests;
}

function calculateEntry(entrants) {
  // parte 2
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const convidados = countEntrants(entrants);
  let total = 0;
  const { adult, child, senior } = convidados;
  const { adult: valorAdulto, child: valorCrianca, senior: valorMelhorIdade } = prices;
  total = (adult * valorAdulto) + (child * valorCrianca) + (senior * valorMelhorIdade);
  return total;
}

module.exports = { calculateEntry, countEntrants };
