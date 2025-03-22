document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); // Botón para abrir el menú
    const menuLateral = document.getElementById("menu-lateral"); // Menú lateral
    const cerrarMenuLinks = document.querySelectorAll(".cerrar-menu"); // Enlaces para cerrar el menú

    // Función para abrir/cerrar el menú
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el click se propague al documento
        menuLateral.classList.toggle("menu-activo");
        document.body.classList.toggle("menu-abierto");
    });

    // Cerrar el menú si el usuario hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menuLateral.contains(event.target) && !menuToggle.contains(event.target)) {
            menuLateral.classList.remove("menu-activo");
            document.body.classList.remove("menu-abierto");
        }
    });

    // Cerrar el menú al hacer clic en los enlaces de iniciar sesión o registrarse
    cerrarMenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuLateral.classList.remove("menu-activo");
            document.body.classList.remove("menu-abierto");
        });
    });
});