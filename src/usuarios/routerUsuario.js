import express from 'express';
import { getUsuarios,addUser,updateUser,deleteUser,authUser} from '../usuarios/controllerUsuario.js';
const routerUser= express.Router();



routerUser.get('/authUser',authUser);
routerUser.get('/getUser',getUsuarios);
routerUser.post('/addUser',addUser);
routerUser.patch('/updateUser/:id',updateUser);
routerUser.delete('/deleteUser/:id',deleteUser);


export default routerUser;