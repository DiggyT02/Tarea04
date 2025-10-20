const db = require('../config/db')


// Crear animal 
exports.crearAnimal = async (req, res) => {
    const { nombre, especie, edad } = req.body;

    if (!nombre || !especie || !edad) {
        return res.status(400).json({ error: 'Falta completar los campos' });
    }
    const sql = 'INSERT INTO animales (nombre, especie, edad) VALUES (?, ?, ?)';
    
    try {
        
        const [result] = await db.query(sql, [nombre, especie, edad]);
        
        res.status(201).json({ id: result.insertId, nombre, especie, edad,
             mensaje: 'Registrado correctamente' });
    } catch (e) {
        console.error(e)
        res.status(500).json({ error: 'Error al crear el animal' });
    }
}

// Obtener todos los animales 
exports.obtenerAnimales = async (req, res) => {
    const sql = "SELECT id, nombre, especie, edad FROM animales"
    try {
    
        const [animales] = await db.query(sql)
        res.status(200).json(animales);
    } catch (e){
        console.error(e)
        res.status(500).json({ error: 'Error al obtener los animales' });
    }
}

// Obtener animal por ID 
exports.obtenerAnimalesPorId = async (req, res) => {
    const {id} = req.params
    const sql ="SELECT id, nombre, especie, edad FROM animales WHERE id = ?"

    try {
        
        const [animales] = await db.query(sql, [id])

        if (animales.length == 0 ){
            return res.status(404).json({
                mensaje: 'No encontramos el animal'})
        }

        res.status(200).json(animales[0])

    }catch(e){
        console.error(e)
        res.status(500).json({mensaje: 'Error interno en el servidor'})
    }
}

    //Actualizar Animal-
  
exports.actualizarAnimal = async (req, res) => {
 
  const { id } = req.params

  
  const { nombre, especie, edad } = req.body

  
  if (!nombre || !especie  || !edad){
    return res.status(400).json({mensaje: 'Falta completar los campos'})
  }

  let sqlParts = []   //campos que sufrirán actualización
  let values = []     //valores para los campos

  if (nombre){
    sqlParts.push('nombre = ?')
    values.push(nombre)
  }

  if (especie){
    sqlParts.push('especie = ?')
    values.push(especie)
  }

  if (edad){
    sqlParts.push('edad = ?')
    values.push(edad)
  }

  if (sqlParts.length == 0){
    return res.status(400).json({mensaje: 'No hay datos por actualizar'})
  }

  values.push(id)
  const sql = `UPDATE animales SET ${sqlParts.join(', ')} WHERE id = ?`

  try{
    const [result] = await db.query(sql, values)

    if (result.affectedRows === 0){
      return res.status(404).json({mensaje: 'No encontramos el animal con el ID'})
    }

    res.status(200).json({mensaje: 'Actualizado correctamente'})
  }
  catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno en el servidor'})
  }
}

exports.eliminarAnimal = async (req, res) => {
  const { id } = req.params
  const sql = "DELETE FROM animales WHERE id = ?" 

  try{
    const [result] = await db.query(sql, [id])

    if (result.affectedRows === 0){
      return res.status(404).json({mensaje: 'Animal no encontrado para eliminar'})
    }

    res.status(200).json({mensaje: 'Eliminado correctamente'})
  }catch(e){
    console.error(e)
    res.status(500).json({mensaje: 'Error interno del servidor'})
  }
}


