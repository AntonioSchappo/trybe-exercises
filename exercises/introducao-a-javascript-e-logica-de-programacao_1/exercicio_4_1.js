/* Exercício 1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para: adição, subtração, divisão, multiplicação, módulo.*/
let a = 4;
let b = 2;

console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
if (a%b==0){
console.log("Even");
};

/* Exercício 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/

let num1 = 18;
let num2 = 9;
if(num1>num2){
    console.log(`O maior número é o ${num1}!`)
}else if(num2>num1){
    console.log(`O maior número é o ${num2}!`)
}else{
    console.log('Erro! Não foi possível identificar o maior número!')
};

/* Exercício 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.*/
let nb1 = 9;
let nb2 = 10;
let nb3 = 42;
function bigger(number1, number2, number3) {
    let numbers = [];
    numbers[0]=number1;
    numbers[1]=number2;
    numbers[2]=number3;
    let sortedNumbers = numbers.sort(function(a, b){return a-b});
    return console.log(`And the bigger number is: ${sortedNumbers[2]}!`)
}
bigger(nb1,nb2,nb3);

/*Exercício 4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/
let var1 = 0;

if(var1 > 0){
    console.log('positive')
}else if(var1 < 0){
    console.log('negative')
}else{
    console.log('zero')
};

/*Exercício 5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário. */
/*Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/

let angle1 = 50;
let angle2 = 70;
let angle3 = 40;
let isTriangle = false;
if(angle1+angle2+angle3 == 180){
isTriangle = true;
}else{
    isTriangle = false;
}
console.log(isTriangle);
