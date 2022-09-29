// const productos = [
//     { nombre: "Volante", precio:12000},
//     { nombre: "Butaca", precio:28000},
//     { nombre: "Selectora", precio:46000},
//     { nombre: "Llantas", precio:60000},
// ];
// let carrito= []

// let btnComprar = document.getElementById("btnComprar")
// btnComprar.addEventListener ("click", clicked )

// function clicked() {alert("Usted esta por comprar")}

// let seleccion = prompt ("Hola ¿Desea comprar algun producto si o no?");

// while(seleccion != "si" && seleccion != "no"){
//     alert("Por favor ingrese si o no")
//     seleccion = prompt ("Hola ¿Desea comprar algun producto si o no?")
// }
     
// if (seleccion == "si"){
//     alert("Estos son nuestros productos disponibles")
//     let todosLosProductos = productos.map(
//     (producto) => producto.nombre + " " + "$"+ producto.precio 
//     );
//     alert(todosLosProductos.join(" - "))
// } else if(seleccion=="no"){
//     alert("Muchas gracias, gracias por visitar nuestro sitio")
// }

// while (seleccion != "no"){
// let producto = prompt("Agrega un  producto a tu carrito!");
// let precio= 0

// if(producto =="Volante" || producto =="Butaca" || producto =="Selectora"|| producto == "Llantas") {
// switch(producto) {
//   case "Volante":
//     precio = 12000;
//     break;
//   case "Butaca":
//     precio = 12000;
//     break;
//   case "Selectora":
//     precio = 12000;
//     break;
//   case "Llantas":
//     precio = 12000;
//     break;
//     default:
//     break;
// }
// let unidades = parseInt (prompt("Cuantas unidades quiere llevar?"))

//     carrito.push({producto, unidades, precio})
//     console.log(carrito)
// }
// else {
// alert("No tenemos ese producto")
// }

// let seleccion = prompt("Desea seguir comprando?")

// while (seleccion == "no"){
// alert("Gracias por la compra!")

// carrito.forEach ((carritoFinal) => {
// console.log(`Producto=${carritoFinal.producto},Unidades + " "  ${carritoFinal.unidades},Total a pagar ${carritoFinal.unidades*carritoFinal.precio}`)})
// break;
// }}

