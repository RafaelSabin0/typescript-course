var message = "Helpe me, Obi-wan Kenobi. You are my only hope"; //Variável tipo string
console.log(message);
var episode = 4; //Variável tipo Number
console.log("This episode : " + 4);
episode = episode + 1;
console.log("Next episode : " + episode);
var favoriteDroid; //Variável tipo Any
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
//-------Funções: 
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 2;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
//Essa sintaxe é a "Template String" permite usar crase(`) e expressões com o uso de $ e chaves
//Criando Arrrow Function:
var call = function (name) { return console.log("Do tou copy, " + name); };
call('Anakim');
/*

Retorno:

Helpe me, Obi-wan Kenobi. You are my only hope
This episode : 4
Next episode : 5
My favorite droid is BB-8
Is 2 parsecs enough to beat Millenium Falcon ? YES
Do tou copy, Anakim


*/
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1)); //Retorno = 6
console.log("inc (5) = " + inc(5)); //Retorno = 6
