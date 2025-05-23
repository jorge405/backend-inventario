import express from 'express'
import { verifyToken } from '../utils/auth.js'
import {addProveedor,getProveedor} from '../proveedor/controllerProveedor.js'

const routerProveedor = express.Router()

routerProveedor.get('/getProveedor',verifyToken,getProveedor);
routerProveedor.post('/addProveedor',verifyToken,addProveedor);




export default routerProveedor;