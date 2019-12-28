const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('====================='.green);
    console.log(`Tabla de ${base}`.red);
    console.log('====================='.blue);
    let data = '';

    for (let i = 1; i <= limite; i++) {
        //console.log(`${base} X ${i} = ${base*i}`);
        data += `${base} X ${i} = ${base*i} \n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduciod ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} X ${i} = ${base*i}`);
            data += `${base} X ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};