import {pool} from '../DB/conecction.js'



export const getProducto= async (req,res)=>{
    
    try {
        const [rows]= await pool.query('select p.nombre_cientifico,p.nombre_comercial,p.contenido,p.medicion,p.fecha_vencimiento,p.precio_unit,l.laboratorio,pr.presentacion,u.uso,p.estado_int from producto_medicamento as p INNER JOIN laboratorio as l on p.cod_laboratorio=l.cod_laboratorio INNER JOIN presentacion as pr on p.cod_presentacion=pr.cod_presentacion INNER JOIN uso as u on p.cod_uso=u.cod_uso WHERE p.estado_int=1 ')    
        if (rows.length>1) {
            res.status(200).json({
                msg:'ok',
                status:'200',
                datos:rows
            })
        }else{
            res.status(204).json({
                msg:'error',
                status:204
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'error en el servidor',
            status:500
        })       
    }
}

export const addProducto= async (req,res)=>{
    const {nombre_cientifico,nombre_comercial,contenido,medicion,fecha_vencimiento,precio_unit,cod_laboratorio,cod_presentacion,cod_uso,estado_int} = req.body
    try {
        const [rows] = await pool.query(`insert into producto_medicamento (nombre_cientifico,nombre_comercial,contenido,medicion,fecha_vencimiento,precio_unit,cod_laboratorio,cod_presentacion,cod_uso,estado_int) values (?,?,?,?,?,?,?,?,?)`,[nombre_cientifico,nombre_comercial,contenido,medicion,fecha_vencimiento,precio_unit,cod_laboratorio,cod_presentacion,cod_uso,estado_int])
        if (rows.affectedRows===1) {
            res.status(200).json({
                msg:'creado',
                status:'200'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'error en el servidor',
            status:'500',
        })
    }
}