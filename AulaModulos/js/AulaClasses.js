"use strict";
//Arquivo de execução da minha aplicação
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("./base-ships"); //Caminho do módulo não precisa ter extensão
var starfighter_1 = require("./starfighter"); //Importando minha classe
var ship = new base_ships_1.Spacecraft('hyperdrive'); //Usando "NEW" para instanciar a clase
ship.jumpIntoHyperspace(); //Retorno: Entering hyperspace with hyperdrive
var falcon = new starfighter_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; }; //Função do tipo Arrow Function
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO') + " ");
