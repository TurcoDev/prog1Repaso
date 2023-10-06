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


// differencia entre indice y contenido de un array
function indiceYcontenidoArray() {
    const arreglo = [23, 44, 65, 87, 77]
        //     index  0   1   2   3   4
    for (let index = 0; index < arreglo.length; index++) {
        console.log(arreglo[index])
        console.log(index);       
    }
}


/**
 * Realiza una funcion que verifique si todos los valores de un arreglo 
 * se encuentran dentro de un rango especificado
 * arreglo ==> [23, 44, 65, 87, 77]
 * rango ==> valor1 y valor2
 */

function compruebaArray(arreglo, rangoMin, rangoMax) {
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] < rangoMin || arreglo[index] > rangoMax)
            return false
    }
    return true
}

console.log(compruebaArray([23, 44, 65, 87, 77], 11, 90))
console.log(compruebaArray([23, 44, 65, 87, 77], 11, 50))

/**
 * Dado un arreglo con nombres de personas realice una funcion
 * que devuelva los nombres que comienzan con un caracter dado
 * ["Pedro", "Federico", "Pablo", "Florencia", "Federica", "Lautaro"]
 */

function nombres(arreglo, carac) {
    const nameMatch = [];

    for (let index = 0; index < arreglo.length; index++) {
        let nombre = arreglo[index]
        if (nombre[0] === carac) {
            nameMatch[nameMatch.length] = nombre // nameMtch.push(nombre)
        } 
    }
    return nameMatch;
}


const contactos = ["Pedro", "Federico", "Pablo", "Florencia", "Federica", "Lautaro"]
console.log(nombres(contactos, 'F'))
console.log(nombres(contactos, 'P'))