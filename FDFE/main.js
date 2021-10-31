import { caixa } from "./modules/caixa.js";

console.log(caixa);
caixa.deposita(200);

console.log(caixa.getSaldo());

caixa.saque(500);

console.log(caixa.getSaldo());

const saldo = document.querySelector("#saldo");
saldo.innerHTML = caixa.getSaldo();

