const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const daysOfTheWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const animals = species.map((bicho) => bicho.name);

function daysPerAnimal(entrada) {
  return species.find((animal) => animal.name === entrada).availability;
}

function weekSchedule() {
  const scheduleHours1 = {};
  daysOfTheWeek.forEach((day) => {
    if (day === 'Monday') {
      scheduleHours1[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      scheduleHours1[day] = {
        officeHour:
        `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition:
        species.filter((animal) => animal.availability.includes(day)).map((animal) => animal.name),
      };
    }
  });
  return scheduleHours1;
}
console.log(weekSchedule());

function daySchedule(day) {
  const scheduleHours = {};
  if (day === 'Monday') {
    scheduleHours[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  } else {
    scheduleHours[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    };
  }
  return scheduleHours;
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return daysPerAnimal(scheduleTarget);
  }
  if (daysOfTheWeek.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return weekSchedule();
}

module.exports = getSchedule;
