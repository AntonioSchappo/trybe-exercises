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

/*Exercício 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */

let chesspiece = 'bishop';

switch (chesspiece.toLowerCase()) {
    case "pawn":
        console.log('Pawns have the fewest options of movement of all the pieces. On their first move, they have the option to go one or two squares forward. On all other moves, a pawn can only go one square straight forward. The exception to this is when pawns capture the opponent’s chess pieces – then they move forward one square diagonally.')
        break;
    case "rook":
        console.log("The movement is the easiest to learn of all pieces – rooks can go forward, backward, to the left or to the right. Of course, the rook can not change directions in the same move. As long as no other piece is in their way, as they cannot jump over pieces, they are able to move any number of squares in the chosen direction.");
         break;
        case "knight":
            console.log("It moves in an L-shape over the squares. This means that this chess piece first moves two squares in one direction (to the left, to the right, back- or forwards) and then one square into a horizontal or vertical direction.");
            break;
        case "bishop":
            console.log("The bishop is the ruler over the diagonals of the chess board. One of them is light-squared, the other one is dark-squared. When there are no other pieces in their way, bishops can move in any direction diagonally, as many squares as desired. They can capture any piece along the diagonals");
            break;
        case "queen":
            console.log("She can move in any direction and any number of squares. The one thing she can’t do is jump over other pieces. The Queen can capture any of the opponent’s pieces that are in her way.");
            break;
        case "king":
            console.log("It is crucial to keep your king safe and try to weaken the opponents’. The king is limited in his movement. He can move just one square in any direction, but only if he isn’t placed in check by doing so.");
            break;
    default:
        console.log("It's not a valid Chess piece, please try again.");

        break;
}

/* Exercício 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 100

if(nota <= 100 && nota >= 90){
    nota = "A";
}else if(nota <= 89 && nota >= 80){
    nota = "B";
}else if(nota <= 79 && nota >= 70){
    nota = "C";
}else if(nota <= 69 && nota >= 60){
    nota = "D";
}else if(nota <= 59 && nota >= 50){
    nota = "E"
}else if(nota <= 49 && nota >= 0){
    nota ="F";
}else{
    nota = "Erro! Nota fora do padrão numérico aceito!"
};
console.log(nota);

/*Exercício 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

let ex1 = 9;
let ex2 = 7;
let ex3 = 30;
let isEven = true;
if(ex1%2 == 0 || ex2%2 ==0 ||ex3%2 == 0){
isEven = true;
}else{
    isEven = false;
};
console.log(isEven);

/*Exercício 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

let nmb1 = 2;
let nmb2 = 6;
let nmb3 = 4;
let isUneven = true;

if(nmb1%2 !== 0 || nmb2%2 !==0 ||nmb3%2 !== 0){
    isUneven = true;
    }else{
        isUneven = false;
    };
    console.log(isUneven); 

    /*Exercicio 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

