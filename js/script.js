$(function() {
    'use strict';

    $('div.logo img').on('click', cargarAjax);

    function cargarAjax() {
        $.ajax('promociones.txt', {
            success: agregarContenido,
            type: 'GET',
            datatype: 'text'
        });
    }

    // Mostramos el contenido del txt al hacer click en el logo
    function agregarContenido(data, status, jqxhr) {
        // Donde mandamos los datos
        $('aside').text(data);
        // Mostramos en consola
        console.log(status);
    }

});