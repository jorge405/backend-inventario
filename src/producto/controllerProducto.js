import {pool} from '../DB/conecction.js'



export const getProducto= async (req,res)=>{
    
    try {
        const [rows]= await pool.query('select p.cod_producto,p.nombre_cientifico,p.nombre_comercial,p.contenido,p.medicion,p.fecha_vencimiento,p.precio_unit,l.laboratorio,pr.presentacion,u.uso,p.estado_int from producto_medicamento as p INNER JOIN laboratorio as l on p.cod_laboratorio=l.cod_laboratorio INNER JOIN presentacion as pr on p.cod_presentacion=pr.cod_presentacion INNER JOIN uso as u on p.cod_uso=u.cod_uso WHERE p.estado_int=1 ')    
        if (rows) {
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
        const [rows] = await pool.query(`insert into producto_medicamento (nombre_cientifico,nombre_comercial,contenido,medicion,fecha_vencimiento,precio_unit,cod_laboratorio,cod_presentacion,cod_uso,estado_int) values (?,?,?,?,?,?,?,?,?,?)`,[nombre_cientifico,nombre_comercial,contenido,medicion,fecha_vencimiento,precio_unit,cod_laboratorio,cod_presentacion,cod_uso,estado_int])
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

export const addLaboratorio= async(req,res)=>{
    try {
        const {laboratorio} = req.body
        const [rows]= await pool.query('insert into laboratorio(laboratorio) values (?)',[laboratorio])
        if (rows.affectedRows===1) {
            res.status(200).json({
                msg:'creado',
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'no creado',
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

export const addPresentacion = async(req,res)=>{
    try {
        const {presentacion} = req.body;
        const [rows]= await pool.query('insert into presentacion(presentacion) values(?)',[presentacion])
        if (rows.affectedRows===1) {
            res.status(200).json({
                msg:'creado',
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'no creado',
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

export const addUso= async(req,res)=>{
    try {
        const {uso}=req.body;
        const [rows] = await pool.query('insert into uso(uso) values(?)',[uso])
        if (rows.affectedRows===1) {
            res.status(200).json({
                msg:'creado',
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'no creado',
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


export const getLaboratorio = async (req,res)=>{
        
    try {
        const [rows]= await pool.query('select cod_laboratorio,laboratorio from laboratorio where estado_int=1 ')
        if (rows) {
            res.status(200).json({
                msg:'ok',
                datos:rows,
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'ok vacio',
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

export const getPresentacion = async (req,res)=>{
        
    try {
        const [rows]= await pool.query('select cod_presentacion,presentacion from presentacion where estado_int=1 ')
        if (rows) {
            res.status(200).json({
                msg:'ok',
                datos:rows,
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'ok vacio',
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


export const getUso = async (req,res)=>{
        
    try {
        const [rows]= await pool.query('select cod_uso,uso from uso where estado_int=1 ')
        if (rows) {
            res.status(200).json({
                msg:'ok',
                datos:rows,
                status:'200'
            })
        }else{
            res.status(204).json({
                msg:'ok vacio',
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

