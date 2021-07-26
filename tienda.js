// Crear nodo de tipo Elemento, etiqueta p
/*let titulo = document.createElement("t");
// Insertar HTML interno
titulo.innerHTML = "<h1>¡Bienvenidos a nuestra Tienda!</h1>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(titulo);



let parrafo1 = document.createElement("p");
// Insertar HTML interno
parrafo1.innerHTML = "Selecciona los productos que necesites:</p>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo1);*/

//CODIGO HTML DE REFERENCIA


//document.getElementById("nombre").value = "HOMERO";
//document.getElementById("edad").value   = 39;

//console.log(document.getElementById("nombre").value)
//console.log(document.getElementById("edad").value)

/*let listado = document.getElementById("listaProductos");


let listaProductos = ["NUEZ", "ALMENDRAS","DATILES"];

for (const producto of listaProductos){
    let li = document.createElement("li");
    li.innerHTML = producto
    listado.appendChild(li);
}*/


class Producto {
    constructor(cod, nombre, precio, stock, img, cantidad, producto) {
        this.cod = cod;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cantidad = cantidad;
        this.subtotal = this.precio * cantidad;
    }
}

const listaProductos = [{
        cod: 1001,
        nombre: "NUEZ",
        precio: 135,
        stock: 10,
        img: "nuez.jpg",
    },
    {
        cod: 2030,
        nombre: "ALMENDRAS",
        precio: 140,
        stock: 10,
        img: "almendra.jpg",
    },
    {
        cod: 1950,
        nombre: "MIX ENERGETICO",
        precio: 70,
        stock: 15,
        img: "energ.jpg",
    },
    {
        cod: 1952,
        nombre: "MIX TROPICAL",
        precio: 100,
        stock: 7,
        img: "tropi.jpg",
    },
]

listaProductos.push(new Producto(1252, "PASAS DE UVA", 27, 9, "pasasuva.jpg"));
//listaProductos.push(new Producto(1098, "DATILES", 50, 12, "tropi.jpg"));

const carritoTienda = [];
console.log(listaProductos);

for (const producto of listaProductos) {
    let cardProducto = document.createElement("div");
    cardProducto.innerHTML += ` 
                                <p class="nombreProducto">${producto.nombre} </p>
                                <img class="itemImg" src='Imagenes/${producto.img}' style="height: 150px"><br>
                                <h3 class="classId"> Cod: ${producto.cod} </h3>
                                <v class="itemPrecio"> Precio: $${producto.precio}</v>
                                <b class="itemStock"> Stock: ${producto.stock}<br>
                                <button id="${producto.cod}" class="btn"> Comprar</button> `;
    document.getElementById("contenedorDeProductos").append(cardProducto);
    cardProducto.classList.add("contenedor");

}

let btn = document.getElementsByClassName("btn");
let nombreProducto = document.getElementsByClassName("nombreProducto");
let itemPrecio = document.getElementsByClassName("itemPrecio");
let classId = document.getElementsByClassName("classId");
let itemStock = document.getElementsByClassName("itemStock");
let itemImg = document.getElementsByClassName("itemImg");

btn.onmouseover =() => {alert(Hola)}
for (let i = 0; btn.length > i; i++) {
    btn[i].addEventListener("click", agregarItem); 
  }


function seleccion(p) {
    console.log(p.target); 
    p.target.style.opacity = "1";
    p.target.style.backgroundColor = "darkgreen"; 
    p.target.innerHTML = "Agregado al carrito"; 
}



function agregarItem(p) {
    console.log(p.target);
    seleccion(p);
    let productoSeleccionado = listaProductos.find((item) => item.cod == p.target.cod);
    console.log(productoSeleccionado);
    carritoTienda.push(productoSeleccionado);
  
    console.log("Hay " + carritoTienda.length + " productos en el carrito");
    localStorage.setItem("Mi Carrtio", JSON.stringify(carritoTienda));}
  

/*listaProductos.forEach(producto =>{
    let cardProducto = document.querySelector("#contenedorDeProductos");
    cardProducto.innerHTML +=
    `<h3> ID: ${producto.cod} </h3>
    <p> Producto: ${producto.nombre} </p>
    <v> Precio: $${producto.precio} </v><br>
    <img src='Imagenes/${producto.img}' style="height: 150px"> <br> 
    <b> Stock: ${producto.stock} </b><br>
    <button id="${producto.cod}" class="btn"> Comprar</button> <hr>`;
    document.getElementById("contenedorDeProductos").append(cardNueva);
    cardNueva.classList.add("contenedorDeProductos");
}
)*/