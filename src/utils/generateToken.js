import jwt from 'jsonwebtoken';

const secretkey = 'dbinventario'

export const generateToken = (uid,us,pass) => {
    const expiresIn= 60*15;
    try {
        const token = jwt.sign({uid,us,pass},secretkey,{expiresIn});
        return {token,expiresIn};    
    } catch (error) {
        console.log('error al generar el token:',error)
    }
    
}