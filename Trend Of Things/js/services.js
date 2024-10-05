document.addEventListener("DOMContentLoaded", function () {
  // Obtén todas las imágenes
  var imagenes = document.querySelectorAll(".seccion img");

  // Recorre cada imagen y agrega los eventos
  imagenes.forEach(function (imagen) {
    // Guarda la ruta de la imagen original
    var imagenOriginal = imagen.src;

    // Extrae el nombre del archivo de la ruta original
    var nombreArchivo = imagenOriginal.substring(imagenOriginal.lastIndexOf("/") + 1);

    // Construye la ruta de la segunda imagen
    var segundaImagen = "../img/servicios/" + nombreArchivo.replace("1.png", "2.png");

    // Agrega el evento cuando el ratón está encima
    imagen.addEventListener("mouseover", function () {
      // Aplica la transición solo durante el cambio de imagen
      imagen.style.transition = "transform 0.3s";
      imagen.style.transform = "rotate(360deg)";

      // Cambia la imagen al otro estado después de un breve período
      setTimeout(function () {
        imagen.src = segundaImagen;
      }, 150); // Ajusta el tiempo según tus necesidades
    });

    // Agrega el evento cuando el ratón deja de estar encima
    imagen.addEventListener("mouseout", function () {
      // Vuelve a la imagen original con la rotación inicial
      imagen.style.transition = "transform 0.3s";
      imagen.style.transform = "rotate(0deg)";

      // Cambia la imagen al estado original después de un breve período
      setTimeout(function () {
        imagen.style.transition = "";
        imagen.src = imagenOriginal;
      }, 50);
    });
  });
});
