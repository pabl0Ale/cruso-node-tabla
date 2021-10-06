const fs = require('fs');

const crearArchivo = async (base = 5, listar= false, hasta=10) =>{

    try {
        let salida = '';
        ruta = "tabla"

        for (let i = 0; i <= hasta ; i++) {
            salida += ` ${base * i} \n`;
        }
        
        
        fs.writeFileSync(`./salida/${ruta} ${base}.txt`,  salida, );

        if ( listar ) {
            console.log(salida);
        }
        
        return `${ruta} ${ruta}`
        
    } catch (error) {
        return "hubo un error"
    }
}





module.exports= {
    crearArchivo
}

