import express from 'express'
import { verifyToken } from '../utils/auth.js'
import {getProducto,addProducto} from '../producto/controllerProducto.js'

const routerProducto= express.Router();


routerProducto.get('/getProducto',verifyToken,getProducto)
routerProducto.post('/addProducto',verifyToken,addProducto)

export default routerProducto;