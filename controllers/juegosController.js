exports.crearJuego = async (req, res) => {
    
    console.log(req.body);
    res.json({ msg: 'Creando juego' });
};


exports.obtenerJuegos = async (req, res) => {

    res.json({ msg: 'Obteniendo todos los juegos ' });

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