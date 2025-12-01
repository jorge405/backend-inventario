import express from 'express'
import { verifyToken } from '../utils/auth.js'
import { addCompra } from '../compra/controllerCompra.js'

const routerCompra= express.Router();

routerCompra.post('/addCompra',verifyToken,addCompra);


export default routerCompra