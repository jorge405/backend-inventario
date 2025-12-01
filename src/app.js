import express from 'express';
import cors from 'cors';
import {PORT} from './config.js';
import routerUser from './usuarios/routerUsuario.js';
import routerProducto from './producto/routerProducto.js';
import routerProveedor from './proveedor/routerProveedor.js';
import routerCompra from './compra/routerCompra.js'
const app= express();



app.get('/',(req,res)=>{
    res.send('hello word backend inventario')
})
app.use(cors()) // arreglar el problema de especificar problema de cors en especifico
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/inventario',routerUser)
app.use('/inventario',routerProducto)
app.use('/inventario',routerProveedor)
app.use('/inventario',routerCompra)
app.set('port',PORT)


export default app;