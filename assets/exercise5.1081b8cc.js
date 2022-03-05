const s="sequenceFibonacci",a=`Dado um n\xFAmero inteiro positivo N como entrada de um usu\xE1rio, escreva um programa
que mostre os primeiros N n\xFAmeros da sequ\xEAncia de Fibonacci. (A sequ\xEAncia de Fibonacci \xE9
iniciada por 0 e 1, e o pr\xF3ximo n\xFAmero \xE9 sempre a soma dos dois \xFAltimos).`;function m(){const r=prompt("Digite um n\xFAmero: ");let i="0 1",e=1,n=0,o=0;for(let t=3;t<=r;t+=1)o=e+n,i+=` ${o}`,n=e,e=o;alert(i)}export{s as name,a as question,m as solution};
