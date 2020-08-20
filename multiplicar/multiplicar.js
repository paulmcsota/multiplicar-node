// requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
   return new Promise((resolve,reject) => {

      if (!Number(base)) {
         reject('El valor de la base no es un número.');
         return;
      }

      let data = '';

      for (let index = 1; index <= limite; index++) {
         data += `${base} x ${index} = ${base*index}\n`;   
      }
      
      fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
         if (err) {
            reject(err);
         } else {
            resolve (`tabla-${base}-al-${limite}.txt`);
         }
      });

   });
}

let listarTabla = (base, limite = 10) => {
   console.log('================================'.blue);
   console.log(`========tabla de ${base}========`.blue);
   console.log('================================'.blue);
   if (!Number(base)) {
      reject('El valor de la base no es un número.');
      return;
   }

   for (let index = 1; index <= limite; index++) {
      console.log(`${base} x ${index} = ${base*index}\n`);   
   }
}

module.exports = {
   crearArchivo,
   listarTabla
}

