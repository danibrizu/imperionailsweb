// function readFile (file) {
//     const reader = new FileReader();
//     reader.addEventListener('loadend', (event) => {
//         img.src = event.target.result;
//         const result = event.target.result;
//         console.log(result);
//     });
//     console.log(file);
//     console.log(self.location.host + file);
//     reader.readAsText(self.location.host + file);
// }

// var reader = new FileReader();
// var fileToRead = self.location.href; //document.querySelector('input').files[0];
// let posicionUltimaBarraMenu = fileToRead.lastIndexOf("/");
// let rutaRelativaMenu = fileToRead.substring(0, posicionUltimaBarraMenu + 1 );

// // attach event, that will be fired, when read is end
// reader.addEventListener("loadend", function() {
//    // reader.result contains the contents of blob as a typed array
//    // we insert content of file in DOM here
//    document.getElementById('header').innerText = reader.result;
// });

// // start reading a loaded file
// console.log(`${rutaRelativaMenu}menu.txt`);
// reader.readAsText(URL.createObjectURL(`${rutaRelativaMenu}menu.txt`));

// const menuFile = readFile("/menu.txt");
// let menu = document.querySelector(".header");
// menu.innerHTML = menuFile //htmlFileMenu.responseText

// ******************************************************************************************
// let fs = require('fs');
// let buffer = fs.readFileSync("../menu.txt");
// let texto = buffer.toString();
// console.log(texto);

// *********************************************************************************************

$(document).ready(function() {
    // Utiliza AJAX para cargar el contenido del archivo menu.html dentro del elemento #menuContainer
    $("#header").load("./menu.html");
    console.log("Menu cargado");
    $("#footer").load("./footer.html");
    console.log("Footer cargado");
});

// Pido la carga del archivo menu.html y espero a que termine el proceso
// Utilizo una funcion async await

// async function loadHeader () {
// await $(document).ready(function() {
//     // Utiliza AJAX para cargar el contenido del archivo menu.html dentro del elemento #menuContainer
//     $("header").load("../menu.html");
//     console.log("Menu cargado");
//     getPath();
// });
// }

// function getHeader () {
//     const header = fetch("../menu.html")
//     .then((response) => getPath())
//     .catch(error => console.log(error))
// }

// function getPath () {
// // Obtengo el nombre del archivo html
// let rutaAbsoluta = self.location.href;
// let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
// let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
// console.log(rutaRelativa);

// // Selecciono los elmento del menu y le quito la clase focus
// let navLinkClick = document.querySelectorAll(".nav-link");
// console.log(navLinkClick)
// for (i = 0; i < navLinkClick.length; i++) {
//     navLinkClick[i].classList.remove("focus");
// }

// // Asigno la clase focus al menu correspondiente en función al archivo html que se esta mostrando
// switch (rutaRelativa) {
//     case "index.html":
//         navLinkClick[0].classList.add("focus");
//         break;
//     case "nosotros.html":
//         navLinkClick[1].classList.add("focus");
//         break;
//     case "galeria.html":
//         navLinkClick[2].classList.add("focus");
//         break;
//     case "blog.html":
//         navLinkClick[3].classList.add("focus");
//         break;
//     case "carrito.html":
//         navLinkClick[4].classList.add("focus");
//         break;
//     case "contacto.html":
//         navLinkClick[5].classList.add("focus");
//     break;
// }
// };

// loadHeader();
