import express from 'express'
import { verifyToken } from '../utils/auth.js'
import {getProducto} from '../producto/controllerProducto.js'

const routerProducto= express.Router();


routerProducto.get('/getProductos',verifyToken,getProducto)


export default routerProducto;