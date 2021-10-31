const caixa = (function( saldoInicial ){
    let saldo = saldoInicial;

    function deposita( valor ) {
        saldo += valor;
        console.log(`Depositado o valor de R$ ${valor}`);
    }

    function getSaldo() {
        return saldo;
    }

    function saque( valor ) {
        if (saldo > 0) {
            saldo -= valor;
        } else {
            return false;
        }
        return true;
    }

    return {
        deposita : deposita,
        getSaldo : getSaldo,
        saque : saque
    }

})(500);

export { caixa }