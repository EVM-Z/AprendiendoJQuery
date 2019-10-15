$(function() {
    'use strict';

    $('.logo img').on('click', function() {
        // Encojemos el logo por despues de un click y por medio de una animacion
        $(this).animate({ 'width': '200px' }, 1000);
    });

    $('main article img').on('mouseenter', aumentarImagen);
    $('main article img').on('mouseleave', disminuirImagen);

    function aumentarImagen() {
        $(this).animate({ 'width:': '100%' });
    }

    function disminuirImagen() {
        $(this).animate({ 'width': '350px' });
    }


});