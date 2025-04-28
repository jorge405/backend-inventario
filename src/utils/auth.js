import jwt from 'jsonwebtoken';

export const verifyToken =(req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(403).json({message:'token no proporcionado'})
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({message:'token no valido o expirado'})
        }
        req.user=payload;
        next();
    })
}