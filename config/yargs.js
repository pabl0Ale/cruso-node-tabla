const  argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    })
                    .check((argv, options) =>{
                        if ( isNaN( argv.b ) ) {
                            throw 'la base debe ser un numero'
                        }

                        return true;
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: false
                    })
                    .check((argv, options) =>{
                        if ( isNaN( argv.h ) ) {
                            throw 'la base debe ser un numero'
                        }

                        return true;
                    })
                    .option('l', {
                        alias:'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false
                    })
                    .argv

module.exports = argv;