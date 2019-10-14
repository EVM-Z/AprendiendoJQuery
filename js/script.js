$(function() {
    'use strict';

    $('.navegacion').show();

    // Cambiamos el tamaño del logo
    $('.logo img').css({ 'width': '200px' });

    // Cambiamos el color de los titulos de los articulos
    $('main article h2').css({ 'color': '#db008d' });

    // Cambiamos las caracteristicas del aside
    $('aside').css({
        'background-color': '#e1e1e1',
        'text-transform': 'uppercase',
        'padding': '20px'
    });

    // Cambiamos el color de la barra de navegacion cuando el mouse pasa
    $('.navegacion ul li a').on('mouseenter', cambiarColor);

    function cambiarColor() {
        $('.navegacion').css('brackground-color', 'red');
    }


});