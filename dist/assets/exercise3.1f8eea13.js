const name = "countWords";
const question = "Dada uma frase de entrada por um usu\xE1rio, fa\xE7a um programa que conte a ocorr\xEAncia de cada palavra nesta frase. O programa n\xE3o deve distinguir letras mai\xFAsculas e min\xFAsculas.";
function solution() {
  const phrase = prompt("Digite uma frase: ").toLowerCase().replace(/[^a-zA-Z\u00C0-\u00FF ]/g, "");
  const words = phrase.split(" ");
  const counter = {};
  words.forEach((word) => {
    if (word in counter) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }
  });
  let result = "";
  for (const key in counter) {
    result += ` ${key} (${counter[key]}),`;
  }
  result = result.slice(0, -1);
  alert(result);
}
export { name, question, solution };
