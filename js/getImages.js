// // Ejecunta el click automáticamente en el elemento especificado
// // Captura en document...
// const header = document.querySelector("#header");
// header.addEventListener("hello", function(event) { // (1)
//    // alert("Hola desde " + event.target.tagName); // Hola desde H1
//    console.log("Hola desde " + event.target.tagName); // Hola desde H1
//    listFolderFiles();
// });

// // ...Envío en elem!
// let myEvent = new Event("hello", {bubbles: true}); // (2)
// header.dispatchEvent(myEvent);

// // el controlador del documento se activará y mostrará el mensaje.

// ----------------------------------------------------------------
// Creo un arreglo de Objetos con los datos de las imagenes a mostrar en Galería
var images = [{
   nombreImg: "Manos01.png",
   titulo: "Estilo navideño",
   descripcion: "Para celebrar un momento especial, lleno de paz y alegría."
},{
   nombreImg: "Manos02.png",
   titulo: "Basketball",
   descripcion: "Para las amantes del basketball. Este diseño para verse incrible."
},{
   nombreImg: "Manos03.png",
   titulo: "Sofisticado",
   descripcion: "Este estlo, resaltará tus uñas, haciendolas ver sofisticadas y glamorosa."
},{
   nombreImg: "Manos04.png",
   titulo: "Moderno",
   descripcion: "Tener un estilo moderno llamará la atención y tus manos luciran increibles."
},{
   nombreImg: "Pies01.png",
   titulo: "Pies de pricesa",
   descripcion: "Tus pies también pueden lucir diseños hermosos, y verse de forma genial."
}];

const containerCards = document.querySelector(".container__cards");
const modalGallery = document.querySelector(".modal-gallery");

containerCards.innerHTML = "";
modalGallery.innerHTML = "";

for (let i=0; i<images.length; i++) {
   let fileName = images[i].nombreImg;
   let pointPos = fileName.lastIndexOf(".");
   let noExtension = fileName.substring(0, pointPos);

   containerCards.innerHTML = containerCards.innerHTML + `<div class="card border-0">
                                 <div class="cover">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal${noExtension}">
                                       <img src="img/${images[i].nombreImg}" alt="Foto de ${noExtension}">
                                    </a> 
                                 </div>
                                 <div class="description">
                                    <h2>${images[i].titulo}</h2>
                                    <p>${images[i].descripcion}</p>
                                 </div>
                              </div>`

   modalGallery.innerHTML = modalGallery.innerHTML + `<!-- Image ${i+1} -->
                              <div tabindex="-1" aria-labelledby="modal${noExtension}" aria-hidden="true"
                              class="modal fade" id="modal${noExtension}">
                              <div class="modal-dialog modal-dialog-centered">
                                 <img src="./img/${images[i].nombreImg}" alt="Foto de ${noExtension}">
                              </div>
                              </div>`
}