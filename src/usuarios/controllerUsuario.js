import {pool} from '../DB/conecction.js'; 
import { generateToken } from '../utils/generateToken.js';


export const authUser= async(req,res)=>{
    const {usuario,pass}= req.body;
    try {   
        const [rows]= await pool.query('SELECT cod_usuario,usuario,pass FROM usuario WHERE usuario=? AND pass=?',[usuario,pass]);
        if(rows.length===0){
            return res.status(401).json({message:'usuario o contraseña incorrectos'})
        }else{
            const {cod_usuario}= rows[0];   
            const {token,expiresIn} = generateToken(cod_usuario,usuario,pass);
                    return res.status(200).json({
                        msg:'contraseña y usuario correcto',
                        token,
                        expiresIn
                    })    
        }
    } catch (error) {
        console.log('problemas al autenticar el usuario: ',error)
        return res.status(500).json({message:'error en el servidor espere un momento'})
    }
}

export const getUsuarios = async(req,res)=>{
    try {
        
        const [rows]= await pool.query('SELECT * FROM usuario WHERE estado_int=1')    
        console.log(rows)
        res.status(200).json(rows);
    } catch (error) {
        console.log('problemas al obtener los usuarios:',error)
        res.status(500).json({message:'error en el servidor espere un momento'})
    }
}

export const addUser= async(req,res)=>{

    try {
        const {usuario,pass,estado_int} = req.body
        const [rows] = await pool.query('INSERT INTO usuario(usuario,pass,estado_int) VALUES(?,?,?)',[usuario,pass,estado_int])
        if(rows.affectedRows===1){
            res.status(200).json({message:'usuario agregado correctamente'})    
        }
        
    } catch (error) {
        console.log('problemas al agregar el usuario:', error)
        res.status(500).json({message:'error en el servidor espere un momento'})        
    }
}


export const updateUser= async(req,res)=>{
     const {id}=req.params;
     const {usuario,pass}=req.body;   
    try {
        const [rows]=await pool.query('UPDATE usuario SET usuario= IFNULL(?,usuario), pass= IFNULL(?,pass) WHERE cod_usuario=?',[usuario,pass,id])
        if(rows.affectedRows===1){
            res.status(200).json({message:'usuario actualizado correctamente'})
        }
    } catch (error) {
        console.log('problemas al actualizar el usuario:', error)
        res.status(500).json({message:'error en el servidor espere un momento'})
    }
}

export const deleteUser= async(req,res)=>{
    const {id}=req.params;
    const {estado_int}=req.body;
    try {
        const [rows]=await pool.query('UPDATE usuario SET estado_int= IFNULL(?,estado_int) WHERE cod_usuario=?',[estado_int,id])
        if(rows.affectedRows===1){
            res.status(200).json({message:'usuario inhabilitado correctamente'})
        }
        
    } catch (error) {
        console.log('problemas al inhabilitar el usuario:', error)  
        res.status(500).json({message:'error en el servidor espere un momento'})
    }
}