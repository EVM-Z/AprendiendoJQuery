$(function() {
    'use strict';

    // Con on esperamos un evento
    // $('div.logo img').on('click', function() {
    // console.log("Has hecho click en el logo");

    // This es el elemento que causa el evento
    // Hacemos desaparecer el logo
    // $(this).remove();

    // Mouseenter es como el hover en CSS
    // Se activa cuando el mouse pasa sobre el logo
    // $('div.logo img').on('mouseenter', function() {
    //     console.log("Has pasado el mouse sobre el logo");
    // });


    // Mouseleave es cuando esta fuera de un elemento
    // $('div.logo img').on('mouseleave', function() {
    //     console.log("Estas fuera del logo");
    // });


    // Con show en vez de colultar muestra el elemento
    // Anteriormente el elemento debe de estar oculto
    $('#menu').on('click', function() {
        $('#navegacion').show();
    });


});