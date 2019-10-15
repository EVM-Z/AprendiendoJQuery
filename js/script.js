$(function() {
    'use strict';

    var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];

    $.each(proximosViajes, function(i, v) {
        // i=Indice del arreglo empezando con 0
        // v=Valor del arreglo empezando con Londres
        // console.log(v);

        // Imprimos los valores debado del aside del arreglo declarado
        if (i == 0) {
            $('aside').append('<h2>Próximos Viajes</h2>');
        }
        $('aside').append('<li>' + v + '</li>');
    });

    var viajesPorFecha = {
        primero: 'Londres',
        segundo: 'Valencia',
        tercero: 'Madrid',
        cuarto: 'Paris',
        quinto: 'Milan'
    };

    console.log(viajesPorFecha);

    // Imprimimos tanto el indice como el valor del arreglo
    $.each(viajesPorFecha, function(i, v) {
        $('aside').append('<li>' + i + ' - ' + v + '</li>');
    });

});