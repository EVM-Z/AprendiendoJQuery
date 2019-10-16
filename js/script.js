$(function() {
    'use strict';

    // Mostramos el primer articulo
    $('.nuestros-servicios div:first').show();

    // Remarcamos la primera seccion en la que estamos
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTaps);

    function mostrarTaps() {
        // Remueve el ultimo click en la seleccion
        $('.servicios nav a').removeClass('activo');

        // Conserva el ultimo elemento resaltado
        $(this).addClass('activo');

        // Tomamos el valor del ultimo click con this
        var enlace = $(this).attr('href');
        // Ocultamos el div que NO se le haiga hecho click
        $('.nuestros-servicios div').fadeOut();
        // Mostramos la informacion
        $(enlace).fadeIn();

        // Evitamos el movimiento de pagina en cada click
        return false;
    }

});