//DESAFIO CLASE 4b

/*let ivaSi = 1.21
let precio = parseInt(prompt ("Escriba el precio del producto"))
let cantidad = parseInt(prompt ("Qué cantidad necesita?"))
let condicionIva = prompt("Sos responsable inscripto? (S/N)")


function montoFinal(precio,condicionIva,ivaSi,cantidad){

    if(esRespInscripto(condicionIva)){
        return "El monto de tu compra es:" + (precio*ivaSi)*cantidad
    }else if(noEsRespInscripto(condicionIva)){
        return "El monto de tu compra es:" + (precio*cantidad)
    }else{
        return "El parametro ingresado es incorrecto"
    }
    
}

const esRespInscripto = (condicionIva)=>{

    if (condicionIva == "S"){
        return true
    }else{
        return false
    }
}

const noEsRespInscripto = (condicionIva)=>{

    if (condicionIva == "N"){
        return true
    }else{
        return false
    }
}

alert(montoFinal(precio,condicionIva,ivaSi,cantidad))*/


//DESAFIO 6(3) CARRITO DE COMPRAS



const listaProductos = [{
        cod: 1001,
        nombre: "NUEZ",
        precio: 135,
        stock: 10,
    },
    {
        cod: 2030,
        nombre: "ALMENDRAS",
        precio: 140,
        stock: 10,
    },
    {
        cod: 1950,
        nombre: "MIX ENERGETICO",
        precio: 70,
        stock: 15,
        nombre: "MIX ENERGETICO",
        precio: 80,
        stock: 3,
    },
    {
        cod: 1952,
        nombre: "MIX TROPICAL",
        precio: 100,
        stock: 7,
    },
]

class Producto {
    constructor(producto, cantidad) {
        this.cod = producto.cod;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.cantidad = cantidad
        this.subtotal = producto.precio * cantidad
    }
}
listaProductos.push(new Producto(1252, "PASAS DE UVA", 27, 7));
listaProductos.push(new Producto(98, "DATILES", 50, 13));

let productoIngresado;
let cantidadIngresada;
let productoSeleccionado;
let elegirNuevoProducto;
const carritoTienda = [];

procesoCompra()
while (elegirNuevoProducto.toUpperCase() === "SI") {
    procesoCompra()
}

console.log(carritoTienda)
verCarrito()


function procesoCompra() {
    elegirProducto()
    const disponibilidad = verDisponibilidadProducto(productoIngresado, listaProductos, cantidadIngresada)

    if (disponibilidad) {
        let agregar = prompt("Desea agregar el producto" + productoIngresado + " al carrito? SI/NO")

        if (agregar.toUpperCase() === "SI") {
            let item = new Producto(productoSeleccionado, cantidadIngresada)

            agregarItem(item)
            elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")


        } else {
            elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
        }
    } else {
        alert("Disculpas, el producto seleccionado no está disponible")
    }
}



function elegirProducto() {
    do {
        productoIngresado = prompt("Elige un producto: NUEZ, ALMENDRAS, DATILES, MIX ENERGETICO, MIX TROPICAL, MIX SIN PASAS, PASAS DE UVA");
        cantidadIngresada = parseInt(prompt("Cuantos paquetes x 100gr necesitas?"))

    } while (productoIngresado == "" || productoIngresado == null || !isNaN(productoIngresado))
}




function verDisponibilidadProducto(nombreProducto, lista, cantidad) {
    productoSeleccionado = lista.find((p) => p.nombre === nombreProducto.toUpperCase())
    if (!productoSeleccionado) {
        verificarStock(productoSeleccionado.stock, cantidad)
        alert("El producto seleccionado no existe")
    } else {

        if (verificarStock) {
            return true

        } else {
            alert("El producto " + nombreProducto + " no cuenta con disponibilidad")

        }
    }


}

function verificarStock(stockProducto, cantidad) {
    if (stockProducto <= cantidad) {
        return true
    } else {
        return false
    }
}




function agregarItem(itemAagregar) {
    carritoTienda.push(itemAagregar)
    sessionStorage.setItem(itemAagregar.cod, JSON.stringify(itemAagregar))
}


function verCarrito() {
    carritoTienda.forEach(item => console.log(item.nombre + " cantidad " + item.cantidad + " subtotal " + item.subtotal))
    let totalCarrito = carritoTienda.reduce((currentTotal, item) => item.subtotal + currentTotal, 0)
    console.log ("El monto a pagar es de: " + totalCarrito)




/*
    for (let i = 0; i < carritoTienda.length; i++) {
        console.log("Producto: " + carritoTienda[i].nombre + ". Cantidad: " + carritoTienda[i].cantidad)

    }
    let totalCarrito = carritoTienda.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
    }, 0);





    for (i = 0; i < sessionStorage.length; i++) {

        document.write("cod: " + sessionStorage.key(i) + "</br>");
        document.write("Articulo: " + sessionStorage.getItem(JSON.parse(sessionStorage.key(i))) + "</br>");
    }

    document.write("El total de compra es: " + totalCarrito)*/

}

/*
producto1.conIva()
producto2.mostrarPrecio();
producto5.mostrarPrecio();
producto3.compra();


const listaProductos = [];
listaProductos.push(new Producto("P01", "Pasas de uva", "100gr", 27));
listaProductos.push(new Producto("D01", "Datiles egipcios", "100gr", 50));
listaProductos.push(new Producto("N01", "Nuez mariposa blanca", "100gr", 135));
listaProductos.push(new Producto("A01", "Almendras nonpareil", "100gr", 140));
listaProductos.push(new Producto("M01", "Mix energético", "100gr", 70));
listaProductos.push(new Producto("M02", "Mix tropical", "100gr", 80));
listaProductos.push(new Producto("M03", "Mix sin pasas", "100gr", 100));


for (const Producto of listaProductos)
    console.log(Producto.conIva());


function ordenarProductos(propiedad, orden = "") {

    let key = propiedad

    listaProductos.sort(function (a, b) {

        if (typeof (a[key]) == "string") {

            a = a[key].toUpperCase()
            b = b[key].toUpperCase()

        } else {

            a = a[key]
            b = b[key]
        }

        if (orden == "descendente") {

            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;

        } else {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        }

    });
}


ordenarProductos("valor")
console.log(listaProductos)
*/




/*
            //PRACTICA CLASE 6 ARRAYS
            let carritoTienda = [];
            const arrayProducto1 = ["N01","Nuez mariposa blanca","100gr",135];
            const arrayProducto2 = ["A01","Almendras nonpareil","100gr",140];
            const arrayProducto3 = ["M01","Mix energético","100gr",70];
            const arrayProducto4 = ["M02","Mix tropical","100gr",80];
            let arrayProducto5 = ["M03","Mix sin pasas","100gr",100];
            const arrayCliente = ["Nombre","Apellido","DNI"];

            console.log(typeof(arrayProducto5));
            arrayProducto5 = arrayProducto5.join("_");
            console.log(arrayProducto5);

            console.log(typeof(arrayCliente));
            console.log(arrayProducto3.toString());


            console.log(arrayProducto1.length);
            for (let i=0; i < arrayProducto1.length; i++){
                alert(arrayProducto1[i]);
            }

            arrayCliente.push("Genero");
            arrayCliente.unshift("edad");
            console.log(arrayCliente);

            carritoTienda.push(arrayProducto1);
            carritoTienda.push(arrayProducto4);
            console.log(carritoTienda);

            console.log(arrayProducto2.concat(arrayProducto1))

            let corte1 =arrayProducto2.slice(0,1);
            let corte2 = arrayProducto2.slice(1,4);
            console.log(corte1);
            console.log(corte2);
            console.log(corte1.concat(corte2));
        */