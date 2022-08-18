const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
const horarios = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
// lint deu erro e pediu constante para 'zoo is closed'
const fechado = 'The zoo is closed';

it('teste 1- sem parametro e retorna o schedule completo', () => {
  expect(getOpeningHours()).toEqual(horarios);
});
it('teste 2- para os argumentos Monday e 09:00 AM ', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe(fechado);
});
it('teste 3- para os argumentos Wednesday e 09:00 PM ', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(fechado);
});
it('teste 4- para os argumentos incompletos ', () => {
  expect(getOpeningHours('Fri', '09:00-AM')).toThrow();
});
it('teste 5- para os argumentos com erro de digitacao ', () => {
  expect(getOpeningHours('Friday', '09:00-ZM')).toThrow();
});
it('teste 6- para os argumentos com erro de identacao na hora', () => {
  expect(getOpeningHours('Friday', 'B09:00-AM')).toThrow();
});
it('teste 7- para os argumentos com erro de identacao nos minutos', () => {
  expect(getOpeningHours('Friday', '09:b0-AM')).toThrow();
});
it('teste 8- para os argumentos com horario fora do schedule', () => {
  expect(getOpeningHours('Friday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
});
it('teste 3- para os argumentos Friday e 09:00 PM ', () => {
  expect(getOpeningHours('Friday', '09:00-PM')).toBe('fechado');
});
