var socket = io();



var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario');
}


var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};


socket.emit('entrarChat', usuario, function(resp) {
    console.log('Usuarios conectados', resp);
});


// Enviar información
// socket.emit('enviarMensaje', {
//     usuario: 'Edisson',
//     mensaje: 'Hola mundo'
// }, function(resp) {
//     console.log('Respuesta server: ', resp);
// });



// socket.on('connect', function() {
//     console.log('Conectado al servidor');

//     socket.emit('entrarChat', usuario, function(resp) {
//         console.log('Usuarios conectados', resp);
//     });

// });



// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     nombre: 'Edisson',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});


// Escuchar cambios de usuarios
// cuando un usuario enttra o sale del chat
socket.on('listaPersona', function(personas) {
    console.log(personas);
});



// Mensaje Privado
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado:', mensaje);
});