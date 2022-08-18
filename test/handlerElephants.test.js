const handlerElephants = require('../src/handlerElephants');

const diasDasemana = ['Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
describe('Testes da função HandlerElephants', () => {
  it('teste 1 - retorna UNDEFINED sem entrada de parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('teste 2 - analisa a tipagem de parâmetro válido', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('teste 3 - analisa se a idade média dos animais é around 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('teste 4 - retorna NULL para string desconhecida', () => {
    expect(handlerElephants('Aerosmith é a melhor banda')).toEqual(null);
  });

  it('teste 5 - retorna JEFFERSON com a entrada do argumento names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('teste 6 - sobre a popularidade dos elefantes ser igual a 5 em rate', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('teste 7 - retorna 4 inteiros na entrada de um argumento count ', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  
});
