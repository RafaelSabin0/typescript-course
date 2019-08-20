class Spacecraft{ //Classe Spacecraft
    
 constructor (public propulsor: string){}

 jumpIntoHyperspace(){ //Função jumpIntoHyperspace
     console.log(`Entering hyperspace with ${this.propulsor}`)
 }  
}


let ship = new Spacecraft('hyperdrive') //Usando "NEW" para instanciar a clase
ship.jumpIntoHyperspace() //Retorno: Entering hyperspace with hyperdrive


class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }
   
    //Brincando um pouco com a sobreescrita do método 
   jumpIntoHyperspace(){ // Adicionando um pouco de sorte com valores randoms
       if (Math.random() >= 0.5){
           super.jumpIntoHyperspace()
       }else{
           console.log('Failed to jump into hyperspace')
       }
   }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()
/* 
Até aqui o retorno pode ser tanto: 
"Failed to jump into hyperspace"
Como também: 
"Entering hyperspace with hyperdrive"
*/

interface Containership { //Criando interface
    cargoContainers: number
}

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2//Função do tipo Arrow Function
console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'YES': 'NO'} `)

/*
Retorno esperado: "Is falcon good for the job? NO"

Caso a linha 21 fosse: "this.cargoContainers = 4"
O resultado seria: "Is falcon good for the job? YES"

*/