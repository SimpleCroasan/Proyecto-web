var datos;
var url_server = "https://api.jsonbin.io/v3/b/6545a83654105e766fcb25de";
var request = new XMLHttpRequest();
request.open("GET", url_server);
request.send();
request.responseType = "json";
request.onload = function () {
    if (request.status === 200) {
        datos = request.response.record;
        console.log(datos);

    } else {
        console.error("Error en la solicitud:", request.status);
    }
};

function login() {



};