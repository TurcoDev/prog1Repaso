/**
 * Escriba una función arrayOfHexaColors que devuelva cualquier cantidad de
colores hexadecimales en una array.

 */

function arrayOfHexaColors() {
    let size = 12 //Number(prompt("Ingrese cantidad de colores"))
    let colors = [];
    for (let i = 0; i < size; i++) {
        colors[i] = generateHexaColor();        
    }
    console.log(colors);
}


// genera un color en hexa
function generateHexaColor() {
   const hexaDigit = "0123456789ABCDEF";
   let colorHexa = "#";
   for (let i = 1; i <= 6; i++) {
     let randomPosition = Math.floor(Math.random() * 16)
    colorHexa += hexaDigit[randomPosition];
    //    console.log("Posicion", randomPosition);
    //    console.log("Valor", hexaDigit[randomPosition]);
   
   }
   return colorHexa;
}

// generateHexaColor();
arrayOfHexaColors();


/**
 * Llame a su función shuffleArray, toma una array como parámetro y devuelve
una array mezclado
 */
const arrayOrigin = []
for (let i = 0; i < 16; i++) {
    arrayOrigin[i] = i;
}

function shuffleArray(arrayIn) {
    let pos1 = 0;
    let pos2 = 0;
    let auxiliar = 0;

for (let i = 0; i < 8; i++) {
    
    pos1 = Math.floor(Math.random() * 16)
    pos2 = Math.floor(Math.random() * 16)
    auxiliar = arrayIn[pos1];
    arrayIn[pos1] = arrayIn[pos2];
    arrayIn[pos2] = auxiliar;

    }

    return arrayIn;
}


const otroArrayShuffle = shuffleArray(arrayOrigin)
console.log("arrayOrigin", arrayOrigin);