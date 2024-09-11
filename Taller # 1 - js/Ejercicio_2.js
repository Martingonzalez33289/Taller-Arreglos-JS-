/** 2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y devuelva un objeto
 *  que contenga la suma de los precios de los productos, la cantidad total de productos, y el nombre del producto más caro.
 *  Utiliza el spread operator, la función reduce, map y sort para calcular los valores necesarios. */

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

//funcion para sumar todos los precios de los productos
let sumaPreciosProductos = productos.reduce(function(producto, precio){
    return producto + precio.product_price;
}, 0);
console.log("A");
console.log(sumaPreciosProductos);


// Funcion para sumar la cantidad total de productos
let sumaStock = productos.reduce(function(producto, stock){
    return producto + stock.product_quantity;
}, 0);

console.log("B");
console.log(sumaStock);

// Funcion para tomar el nombre del producto mas caro
let ProductoMasCaro = productos.reduce(function(acumulador, precio){

    return acumulador.product_price > precio.product_price ? acumulador : precio;
        
}, productos[0]);

console.log("C");
console.log(ProductoMasCaro);


//
let datosExtraidos = [{sumaPreciosProductos, sumaStock, ...ProductoMasCaro.product_name }];

console.log(datosExtraidos);