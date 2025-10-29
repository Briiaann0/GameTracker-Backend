
const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`🔌 MongoDB conectado con éxito: ${conn.connection.host}`);
  
    } 
    
    catch (error) 
    {
        console.error(`❌ Error de conexión: ${error.message}`);
        process.exit(1); 
  
    }
};

module.exports = connectDB;