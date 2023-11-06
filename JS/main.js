
function logout() {


    localStorage.removeItem("loginExitoso");
    localStorage.removeItem("usuario");
    location.reload();








};






document.addEventListener("DOMContentLoaded", function () {



    if (localStorage.getItem("loginExitoso") === "true") {

        var enlace = document.querySelector(".login");
        var data = localStorage.getItem("usuario");
        if (enlace) {
            enlace.textContent = data;

            enlace.addEventListener('click', function (event) {
                event.preventDefault();

            });


            var log = document.querySelector(".listaLogin");


            var nuevoElemento = document.createElement("li");
            nuevoElemento.className = "cierre";
            var texto = document.createTextNode("Cerrar sesion ");
            var referencia = document.createElement("a");
            referencia.appendChild(texto);
            referencia.href = "javascript:void(0); "
            referencia.onclick = logout;
            nuevoElemento.appendChild(referencia);


            var nuevaLista = document.createElement("ul");

            nuevaLista.className = "menuVertical";
            nuevaLista.appendChild(nuevoElemento);
            log.appendChild(nuevaLista);










        };




    };
});


