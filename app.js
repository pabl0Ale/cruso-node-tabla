const { crearArchivo } = require ('./helpers/multiplicar')
const argv = require('./config/yargs')




crearArchivo(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log( nombreArchivo, "crado" ))
    .catch  ( err => console.log( err ));
