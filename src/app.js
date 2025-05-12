import express from 'express';
import cors from 'cors';
import {PORT} from './config.js';
import routerUser from './usuarios/routerUsuario.js';
const app= express();



app.get('/',(req,res)=>{
    res.send('hello word backend inventario')
})
app.use(cors()) // arreglar el problema de especificar problema de cors en especifico
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/inventario',routerUser)
app.set('port',PORT)


export default app;