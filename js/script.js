$(function() {
    'use strict';

    $('main').on({
        click: function() {
            $(this).addClass('fondorojo activo');
        },
        mouseenter: function() {
            // Aplicamos la clase fondorojo que esta en CSS
            $(this).addClass('fondorojo');
        },
        mouseleave: function() {
            $(this).addClass('activo');
        }
    });


});