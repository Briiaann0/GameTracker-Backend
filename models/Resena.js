

const mongoose = require ('mongoose');


const ResenaSchema = mongoose.Schema ({

    juegoid: { 

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Juego', 
        required: true
    },
    puntuacion: { 

        type: Number,
        min: 1,
        max: 5, 
        required: true

    },

    textoResena: { type: String, required: true },
    horasJugadas: { type: Number, default: 0 },
    dificultad: { type: String }, 
    recomendar: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now() },
    fechaActualizacion: { type: Date, default: Date.now() }

});

module.exports =mongoose.model(' Resena', ResenaSchema );