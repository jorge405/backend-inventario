import {pool} from '../DB/conecction.js'; 



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
        const {usuario,pass} = req.body
        const [rows] = await pool.query('INSERT INTO usuario(usuario,pass,estado_int) VALUES(?,?,1)',[usuario,pass])
        
    } catch (error) {
        
    }
}