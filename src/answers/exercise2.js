const name = 'calculateDistanceCoordinates';
const question = 'Considere dois pontos no espaço 2D com as seguintes coordenadas: A(x 1 , y 1 ) e B(x 2 ,y 2 ). Escreva um programa que calcule tal distância para coordenadas de dois pontos informados pelo usuário.';

function solution() {
  const coordinate1 = prompt('Primeira coordenada\nColoque coordenada x e separando por virgula (ex: 0, 1) ');

  const coordinate1Array = coordinate1.split(',');
  const xCoordinate1 = Number(coordinate1Array[0]);
  const yCoordinate1 = Number(coordinate1Array[1]);

  const coordinate2 = prompt('Segunda coordenada\nColoque coordenada x e separando por virgula (ex: 0,1) ');

  const coordinate2Array = coordinate2.split(',');
  const xCoordinate2 = Number(coordinate2Array[0]);
  const yCoordinate2 = Number(coordinate2Array[1]);

  const result = Math.sqrt(
    (
      ((xCoordinate1 - xCoordinate2) ** 2)
      + ((yCoordinate1 - yCoordinate2) ** 2)
    ),
  );

  alert(`Distância: ${result}`);
}

export { name, question, solution };
