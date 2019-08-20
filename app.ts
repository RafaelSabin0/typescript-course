let message: string = "Helpe me, Obi-wan Kenobi. You are my only hope" //Variável tipo string
console.log(message);


let episode: number = 4 //Variável tipo Number
console.log("This episode : "+ 4)
episode = episode + 1
console.log("Next episode : " + episode)

let favoriteDroid //Variável tipo Any
favoriteDroid = 'BB-8'  
console.log("My favorite droid is "+ favoriteDroid)


//-------Funções: 

let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12   
}

let distance = 2
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)
//Essa sintaxe é a "Template String" permite usar crase(`) e expressões com o uso de $ e chaves







//Criando Arrrow Function:

let call = (name: string) => console.log(`Do tou copy, ${name}`)
call('Anakim')

/*

Retorno:

Helpe me, Obi-wan Kenobi. You are my only hope
This episode : 4
Next episode : 5
My favorite droid is BB-8
Is 2 parsecs enough to beat Millenium Falcon ? YES
Do tou copy, Anakim


*/





function inc (speed: number, inc: number = 1): number{
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`) //Retorno = 6
console.log(`inc (5) = ${inc(5)}`) //Retorno = 6