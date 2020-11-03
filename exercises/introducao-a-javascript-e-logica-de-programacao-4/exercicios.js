let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  // Exercicio 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log(`Bem-vinda, ${info.personagem}`)

// Exercicio 2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info['Recorrente'] = 'Sim';
console.log(info);

// Exercise 3 and 4 Faça um for/in que mostre todas as chaves do objeto.

for (const i in info) {
    console.log(info[i])
;}

// Exercise 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    Recorrente: "Sim"
  };

  for (const i in info) {
      if(info[i] !== info2[i]){
          console.log(`${info[i]} e ${info2[i]}`)
      }else if(info[i] == info2[i]){
          console.log(`Ambos recorrentes`)
      }
  }
