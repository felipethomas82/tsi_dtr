const nro = "123.5";
const mult = Number.parseFloat(nro) * 2;
mult;

const a = "b" * 2;
a;
console.log(Number.isNaN(a));
console.log(a == NaN);
console.log( typeof(NaN) );

console.log(Number.MAX_VALUE);

var num = (Math.PI*1000);
console.log(num.toExponential(2));
console.log(num.toExponential(4));

console.log(3.135466.toFixed(2));
console.log(3.135466.toPrecision(2));
console.log(3.135466.toPrecision(3));
console.log(0.0000135466.toPrecision(3));

console.log(Math.floor(3.99999));
console.log(Math.ceil(3.00000001));
console.log(Math.round(3.5));

const dt = new Date();

dt;
console.log(dt.getDay());
console.log(dt.getDate());
console.log(dt.getMonth());
console.log(dt.getFullYear());
console.log(dt.getTime());

const data2 = new Date(949278000000);
data2;

const dt3 = new Date();
dt3.setDate(32);
console.log(dt3);

console.log("Total de caracteres".length);
console.log("Qual a letra".charAt(2))
console.log("Qual a letra".charCodeAt(2))
console.log("Qual a letra".charCodeAt(100))
console.log("Qual a letra".charAt(100))

console.log(String.fromCharCode(115,101,103,114,101,100,111));

let str2 = "teSte";
str2 = str2.toUpperCase();
console.log(str2);
str2 = str2.toLowerCase();
console.log(str2);

console.log("JavaScript".substring(4,10));
console.log("JavaScript".substr(4,6));

console.log("Todos estes que aí estão\
Atravancando o meu caminho,\
Eles passarão.\
Eu passarinho!".indexOf("passa")
);
console.log("Todos estes que aí estão\
Atravancando o meu caminho,\
Eles passarão.\
Eu passarinho!".lastIndexOf("passa")
);

const nome = "João";
console.log("Olá name, como vai?".replace("name",nome));
console.log("Olá "+ nome +", como vai?");
console.log(`Olá ${nome}, como vai?`);

console.log("Mônica, Cebolinha, Magali e Cascão".split(","));
console.log("Mônica;Cebolinha;Magali;Cascão".split(";"));
console.log("123,50".split(",").join("."));

const arr = [];
//nunca façam isto (misturar tipos de dados no mesmo array)
arr[0] = 1;
arr[1] = "2";
arr[5] = [5,1,4];
arr[3] = { nome: "Felipe", sobrenome: "Thomas"}

arr

//com length, tomar cuidado
const b = ["morango", "laranja"];
console.log(b.length);
b[10] = "banana";
console.log(b.length);
b
console.log(b[7]);

const c = [];
for (let i = 0; i<100; i++) {
    c[i] = i;
}
c

//adicionando valores com o push()
const d = [10];
d.push(20, 30, 40, 50, 60);
d[ d.length - 1 ] = 70; //semelhante ao push()

d
//adicionando na primeira posicao com unshift()
d.unshift(80, 90, 100);
d

//removendo elementos do array
delete d[1] //nao usem o delete
d
console.log(d.pop())
d
console.log(d.shift())
console.log(d.shift()) //o undefined é por conta do delete anterior
d

const lista = [
    ["Maria", 9999999, "Rua 25"], 
    ["João", 88888888, "Rua 13"]
]

lista.push(["Jesus", 6787689, "Rua 10"])
lista

lista.push(["Maria", 9999999, "Rua 25"])
lista

//metodo concatenacao de arrays
var v1=[1,2,3,4];
var v2=[5,6,7,8];
//se não guardar em um outro array, a concatenacao vai ser perdida
console.log(v1.concat(v2)); 
console.log(v1);
console.log(v2);
v1[10]=10;
console.log(v1.concat(v2));

//metodo slice (copia)
var v1 = ["John", "Paul", "George", "Ringo"]
var v2 = v1.slice(1,3);
console.log(v2);
console.log(v1);

//removendo com splice(pos_ini, qtd)
var a1 = [1,2,3,4,5,6,7,8];
const g1 = a1.splice(4)
console.log(g1);
console.log(a1);
var a2 = [1,2,3,4,5,6,7,8];
console.log(a2.splice(4,3));
console.log(a2);

var a3 = [1,2,3,4,5];
console.log(a3.splice(2,2,'a','b')); 
console.log(a3);
var a4 = [1,2,3,4,5];
console.log(a4.splice(2,0,'a','b')); 
console.log(a4);

//convertendo para string com uma string de uniao
var myShopping = ["Ovos","Leite","Cereal","Banana"];
var myShoppingList = myShopping.join("<br/>");
console.log(myShoppingList);

//reverse()
a3
a3.reverse()
a3

//ordenando elementos com sort()
var v = ["João","Maria","Ronaldo","Joaquim","Carlos","Antônio"];
console.log(v.sort());
console.log(v);	

const f = [3,5,8,1,2,7,9,90,20,10,4,24]
f.sort()
f

f.sort(function(a,b) {
    return a-b;
})
f

//iterando array com o map para criar um novo de valores diferentes
const h = [1,2,3,4,5,6,7,8];
const t = h.map(function(el) {
    return el * 2
});
console.log(h);
console.log(t);

const w = h.map( x => x * 2 )
console.log(w);

console.log("---- Destructuring ----");
const car = { 
    type : "Uno",
    maxVelocity : 200,
    color : "white" 
};

let { type, maxVelocity, color} = car;

console.log(type);

function showCar( { type = "padrao", maxVelocity = "padrao", color = "padrao", x = "padrao" } ) {
    console.log( type );
    console.log( color );
    console.log(x);
}

function showCar2( _car ) {
    const type = _car.type ? _car.type : "padrao";
    const maxVelocity = _car.maxVelocity ? _car.maxVelocity : "padrao";
    const color = _car.color ? _car.color : "padrao";
    const x = _car.x ? _car.x : "padrao";
    console.log( type );
    console.log( color );
    console.log(x);
}

showCar( car );
showCar2( car );

const arr2 = [1,2,3,4,5,6];
const [d1,d2,d3, ...d4] = arr2;
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);


