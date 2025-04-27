import express from 'express';
import { getUsuarios } from '../usuarios/controllerUsuario.js';
const routerUser= express.Router();




routerUser.get('/getUser',getUsuarios)

export default routerUser;