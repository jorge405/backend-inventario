import express from 'express'
import { verifyToken } from '../utils/auth.js'
import {getProducto,addProducto,addLaboratorio,addStock,addPresentacion,addUso,getLaboratorio,getPresentacion,getUso} from '../producto/controllerProducto.js'

const routerProducto= express.Router();


routerProducto.get('/getProducto',verifyToken,getProducto)
routerProducto.post('/addProducto',verifyToken,addProducto)
// adicionales a producto
routerProducto.post('/addStock',verifyToken,addStock)
routerProducto.post('/addLaboratorio',verifyToken,addLaboratorio)
routerProducto.post('/addPresentacion',verifyToken,addPresentacion)
routerProducto.post('/addUso',verifyToken,addUso)
routerProducto.get('/getLaboratorio',verifyToken,getLaboratorio)
routerProducto.get('/getPresentacion',verifyToken,getPresentacion)
routerProducto.get('/getUso',verifyToken,getUso)

export default routerProducto;