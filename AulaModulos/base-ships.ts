 class Spacecraft{ //Classe Spacecraft
    
    constructor (public propulsor: string){}
    
     

    jumpIntoHyperspace(){ //Função jumpIntoHyperspace
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }  
   }

  interface Containership { //Criando interface
    cargoContainers: number
}

export{Spacecraft, Containership} //Exportando os tipos no final do arquivo acaba sendo algo mais rápido do que colocar 'export' ao lado de cada classe ou interface
//De preferência use um arquivo para cada tipo