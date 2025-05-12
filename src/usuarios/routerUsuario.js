import express from 'express';
import { getUsuarios,addUser,updateUser,deleteUser,authUser} from '../usuarios/controllerUsuario.js';
import {verifyToken} from '../utils/auth.js'
const routerUser= express.Router();



routerUser.get('/getUser',verifyToken,getUsuarios);
routerUser.post('/authUser',authUser);
routerUser.post('/addUser',verifyToken,addUser);
routerUser.patch('/updateUser/:id',updateUser);
routerUser.delete('/deleteUser/:id',deleteUser);


export default routerUser;