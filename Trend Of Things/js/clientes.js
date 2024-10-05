document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.querySelector(".carrusel");
  let currentIndex = 0;

  function avanzar() {
    currentIndex++;
    if (currentIndex >= carrusel.children.length - 4) {
      currentIndex = 0;
    }
    actualizarTransform();
  }

  function actualizarTransform() {
    carrusel.style.transform = `translateX(${-currentIndex * 110}px)`;
  }

  setInterval(avanzar, 2000);
});
