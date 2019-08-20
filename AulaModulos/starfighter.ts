import {Spacecraft, Containership} from './base-ships' //Informando que quero exportar os tipos do meu arquivo base-ships.ts



export class MilleniumFalcon extends Spacecraft implements Containership{

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