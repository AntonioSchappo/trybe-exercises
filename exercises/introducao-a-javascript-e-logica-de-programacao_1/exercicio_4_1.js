/* Exercício 1 */
let a = 4;
let b = 2;

console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
if (a%b==0){
console.log("Even");
};

/* Exercício 2 */

let num1 = 18;
let num2 = 9;
if(num1>num2){
    console.log(`O maior número é o ${num1}!`)
}else if(num2>num1){
    console.log(`O maior número é o ${num2}!`)
}else{
    console.log('Erro! Não foi possível identificar o maior número!')
};

/* Exercício 3 */
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

/*Exercício 4*/


