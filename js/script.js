$(function(){
    'use strict';

    // Remueve el primer elemento del DOM
    $('main article:first').remove();

    // Clonamos un elemento
    var copia=$('main article:last').clone();
    // Lo colocamos en el elemento main, que es el padre de los article
    // append lo agrega al final
    // $('main').append(copia);

    // prepend lo agrega el inicio
    // $('main').prepend(copia);

    $(copia).appendTo('main');
});