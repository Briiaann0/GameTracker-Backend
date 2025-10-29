
const mongoose = require('mongoose');


const JuegoSchema= mongoose.Schema ({

    titulo:   { 
        type: String,
        required: true,
        trim: true
    },

    genero:  {   type: String, trim: true },
     plataforma: { type: String, trim: true },
    añoLanzamiento: { type: Number }, 
    desarrollador: { type: String }, 

    imagenPortada: { type: String, default:'' },
    descripcion: { type: String },
    completado: { type: Boolean, default: false }, 
    fechaCreacion: { type: Date, default: Date.now() }


});

module.exports= mongoose.model('Juego', JuegoSchema);