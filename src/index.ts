import * as readline from 'readline-sync';

function main(){
    const opciones = ["Create student.", "List students.", "Create subject.", "List subjects."];
    const indice = readline.keyInSelect(opciones, "Seleccione una opción: ");

    if(indice === -1){
        console.log("Operación cancelada.");
        return;
    }

    
}