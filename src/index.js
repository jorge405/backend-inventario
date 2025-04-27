import app from './app.js'


app.listen(app.get('port'),()=>{
    console.log('aplicacion  backend inventario corriendo en el puerto',app.get('port'))
})
