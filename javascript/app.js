
////Animacion del carrito
function openNav() {
    $("#mySidebar").css("width", "400px");
    
}

function closeNav() {
    $("#mySidebar").css("width", "0px");
    $("#main").css("margin-left", "0px");
}

$(() => {


$("body").append(`<div id="main" class="nav">
                        <button class="openbtn">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="badge badge-warning" id="cartCount"> 0 </span></button>
                        </div>`);

$("body").append(`<div class="sidebar" id="mySidebar">
                <div class="container-fluid text-center">
                <span class="close-cart">
                <a href="javascript:void(0)" class="closebtn">&times;</a> 
                </span>
                <h3 class="cart">Mi Carrito</h3>
                <p id="montoTotal">TOTAL $0</p>
                <div id="carritoTienda" class="container-fluid text-center"></div> 
                <div class="cart-footer"><button class="clear-cart banner-btn" id="clear">
                Limpiar carrito
            </button>
            <button id="btncomprar">Comprar</button></div>
                        </div></div>`);


// Animacion

$("#contenedorDeProductos").hide()
$(".nombreProducto").hide()

$("#cardh").hover(function(){
    $("#contenedorDeProductos").fadeIn(1500),
    $(".nombreProducto").slideDown(1800)});
    
//Asignando eventos click con JQuery

$(".openbtn").click(openNav)
$(".closebtn").click(closeNav)
$("#btncomprar").click(comprar)

$(".btn").click((e) =>{
    
    agregarItem(e);
    let totalCart = () => carritoTienda.reduce((acc, prod) => acc + prod.precio, 0)
    console.log(" el total del carrito es: " + totalCart())
    $("#montoTotal").text("TOTAL $ " + totalCart())
    

    
});

// Modificando CSS con Jquery

$("#tituloGeneral").css({"margin-top": "1%"})
$("body").css({"background-color": "black"});




function seleccion(e) {
    
    e.target.style.opacity = "1";
    e.target.style.backgroundColor = "darkgreen";
    e.target.innerHTML = "Agregado al carrito";
    e.target.style.transition =  "0.7s";
    
}

let carritoTienda = [];


function agregarItem(e) {

    seleccion(e);


    let productoSeleccionado = listaProductos.find((item) => item.id == e.target.id);

    carritoTienda.push(productoSeleccionado);

    localStorage.setItem("Mi Carrito", JSON.stringify(carritoTienda));

    mostrarItemsEnCarrito(carritoTienda);
    $("#cartCount").text(carritoTienda.length);
    
    


}


function mostrarItemsEnCarrito(array) {
    $("#carritoTienda").empty();

    for (const producto of array) {
        $("#carritoTienda").append(`<div id="contenedor"><p class="nombreProducto">${producto.nombre}</p>
                                 <img class="itemImg" src='Imagenes/${producto.img}' style="height: 150px"><br>
                                 <h3 class="classId"> Cod: ${producto.id} </h3>
                                 <v class="itemPrecio"> Precio: $${producto.precio}</v>
                                 <b class="itemStock"> Stock: ${producto.stock}<br>
                                 <button id="${producto.id}"  class="btn-remover">Borrar producto</button> </div>`);

                                    
                                 let elementosClickeados = $(".btn-remover");

        for (let i = 0; elementosClickeados.length > i; i++) {
            elementosClickeados[i].addEventListener("click", removerItem); ///Añade el evento Click a cada uno de los botones
        }
    }
}

function removerItem(e) {

    let indexDelProducto = carritoTienda.findIndex((item) => item.id == e.target.id);
    console.log(carritoTienda.splice(indexDelProducto, 1));
    mostrarItemsEnCarrito(carritoTienda);
    $("#cartCount").text(carritoTienda.length);
    $(`#${e.target.id}`)
    .text("Comprar")
    .css("backgroundColor", "black");

    let totalCart = () => carritoTienda.reduce((acc, prod) => acc + prod.precio, 0)
    console.log(" el total del carrito es: " + totalCart())
    $("#montoTotal").text("TOTAL $ " + totalCart())

}

///Boton para Elminar los productos del carrito
let btnLimpiarCarrito = document.getElementById("clear");

btnLimpiarCarrito.addEventListener("click", limpiarCarrito);

function limpiarCarrito() {
    carritoTienda = [];
    $("#carritoTienda").empty();
    $("#cartCount").text(0);
    $(".btn").text("Comprar").css("backgroundColor", "black");
    let totalCart = () => carritoTienda.reduce((acc, prod) => acc + prod.precio, 0)
    console.log(" el total del carrito es: " + totalCart())
    $("#montoTotal").text("TOTAL $ " + totalCart())
    

    
}
$("input").change(function (e) {
    e.preventDefault();
    console.log(e.target.value);
  });


function comprar(){
    
    " el detalle de su compra es: "+ carritoTienda() + " Y el total del carrito es: " + totalCart()
}

  


});

