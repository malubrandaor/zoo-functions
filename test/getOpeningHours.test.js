const getOpeningHours = require('../src/getOpeningHours');

// describe('Testes da função getOpeningHours', () => {});
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
const aberto = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('teste 1- sem parametro e retorna o schedule completo', () => {
    expect(getOpeningHours()).toEqual(horarios);
  });
  it('teste 2- para os argumentos Monday e 09:00 AM ', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(fechado);
  });
  it('teste 3- para os argumentos Wednesday e 09:00 PM ', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(fechado);
  });
  it('teste 4- se caso o dia seja um valor erraddo retorne erro:', () => {
    expect(() => getOpeningHours('Fri', '09:00-AM')).toThrow();
  });
  it('teste 5- se caso a hora seja um valor não localizado retorne erro:', () => {
    expect(() => getOpeningHours('Friday', 'd9:00-AM')).toThrow();
  });
  it('teste 6-  se caso houver minuscula seja um valor errado retorne erro:', () => {
    expect(() => getOpeningHours('Friday', '09:00-Ac')).toThrow();
  });
  it('teste 7- se as horas não estão entre 0 e 12 e retorna erro:', () => {
    expect(() => getOpeningHours('Friday', '14:00-AM')).toThrow();
  });
  it('teste 8- se os minutos não estão entre 0 e 59 e retorna erro:', () => {
    expect(() => getOpeningHours('Friday', '12:70-AM')).toThrow();
  });
  it('teste 9- se retorna aberto as terças-feiras as 09:00-AM :', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(aberto);
  });
  it('teste 10- se retorna aberto as sextas-feiras as 12:00-PM :', () => {
    expect(getOpeningHours('Friday', '12:00-PM')).toBe(aberto);
  });
});
