document.addEventListener("DOMContentLoaded", function () {



    if (localStorage.getItem('loginExitoso') === 'true') {

        var enlace = document.querySelector('.login');
        var data = localStorage.getItem("usuario");
        if (enlace) {
            enlace.textContent = data;

            enlace.addEventListener('click', function (event) {
                event.preventDefault();

            });
        };




    };
});

