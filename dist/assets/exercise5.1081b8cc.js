const name = "sequenceFibonacci";
const question = `Dado um n\xFAmero inteiro positivo N como entrada de um usu\xE1rio, escreva um programa
que mostre os primeiros N n\xFAmeros da sequ\xEAncia de Fibonacci. (A sequ\xEAncia de Fibonacci \xE9
iniciada por 0 e 1, e o pr\xF3ximo n\xFAmero \xE9 sempre a soma dos dois \xFAltimos).`;
function solution() {
  const number = prompt("Digite um n\xFAmero: ");
  let result = "0 1";
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
