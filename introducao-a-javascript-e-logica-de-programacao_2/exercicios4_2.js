let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (const i in numbers) {
    console.log(numbers[i])
};

// 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let sum = 0;
for (const i in numbers) {
    sum = sum + numbers[i];
};
console.log(sum);

/* 3. Calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

let mediaAritmetica = sum/numbers.length
console.log(mediaAritmetica);

// 4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(mediaAritmetica > 20){
    console.log('Valor maior que 20')
}else{
    console.log("valor menor ou igual a 20")
};

//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let largest = 0;
for (const i in numbers) {
    if(numbers[i]> largest){
        largest = numbers[i];
    }
}
console.log(largest);

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = [];
for (const i in numbers) {
    if (numbers[i]%2 !== 0) {
    impares.push(numbers[i]);       
    }
};
if(impares.length < 0){
console.log("nenhum valor ímpar encontrado")
}else{
console.log(`O array possui ${impares.length} números ímpares.`)
}

//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smallest = 1000;
for (const i in numbers) {
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}
console.log(smallest);

//8. Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
let array25 = [];
for (let i = 1; i <= 25; i+=1) {
    array25.push(i); 
}
console.log(array25);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let array12AndaHalf = [];
for(let i = 0; i < array25.length; i+=1){
    array12AndaHalf.push(array25[i]/2)
};
console.log(array12AndaHalf);