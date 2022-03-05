const name = 'countWords';
const question = 'Dada uma frase de entrada por um usuário, faça um programa que conte a ocorrência de cada palavra nesta frase. O programa não deve distinguir letras maiúsculas e minúsculas.';

function solution() {
  const phrase = prompt('Digite uma frase: ')
    .toLowerCase()
    .replace(/[^a-zA-Z\u00C0-\u00FF ]/g, '');
  const words = phrase.split(' ');

  const counter = {};

  words.forEach((word) => {
    if (word in counter) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }
  });

  let result = '';

  for (const key in counter) {
    result += ` ${key} (${counter[key]}),`;
  }

  result = result.slice(0, -1);

  alert(result);
}

export { name, question, solution };
