//Se importa la libreria express
const express = require('express');
//se genera objeto con express
const app = express();
//directorio publico
app.use(express.static(__dirname + '/public'));
//arrancar el servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto tcp 3000')
});