
document.addEventListener("DOMContentLoaded", function () {
  const menuDesplegable = document.getElementById("menuDesplegable");
  const hamburguerIcon = document.querySelector(".subheader_hamburguer img");
  const subheader = document.querySelector(".subheader");

  hamburguerIcon.addEventListener("click", () => {
    toggleMenu();
  });

  function toggleMenu() {
    if (menuDesplegable.style.display === "flex") {
      menuDesplegable.style.display = "none";
    } else {
      menuDesplegable.style.display = "flex";
      createCloseIcon();
    }
  }

  function createCloseIcon() {
    const closeIcon = document.createElement("span");
    closeIcon.classList.add("close-icon");
    closeIcon.innerHTML = "&times;";
    document.body.appendChild(closeIcon);

    closeIcon.addEventListener("click", () => {
      menuDesplegable.style.display = "none";
      closeIcon.style.display = "none";
    });
  }

  window.addEventListener("scroll", () => {
    const subheaderHeight = subheader.offsetHeight;
    const scrollY = window.scrollY;
    const menuDesplegableHeight = menuDesplegable.offsetHeight;

    if (scrollY > subheaderHeight) {
      menuDesplegable.style.position = "fixed";
      menuDesplegable.style.top = subheaderHeight + 10 + "px";
      menuDesplegable.style.marginTop = subheaderHeight + "px";
      menuDesplegable.style.zIndex = "2";
    } else {
      menuDesplegable.style.position = "absolute";
      menuDesplegable.style.top = subheaderHeight + 10 + "px";
      menuDesplegable.style.marginTop = "0";
      menuDesplegable.style.zIndex = "1";
    }
  });
});
