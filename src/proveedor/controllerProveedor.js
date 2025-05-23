import {pool} from '../DB/conecction.js'


export const addProveedor= async(req,res)=>{
    const {nombre_proveedor,direccion,celular} = req.body
    try {
        const [rows] = await pool.query('insert into proveedor (nombre_proveedor,dreccion,celular) values(?,?,?)',[nombre_proveedor,direccion,celular])
        if (rows.affectedRows===1) {
            res.status(200).json({
                msg:'creado',
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'proveedor no creado',
                status:'204'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'error en el servidor',
            status:'500'
        })
    }
}

export const getProveedor= async(req,res)=>{
    try {
        const [rows] = await pool.query('select cod_proveedor,nombre_proveedor,direccion,celular')
        if (rows) {
            res.status(200).json({
                msg:'ok',
                datos:rows,
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'no hay proveedores',
                status:'204'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'error en el servidor',
            status:'500'
        })
    }
}