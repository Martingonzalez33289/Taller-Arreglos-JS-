/** 1.	Escribe una función que tome un arreglo de objetos JSON que representan productos, y 
 * devuelva la suma de los precios de los productos y la suma total del valor del stock de la tienda. 
 * Utiliza la función reduce y el spread operator para obtener los precios de cada objeto y sumarlos. */

let productos = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89 
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
]

console.log(productos);

// Funcion Reduce para hallar la suma de los precios de los productos
let sumaPrecios = productos.reduce(function(acumulador, precio){
    return acumulador + precio.product_price;
}, 0);
console.log("La suma de los precios de los productos es: " + sumaPrecios);

//Funcion para hallar el valor del stock completo de productos
let valorStock = productos.reduce(function(acumulador, precio){
    return acumulador + (precio.product_quantity * precio.product_price);
}, 0);
console.log("El stock total cuesta: " + valorStock);