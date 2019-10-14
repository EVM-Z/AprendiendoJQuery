$(function() {
    'use strict';

    // Cambiando imagen al hacer click
    $('main article:first img').on('click', function() {
        $(this).attr('src', 'img/imagen_2.jpg');
    });



});