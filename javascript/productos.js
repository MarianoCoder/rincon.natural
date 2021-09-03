class Producto {
    constructor(id, nombre, precio, stock, img, cantidad, producto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cantidad = cantidad;
        this.subtotal = this.precio * cantidad;
    }
}

const listaProductos = [{
        id: 1001,
        nombre: "NUEZ MARIPOSA",
        precio: 135,
        stock: 10,
        img: "nuez.jpg",
    },
    {
        id: 2030,
        nombre: "ALMENDRAS NON PAREIL",
        precio: 140,
        stock: 10,
        img: "almendra.jpg",
    },
    {
        id: 1950,
        nombre: "MIX ENERGETICO",
        precio: 70,
        stock: 15,
        img: "energ.jpg",
    },
    {
        id: 1952,
        nombre: "MIX TROPICAL",
        precio: 100,
        stock: 7,
        img: "tropi.jpg",
    },
]

listaProductos.push(new Producto(1252, "PASAS DE UVA", 27, 9, "pasasuva.jpg"));
listaProductos.push(new Producto(1098, "DATILES EGIPCIOS", 50, 12, "datiles.jpg"));
listaProductos.push(new Producto(1023, "ARANDANOS ROJOS", 50, 12, "arandanos.jpg"));
listaProductos.push(new Producto(1089, "BANANA CHIPS", 70, 24, "bananachips.jpg"));
listaProductos.push(new Producto(2036, "ARITOS FRUTALES", 51, 60, "aritofrutal.jpg"));
listaProductos.push(new Producto(2025, "BOLITAS DE CACAO", 60, 9, "bolitachocolate.jpg"));
listaProductos.push(new Producto(9058, "CHOCOLATE SEMIAMARGO", 65, 25, "chocosemi.jpg"));
listaProductos.push(new Producto(8081, "GHEE DOÑA MAGDALENA", 385, 5, "ghee.jpg"));
listaProductos.push(new Producto(9058, "PASTA MANI NATURAL", 300, 7, "pastamani.jpg"));
listaProductos.push(new Producto(9043, "PASTA MANI CHOCOLATE", 320, 2, "pastamanichoco.jpg"));
listaProductos.push(new Producto(7032, "DULCE DE LECHE", 355, 8, "dulcedeleche.jpeg"));



for (const producto of listaProductos) {

    $("#contenedorDeProductos").append(` <div id="contenedor"> 
                                <p class="nombreProducto">${producto.nombre} </p>
                                <img class="itemImg" src='Imagenes/${producto.img}' style="height: 150px"><br>
                                <h3 class="classId"> Cod: ${producto.id} </h3>
                                <v class="itemPrecio"> Precio: $${producto.precio}</v>
                                <b class="itemStock"> Stock: ${producto.stock}<br>
                                <button id="${producto.id}" class="btn"> Comprar</button> </div>`);


}



// Creando variables con jquery

let btn = $(".btn");
let nombreProducto = $(".nombreProducto");
let itemPrecio = $(".itemPrecio");
let classId = $(".classId");
let itemStock = $(".itemStock");
let itemImg = $(".itemImg");
