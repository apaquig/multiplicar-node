const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multilicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}


//let base = '5';

// let arvg2 = process.argv;
// console.log('Limite ' + argv.limite);
// let parametro = arvg[2];
// let base = parametro.split('=')[1]
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`)).catch(err => {
//         console.log(err);
//     });