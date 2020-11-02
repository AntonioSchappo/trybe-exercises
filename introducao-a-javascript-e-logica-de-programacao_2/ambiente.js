let num = [0,5,8,3,2,1];
/*for(let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/
num.sort();
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}