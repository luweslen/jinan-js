const name = 'matrixDimension';
const question = `Faça um programa que leia uma string de números como entrada de um usuário que
                  representa uma matriz e diga qual dimensão dela(quantidade de linhas e colunas).As linhas
                  da matriz são separadas por um caractere de ponto e vírgula ‘;’e as colunas são separadas por
                  um espaço vazio ‘ ’.`;

function solution() {
  const matrixString = prompt('Digite a matriz separando colunas com espaços e linhas por ";": ')
    .toLowerCase();

  const rowsMatrix = matrixString.split(';');

  const rows = rowsMatrix.length;
  const columns = rowsMatrix[0].split(' ').length;

  alert(`Essa e uma matriz de dimensao ${rows} x ${columns}`);
}

export { name, question, solution };
