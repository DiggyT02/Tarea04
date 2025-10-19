const db = require('../config/db')


// Crear animal (CREATE)
exports.crearAnimal = async (req, res) => {
    const { nombre, especie, edad } = req.body;

    if (!nombre || !especie || !edad) {
        return res.status(400).json({ error: 'Falta completar los campos' });
    }
    const sql = 'INSERT INTO animales (nombre, especie, edad) VALUES (?, ?, ?)';
    
    try {
        //const connection = await getConnection();
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

// Obtener animal por ID (READ)
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
