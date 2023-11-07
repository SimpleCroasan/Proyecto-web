var datos;


var url_server = "https://api.jsonbin.io/v3/b/6545a83654105e766fcb25de";
var request = new XMLHttpRequest();




request.open("GET", url_server);
request.send();
request.responseType = "json";
request.onload = function () {
    if (request.status === 200) {
        datos = request.response.record;


    } else {
        console.error("Error en la solicitud:", request.status);
    }
};

function cambios() {


    // Este código se ejecutará cuando se haya cargado todo el contenido de la página
    document.addEventListener("DOMContentLoaded", function () {
        // Verifica si el botón ha sido presionado
        if (localStorage.getItem('botonPresionado') === 'true') {
            // Si el botón ha sido presionado, cambia el texto del enlace
            var enlace = document.querySelector('.login');
            if (enlace) {
                enlace.textContent = "Hola";
            }

            // Luego, borra la información del botón presionado del almacenamiento local
            localStorage.removeItem('botonPresionado');
        }

        // Busca el botón en la página actual y agrega un escuchador de eventos
        var boton = document.querySelector('input[name="submit2"]');
        if (boton) {
            boton.addEventListener('click', function () {
                // Almacena la información de que el botón ha sido presionado
                localStorage.setItem('botonPresionado', 'true');
            });
        }
    });


};





function login() {

    let usuario = document.getElementById("Usuario");
    let contra = document.getElementById("passw")
    let contador = 0;

    for (let i = 0; i < datos.length; i++) {


        if (datos[i].email == usuario.value && datos[i].Password == contra.value) {
            contador++;
            localStorage.setItem('loginExitoso', 'true');
            localStorage.setItem('usuario', datos[i].User);




        };
    };


    document.querySelector('form').addEventListener('submit', function (event) {
        if (contador == 0) {
            alert("Datos incorrectos");
            event.preventDefault();
        };
    });




};


