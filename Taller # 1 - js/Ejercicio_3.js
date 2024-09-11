/**
 * 3.	Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que contenga solo los números pares, 
 * y cada número se multiplique por 2. Utiliza la función filter y la función map.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Funcion para verificar los numeros pares y guardarlos en un nuevo array
let arrayPar = numbers.filter(function(par){
    return par % 2 == 0;
})

console.log("Array con los numero pares del primer Array: \n" + arrayPar);


//Funcion para multiplicar por 2 el array de pares
let arrayParXDos = arrayPar.map(function(cuadrado){
    return cuadrado * 2;
})

console.log("Array con los numero pares multiplicados por 2: \n" + arrayParXDos);