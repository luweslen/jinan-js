const name = 'allDivisorsNumber';
const question = 'Escreva um programa que mostre a soma de todos os divisores de um dado número X. Um divisor é qualquer número menor que X cujo resto da divisão é igual a 0.';

function solution() {
  const number = prompt('Insira um numero: ');

  let sum = 0;
  let sumString = '';

  for (let index = 1; index < number; index += 1) {
    if (number % index === 0) {
      sum += index;
      sumString += ` ${index} +`;
    }
  }

  alert(`Soma dos divisores de ${number}: ${sumString.slice(0, -1)} = ${sum}`);
}

export { name, question, solution };
