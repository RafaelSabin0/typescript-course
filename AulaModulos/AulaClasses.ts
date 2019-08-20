//Arquivo de execução da minha aplicação

import {Spacecraft, Containership} from './base-ships' //Caminho do módulo não precisa ter extensão
import {MilleniumFalcon} from './starfighter' //Importando minha classe

let ship = new Spacecraft('hyperdrive') //Usando "NEW" para instanciar a clase
ship.jumpIntoHyperspace() //Retorno: Entering hyperspace with hyperdrive




let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()




let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2//Função do tipo Arrow Function
console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'YES': 'NO'} `)

