
//if ... else
const time = new Date();
const hours = time.getHours();

if (hours <= 12) {
    console.log("Bom dia");
} else if (hours <= 19) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//falsy

let x; 
// x é undefined
if (x) {
    console.log("SETADO");
} else {
    console.log("NÃO SETADO");
}

const cliente = {
    nome : "Felipe",
    sobrenome : "Thomas",
    cidade : "SJ"
}

if (cliente.sobrenome) {
    console.log(cliente.nome, cliente.sobrenome);
} else {
    console.log(cliente.nome);
}

// SWITCH CASE
const dia = time.getDay();
let diaStr = "";
switch (dia) {
   case 1:
      diaStr = "Segunda-feira";
   break;
   case 2:
      diaStr = "Terça-feira";
   break;
   case 3:
      diaStr = "Quarta-feira";
   break;
   case 4:
      diaStr = "Quinta-feira";
   break;
   case 5:
      diaStr = "Sexta-feira";
   break;
   default:
      diaStr = "Final de semana";
   break;
}
console.log(diaStr);

const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]


console.log(diasDaSemana[ dia ]);

// laços de repetição
//FOR

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

console.log( diasDaSemana.length );
for (let i = 0; i < diasDaSemana.length; i++) {
    const diaSemana = diasDaSemana[i];
    console.log(diaSemana);
}

const arr = [1,2,3,4,5,,,,6,7];
arr[20] = 20;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//while
let index = 0
while (index < arr.length) {
    console.log(arr[index]);
    index++;
}

//do ... while
index = 0;
do {
    console.log(arr[index]);
    index++;
} while (index < arr.length);

//for ... in

const professor = {
    nome : "Felipe",
    sobrenome : "Thomas",
    disciplina : "DTR",
    obs : "Melhores alunos",
    chave : "valor",
    saudacao : function() { console.log("Oi"); }
}

console.log( professor["nome"] )
//iterando o objeto
for (const chave in professor) {
    if (professor.hasOwnProperty(chave)) {
        const element = professor[chave];
        console.log(chave);
        console.log(element);
    }
}

// iterando o array
for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(key);
        console.log(element);
    }
}

// for ... of
for (const iterator of arr) {
    console.log(iterator);
}

arr;

arr.forEach(function(element) {
    console.log(element);
    element *= 2;
    console.log(element);
});

arr; //veja que nao foi alterado o valor original

let palavra = "Qualquer coisa"; //string tipo primitivo
console.log(palavra);
palavra.toUpperCase(); // Object Wrapper --> new String(word).toUpperCase()
console.log(palavra);

const palavra2 = new String("Qualquer coisa"); // NÃO FAÇAM ISTO!!!
console.log(palavra2);

const texto = "uva";
const texto2 = "uva";
console.log(texto === texto2);
const str = new String("uva");
const str2 = new String("uva");
console.log(str == str2);

