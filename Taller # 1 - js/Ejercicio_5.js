/**
 * 5.	Dado un arreglo de objetos JSON que representan productos, escribe una función que devuelva un nuevo 
 * que contenga solo los productos que tengan un precio mayor a $70000 y una cantidad inferior a 100, 
 * luego a cada producto se debe agregar una nueva propiedad "taxValue" que represente el precio con el impuesto del 19% 
 * y una propiedad “totalValue” de valor más el impuesto calculado. Utiliza el spread operator, la función map y filter.
 */

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

// Funcion para tomar los objetos con un precio mayor a $70000 y una cantidad inferior a 100

let productosMayores = productos.filter(function(producto){
    if(producto.product_price > 70000 && producto.product_quantity < 100){
        return producto;
    }
})

console.log("Productos con precio mayor a $70000 y una cantidad inferior a 100: ");
console.log(productosMayores);


//funcion para agregar valores de impuestos

let productosConImpuesto = productosMayores.map(function(producto){
    producto.taxValue = producto.product_price * 0.19;
    producto.totalValue = producto.taxValue + producto.product_price;
    return producto;
})

console.log("Productos con atributos de impuestos: ");
console.log(productosConImpuesto);
