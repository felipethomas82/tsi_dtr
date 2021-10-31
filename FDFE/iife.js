const result = (function(n) {
    var nome = n;
    return nome;
})("Felipe Thomas");

result


var c = (function (model, color) {
    //variaveis privadas
    var _model = model;
    var _color = color;
    var cont = 0;

    //variavel publica, esta no return
    var publica = "teste";

    //metodo publico
    function setColor( newColor ) {
        _color = newColor;
    }

    //metodo publico
    function getColor() {
        return _color;
    }

    //privado porque não está no return
    function incrementa() {
        cont++;
    }

    return { 
        setColor : setColor,
        getColor : getColor,
        publica : publica
    }
})( "Fusca", "Branco" );



console.log(c.getColor());
c.setColor("Amarelo");
console.log(c.getColor());
console.log(c._color); //o que acontece?
c.publica = "outroTeste";
console.log(c.publica);



const calcModule = (function(){
    function soma(a,b) {
        return a + b;
    }

    return {
        soma : soma
    }
})();

console.log(calcModule.soma(1,2));