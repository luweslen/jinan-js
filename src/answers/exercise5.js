const name = 'sequenceFibonacci';
const question = `Dado um número inteiro positivo N como entrada de um usuário, escreva um programa
que mostre os primeiros N números da sequência de Fibonacci. (A sequência de Fibonacci é
iniciada por 0 e 1, e o próximo número é sempre a soma dos dois últimos).`;

function solution() {
  const number = prompt('Digite um numero: ');
  let result = '0 1';
  let last = 1;
  let lastButOne = 0;
  let current = 0;

  for (let index = 3; index <= number; index += 1) {
    current = last + lastButOne;
    result += ` ${current}`;
    lastButOne = last;
    last = current;
  }

  alert(result);
}

export { name, question, solution };
