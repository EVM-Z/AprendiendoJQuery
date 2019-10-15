$(function() {
    'use strict';

    // Escondemos el primer articulo al hacer click en el logo
    $('.logo img').click(function() {
        $('main article:first').slideUp(1000);
    });

    // Escondemos el primer articulo y lo volvemos a aparecer con el aside que esta a la derecha
    $('aside').click(function() {
        $('main article:first').slideDown(1000);
    });

});