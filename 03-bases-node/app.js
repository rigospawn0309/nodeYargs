const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs')

console.clear();

crearArchivo( argv.b, argv.l, argv.h) 
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))

    // Me creo un metodo para obtener la tabla con los arg dados por consola
    // He añadido la libreria color para probarla