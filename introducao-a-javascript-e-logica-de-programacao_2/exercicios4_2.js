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

/* 4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

