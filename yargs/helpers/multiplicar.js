const fs = require('fs');
const colors = require('colors')
//Aquí se crea la funcion asincrona para multiplicar que recibe parametros desde el app.js

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) =>{

    try{
        let salida = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x  ${i} = ${base * i}\n`;
        }
        if(listar){
            console.log(salida);
            console.log(listar);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

    
}


module.exports = {
    crearArchivo
}