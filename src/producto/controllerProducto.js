import {pool} from '../DB/conecction.js'



export const getProducto= async (req,res)=>{
    
    try {
        const [rows]= await pool.query('select * from vista_producto_medicamento')    
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

export const addStock= async(req,res)=>{
    const {cantidad_inicial,stock,fecha_registro} = req.body;
    try {
        const [rows]= await pool.query('insert into stock_producto (cantidad_inicial,stock,fecha_registro) values(?,?,?)',[cantidad_inicial,stock,fecha_registro])
            if (rows.affectedRows===1) {
                res.status(200).json({
                    msg:'creado',
                    status:'200'
                })    
            }else{
               res.status(204).json({
                msg:'stock no creado',
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

export const addLaboratorio= async(req,res)=>{
    try {
        const {laboratorio,estado_int} = req.body
        const [rows]= await pool.query('insert into laboratorio(laboratorio,estado_int) values (?,?)',[laboratorio,estado_int])
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
        const {presentacion,estado_int} = req.body;
        const [rows]= await pool.query('insert into presentacion(presentacion,estado_int) values(?,?)',[presentacion,estado_int])
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
        const {uso,estado_int}=req.body;
        const [rows] = await pool.query('insert into uso(uso,estado_int) values(?,?)',[uso,estado_int])
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

