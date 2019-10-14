$(function() {
    'use strict';

    // Remarcamos el logo con borde amarillo
    $('div.logo img').addClass('activo');

    // Mostramos el menu de navegacion
    $('.navegacion').show();

    // Aplicamos el marco al primer articulo
    $('main article:first').addClass('activo');

    $('.navegacion ul li a').on('click', function(e) {
        // Quitamos la clase de saraltado amarillo del ultimo click
        $('.navegacion ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');
    });

});