/** 4.	Dado un arreglo de objetos JSON que representan usuarios, 
 * escribe una función que devuelva un nuevo arreglo que contenga 
 * solo los usuarios mayores de edad (18 años o más), y 
 * para cada usuario se agregue una nueva propiedad "ageInDays" que represente la edad del usuario en días.
 * Utiliza el spread operator, la función map y filter. */

let usuarios = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 }
];


// funcion para verificar los usuarios mayores de 18 años
const usuarioAdultos = usuarios.filter(function(usuario){
    if(usuario.age >= 18){
        return usuario;  
    }
});

console.log("Usuarios mayores de edad:");
console.log(usuarioAdultos);

//funcion para añadir un nuevo atributo al array de adultos mayores

const usuarioAdultosEdadDias = usuarioAdultos.map(function(usuario){
    usuario.ageInDays = usuario.age * 365;
    return usuario;
})

console.log("El array de usuarios mayores con el nuevo atributo es:");
console.log(usuarioAdultosEdadDias);

