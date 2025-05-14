import express from 'express'
import { verifyToken } from '../utils/auth.js'
import {getProducto,addProducto,addLaboratorio,addPresentacion,addUso} from '../producto/controllerProducto.js'

const routerProducto= express.Router();


routerProducto.get('/getProducto',verifyToken,getProducto)
routerProducto.post('/addProducto',verifyToken,addProducto)
// adicionales a producto
routerProducto.post('/addLaboratorio',verifyToken,addLaboratorio)
routerProducto.post('/addPresentacion',verifyToken,addPresentacion)
routerProducto.post('/addUso',verifyToken,addUso)


export default routerProducto;