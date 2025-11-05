
const Juego = require('../models/Juego'); 

exports.crearJuego = async (req, res) => {

    try {
       
        const juego = new Juego(req.body); 
        
         await juego.save();
       
    res.status(201).json(juego);

    } catch (error) {

        console.error(error);
        res.status(500).send('Hubo un error al crear el juego');
    }
};


exports.obtenerJuegos = async (req, res) => {
    try {
       
 const juegos = await Juego.find();

        res.status(200).json(juegos);
        
    } catch (error) 
    {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los juego');
    }
};


 exports.actualizarJuego = async (req, res) => {
    try {
        const juego = await Juego.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        );
        if (!juego) {
            return res.status(404).json({ msg: 'Juego no encontrado' });
        }
        res.status(200).json(juego);
        
    } catch (error) {

        console.error(error);
        
        res.status(400).send ('Hubo un error al actualizar el juego');
    }
};


    exports.eliminarJuego = async (req, res) => {
    try{
        const juego = await Juego.findByIdAndDelete(req.params.id);
        if (!juego) {
        return res.status(404).json({ msg: 'Juego no encontrado' });
        }
         res.status(200).json({ msg: 'Juego eliminado' });

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al eliminar el juego');
    }
};

exports.obtenerJuego = async (req, res) => {

    try {
        const juego = await Juego.findById(req.params.id);
if (!juego) {
            return res.status(404).json({ msg: 'Juego no encontrado' });
        }

        res.status(200).json(juego); 
    } catch (error) {
        console.error(error);

        res.status(500).send('Hubo un error al buscar el juego');
    }
};