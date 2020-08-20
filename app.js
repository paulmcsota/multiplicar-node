const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
   case 'listar':
      listarTabla(argv.base, argv.limite);
      break;
   case 'crear':
      crearArchivo(argv.base, argv.limite)
         .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
         .catch(error => console.log(error));
      break;
   default:
      console.log('Comando no reconocido');
      break;
}

// console.log(argv);

// let argv1 = process.argv;
// let parametro = argv1[2];
// let base = parametro.split('=');
