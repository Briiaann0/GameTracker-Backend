
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
   
     res.json({ msg: 'Obteniendo todos los juegos' });
   };


 exports.actualizarJuego = async (req, res) => {
   
      res.json({ msg: 'Actualizando juego' });
};


     exports.eliminarJuego = async (req, res) => {
   
    res.json({ msg: 'Eliminando juego' });
   };
exports.obtenerJuego = async (req, res) => {
   
    res.json({ msg: 'Obteniendo juego específico' });
};