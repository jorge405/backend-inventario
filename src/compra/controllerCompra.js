import {pool} from '../DB/conecction.js'

export const addCompra= async (req,res)=>{
    const date = new Date();

    const dateCurrent=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    try {
        const [rows]= await pool.query('INSERT INTO compra(fecha_compra) VALUES (?)',[dateCurrent])
        if (rows) {
            const IDcompra= rows.insertId;
            res.status(200).json({
                msg:'compra creada',
                status:'ok',
                IDcompra:IDcompra
            })
        }else{
            res.status(500).json({
                msg:'error al crear compra en el servidor',
                status:'error'
            })
        }
    } catch (error) {
        console.log(error)
    }

}